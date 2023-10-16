let num = [1,2,3,4,5,6,7,8,9];
num_more=[18,93,9,3,99,84]
num_even_more=[133,447,789,445,444]
delete num[0];//effect the existing array
console.log(num);//[ <1 empty item>, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(num.length);//9

let newArray=num.concat(num_more,num_even_more);
console.log(newArray);/*[
    <1 empty item>, 2,
    3,              4,
    5,              6,
    7,              8,
    9,              18,
    93,             9,
    3,              99,
    84,             133,
    447,            789,
    445,            444
  ]*/

// sort method for more details this is a very good function
//https://www.w3schools.com/jsref/jsref_sort.asp
let num2=[3,477,4,57,56];
num2.sort();//short the elements alphabetically 3->4->5 and its effect the existing array
console.log(num2);/*[ 3, 4, 477, 56, 57 ] */
//https://www.w3schools.com/jsref/jsref_sort.asp
const compareAsc=(a,b)=>{
    return a-b
}
const compareDes=(a,b)=>{
    return b-a
}
let num3=[34,78,233,455,389,677]
// The sort method will repeatedly call compareAsc with pairs of elements from the array.
// If the result of compareAsc(a, b) is negative, it means that a should come before b in the sorted order.
// If it's positive, it means that a should come after b. If it's zero,
// the elements are considered equal in terms of sorting.
num3.sort(compareAsc);// ascending order
console.log(num3);/*[ 34, 78, 233, 389, 455, 677 ]*/
num3.sort(compareDes);// descending order
console.log(num3);/*[ 677, 455, 389, 233, 78, 34 ]*/

let num4=[34,78,233,455,389,677]
num4.reverse();//effect the existing array 
console.log(num4)//[ 677, 389, 455, 233, 78, 34 ]

// splice(index "2",next no. of elements to delete "4",add elements "34,67,78,79,88")
//and its return deleted array type of return is array
// syntax=> array.splice(index, howmany, item1, ....., itemX)
let num5=[1,2,3,4,5,6,7,8,9];
console.log(num5.length);// 9
let result=num5.splice(2,4,34,67,78,79,88);// from index 2 to delete next 4 elements and add that deleted index 34,67,78,79,88
console.log(result);//[ 3, 4, 5, 6 ]
console.log(num5.length);// 10
console.log(num5);/*[
    1,  2, 34, 67, 78,
   79, 88,  7,  8,  9
 ]*/
num5.splice(2,4,45);
console.log(num5.length);//7 it change the original array elements and length 
console.log(num5);/*[
    1, 2, 45, 88,
    7, 8,  9
  ]*/

// slice(start index,end index)
let num6=[1,2,3,4,5,6,7,8,9];
newArray=num6.slice(2);//not effect original array
console.log(newArray);//[3, 4, 5, 6,7, 8, 9]
newArray=num6.slice(2,4);//return index 2nd to before index 4th ele and return the new array
console.log(newArray);//[ 3, 4 ]

