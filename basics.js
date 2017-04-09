/**
 * Created by graham on 4/6/17.
 */

/*
 abstract
 boolean break byte
 case catch char class const continue
 debugger default delete do double
 else enum export extends
 false final finally float for function
 goto
 if implements import in instanceof int interface
 long
 native new null
 package private protected public
 return
 short static super switch synchronized
 this throw throws transient true try typeof
 var volatile void
 while with
 */

/*
NaN is not equal to any value, including itself. You can detect
NaN with the isNaN(number) function.
The value Infinity represents all values greater than 1.79769313486231570e+308.
*/

if ("A" === "\u0041") {
    console.log("They're the same!");
}

/*
 It is usually necessary to test object.hasOwnProperty(variable) to determine whether
 the property name is truly a member of the object or was found instead on the prototype
 chain.
 */

var obj = {
    printme: function () {}
};

for (myvar in obj) {
    if (obj.hasOwnProperty(myvar)) {
        console.log(myvar);
    }
}

var objArr = [
    12345,
    "string",
    0.09,
    function () { },
    new Error("error"),
    null,
    false,
    [ 0, 1, 2, 3 ],
    { key: "thing", value: "another thing" }
];

objArr.forEach(function (element) {
    console.log(typeof element);
}, objArr);


// The delete operator can be used to remove a property from an object.
// It will remove a property from the object if it has one.
// It will not touch any of the objects in the prototype
// linkage.
delete objArr[4];

console.log("Remaining elements of the object array");
objArr.forEach(function (element) {
    console.log(typeof element);
}, objArr);


for (property in objArr) {
    console.log(typeof property);
}

var stooge = {};

// The || operator can be used to fill in default values:
var middle = stooge["middleName"] || "(none)";
console.log(middle);

// The apply method lets us construct an array of arguments to use to invoke a function.
// It also lets us choose the value of this. The apply method takes two parameters.
// The first is the value that should be bound to this. The second is an array of
// parameters.

