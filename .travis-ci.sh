
export ppa=avsm/ocaml41+opam12

echo "yes" | sudo add-apt-repository ppa:$ppa
sudo apt-get update -qq
sudo apt-get install -qq ocaml ocaml-native-compilers camlp4-extra opam
export OPAMYES=1

opam init
eval `opam config env`

opam pin add -n lilis https://github.com/Drup/LILiS.git

echo -e "Install dependencies"
opam install ocamlfind oasis tyxml js_of_ocaml containers

echo -e "Install lilis"
opam install lilis

echo -e "Build!"
./configure --enable-tests
make test

# If appropriate, build and push the website
if [ "$TRAVIS_REPO_SLUG" == "Drup/LILiS.jsoo" ] \
    && [ "$TRAVIS_PULL_REQUEST" == "false" ] \
    && [ "$TRAVIS_BRANCH" == "master" ] \
    && [ "${DOC}" != "" ] ; then

    echo -e "Publishing website...\n"
    git config --global user.email "travis@travis-ci.org"
    git config --global user.name "travis-ci"
    git clone https://${GH_TOKEN}@github.com/Drup/LILiS.jsoo .website
    cd .website
    git fetch
    ./configure --enable-tests
    make test
    make deploy

    if [ -n "$(git status --untracked-files=no --porcelain)" ]; then
        git commit -m "Update documentation $TRAVIS_BUILD_NUMBER"
        git push -q origin gh-pages
        echo -e "Published to gh-pages.\n"
    fi
fi
