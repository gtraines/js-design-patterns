
/* 
 * Here we have some fun with JavaScript scoping and function invocation
 */

var MyFuncApp = MyFuncApp || {};

var a = 99;
var b = 88;
var c = 77;

MyFuncApp.funcParent = function() {

    c = 12;
    b = c;
    a = 13;

    funcChild(a, b, c);
    console.log(a, b, c);

    return [a, b, c];
    
    function funcChild() {
        c = arguments[0];
        b = arguments[1];
        a = arguments[2];
    };

    var a = 33;
    var b = 22;
    var c = "11";
};

var output = MyFuncApp.funcParent();

console.log("Output: ", output);


var funcParent2 = function(a, b, c) {
    
    return function() { 
        console.log("funcParent2: a: ", a, " b: ", b, " c: ", c);
        return [a,b,c];
    };

    var a = 44;
    var b = 55;
    var c = 66;
};

funcParent2(a, b, c);
(funcParent2(a, b, c))();


var objectLiteral = {
    propertyA: "Potatoes",
    functionA: function() {
        return this.propertyA;
    },
    functionB: functionB
};
var lostChild = objectLiteral.functionA;

console.log("Should be potatoes: ", objectLiteral.functionA());

objectLiteral.propertyA = "Yams";

console.log("Should be Yams: ", objectLiteral.functionA());
console.log("Should be Yams? ", lostChild()); // What happened?

var newObjectLiteral = { 
    propertyA: "Member Berries", 
    functionC: lostChild 
};

console.log("Should be Member Berries? ", newObjectLiteral.functionC()); // Has a "this" again

// Let's see if we can capture a closure
var innerFood = "City Wok";

(objectLiteral.functionB("Oranges"))();
(objectLiteral.functionB())();

var lazyFunction = objectLiteral.functionB("Wassail");
var lazyFunctionNoArgs = objectLiteral.functionB();

// Gotcha!
lazyFunction();
lazyFunction();
lazyFunctionNoArgs();
lazyFunction();
lazyFunctionNoArgs();
lazyFunctionNoArgs();
lazyFunctionNoArgs();
lazyFunction();


function functionB(outerFood) {
    var outerFoodMemo = outerFood || "White Hominy";
    var innerFood = "Member Berries";
    var count = count || 0;

    if (outerFood === null)
    {
        count++;
        return function() {
            console.log("Outer Food: ", outerFoodMemo, " InnerFood : ", innerFood, " Call Count: ", count);
        }; 
    }

    return function() {
        count++;
        console.log("Outer Food: ", outerFoodMemo, " InnerFood : ", innerFood, " Call Count: ", count);
    };
}

var empty_object = {};
var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};

var x = stooge;
x.nickname = 'Curly';
var nickname = stooge.nickname;
// nick is 'Curly' because x and stooge
// are references to the same object

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}
var another_stooge = Object.create(stooge);

console.log(another_stooge.nickname);