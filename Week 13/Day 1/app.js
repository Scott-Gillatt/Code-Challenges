var numbers = [4, 5, 4 , 4, 5, 4, 5]

function unique(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (newArr.indexOf(arr[i]) < 0 ){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(unique(numbers));

var unique1 = function (arr){
    return arr.filter(function(x,i) {
        return arr.indexOf(x) === i
    })
}

Array.prototype.unique2 = function () {
    var newArr = [];
    for (var i = 0; i < this.length; i++){
        if (newArr.indexOf(this[i]) < 0){
            newArr.push(this[i]);
        }
    }
    return newArr;    
}