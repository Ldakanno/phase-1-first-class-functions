function receivesAFunction(callback) {
    console.log(callback());
}

function returnsANamedFunction() {
    return function aNamedFunction() {};
}

function returnsAnAnonymousFunction() {
    return function() {};
}
