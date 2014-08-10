
export ppa=avsm/ocaml41+opam11

echo "yes" | sudo add-apt-repository ppa:$ppa
sudo apt-get update -qq
sudo apt-get install -qq ocaml ocaml-native-compilers camlp4-extra opam
export OPAMYES=1

opam init
eval `opam config env`

opam install ocamlfind oasis tyxml js_of_ocaml containers lilis

./configure --enable-tests
make test

# If appropriate, build and push the documentation
if [ "$TRAVIS_REPO_SLUG" == "Drup/LILiS.jsoo" ] \
    && [ "$TRAVIS_PULL_REQUEST" == "false" ] \
    && [ "$TRAVIS_BRANCH" == "master" ] \
    && [ "${DOC}" != "" ] ; then

    echo -e "Publishing ocamldoc...\n"
    git config --global user.email "travis@travis-ci.org"
    git config --global user.name "travis-ci"
    make deploy
    git commit -m "Update documentation $TRAVIS_BUILD_NUMBER"
    git push -q origin gh-pages
    echo -e "Published to gh-pages.\n"
fi
