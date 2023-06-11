// map not effecting original array
/*forEach: This iterates over a list and applies some operation
with side effects to each list member (example: saving every list item to the database)
and does not return anything.*/

/*map: This iterates over a list, transforms each member of that
list, and returns another list of the same size with the transformed
members (example: transforming list of strings to uppercase). It does
not mutate the array on which it is called (although the callback function may do so).*/
// syntax array.map(function(currentValue, index, arr), thisValue)
/* https://www.w3schools.com/jsref/jsref_map.asp
function()	Required.
            A function to be run for each array element.

currentValue	Required.
                The value of the current element.

index	Optional.
        The index of the current element.

arr	Optional.
    The array of the current element.

thisValue	Optional.
            Default value undefined.
            A value passed to the function to be used as its this value.
*/
let array=[65,78,67,79]
let a=array.map((element,index,arr)=>{
    console.log(element,index,arr);
    /*
    65 0 [ 65, 78, 67, 79 ]
    78 1 [ 65, 78, 67, 79 ]
    67 2 [ 65, 78, 67, 79 ]
    79 3 [ 65, 78, 67, 79 ]
    */
    return element+1;
})
console.log(a);//[ 66, 79, 68, 80 ]

// array filter method not effecting original array
let arr2=[65,78,67,79,56,889,89]
let b=arr2.filter((value)=>{
    return value>100;
})
console.log(b);//[ 889 ]

//Array reduce method
// syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//Reducer function parameters:
// total	Required.
//          The initialValue, or the previously returned value of the function.

// currentValue	    Required.
//                  The value of the current element.

// currentIndex	    Optional.
//                  The index of the current element.

// arr	    Optional.
//          The array the current element belongs to.
let arr3=[1,2,3,4,5,6,7,8,9];
let newArr=arr3.reduce((total,currentValue)=>{
    console.log(total+'+'+currentValue);
    return total+currentValue;
})
console.log(newArr);