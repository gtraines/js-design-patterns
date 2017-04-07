/* 
 * Curry - produce a new function by combining a function and an argument
 */


// For training purposes only
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

Function.method('curry', function() {
    var slice = Array.prototype.slice;
    var args = slice.apply(arguments); // arguments is an "array-like" until we apply the slice
    var that = this;

    return function() {
        return that.apply(null, args.concat(slice.apply(arguments)));
    };
});

var add = function(arg1, arg2) {
    return arg1 + arg2;
};

var add1 = add.curry(1);
console.log(add1(1)); 


