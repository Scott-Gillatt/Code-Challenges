var numbers = [];

randomNumbers = function(array){
    // numbers = [];
    for (var i = 0; i < 100; i++){
        array.push(Math.floor(Math.random()* 1000))
    }
    pageNumbers = array
    document.getElementById('List').textContent = pageNumbers
}

shuffleNumbers = function(array){
    var holder;
    for (var i = 0; i <array.length; i++){
        var randomIndex = Math.floor(Math.random()*array.length);
        holder = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = holder;
    }
    pageNumbers = array
    document.getElementById('List').textContent = pageNumbers
}

sortNumbers = function(array){
    var last2Index = array.length - 1,
    swapOccured,
    holder,
    nextIndex;
    array.some(function(){
    for(var i = 0; i < last2Index; i++){
        nextIndex = i + 1;
        if(array[i] > array[nextIndex]){
            holder = array[nextIndex];
            array[nextIndex] = array[i];
            array[i] = holder;
            swapOccured = true;
        }
    }
    if (!swapOccured){
        return true;
    }
    return false;
    })
    pageNumbers = array
    document.getElementById('List').textContent = pageNumbers
}

//insertion sort
insertionSort = function(array){
    for (var i = 1; i < array.length; i++){
        var temp = array[i];
        var j = i-1;
        for(;j>=0 && array[j] > temp; --j){
            array[j+1] = array[j]
        }
        array[j+1] = temp
    }
}

//Quick Sort
var c = [34, 203, 3, 746, 200, 984, 198, 764, 9];
var quickSort = function(arr){
    
}