var str = "Hello World";
var str2 = "";
var reverseString = function (foo) {
    for (var i = foo.length - 1; i >= 0; i--) {
        str2 += foo[i];
    }
}
reverseString(str);
console.log(str2);

var str2 = "Hello";
function reverseString2(str) {
    var arrString = str.split("");
    var newstring = "";
    for (var i = arrString.length - 1; i > 0; i--) {
        newstring += arrString[i];
    }
    return newstring;
}
console.log(reverseString2("Hello"));