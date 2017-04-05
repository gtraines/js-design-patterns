/*
 * If we have methods return "this" instead of "undefined," we can enable
 * CASCADES.
 * Cascade - call many methods on the same object in sequence in a single statement
 */


var argsArray = [
    "arg 1",
    "arg 2",
    "arg 3"
]

var chainableObject = {
    doNormalOperation: doNormalOperation,
    updateUI: updateUI
}

chainableObject.doNormalOperation(argsArray).updateUI();

function doNormalOperation() {
    console.log(arguments);

    this.arr = arguments[0];
    return this;
}

function updateUI() {
    console.log(arguments);
    console.log(this.arr);
    return this;
}