function receivesAFunction(cb) {
    cb()
};

function cb() {
    console.log("call backing")
};

function returnsANamedFunction() {
    return cb1
}

function cb1() {
    return "returns"
}

function returnsAnAnonymousFunction() {
    return function() {console.log("anonymous")}
};