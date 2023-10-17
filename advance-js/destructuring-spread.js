// Destructuring
let arr = [1,2,3,44,34,56];
// let [a,b,c,d] = arr;
// let [a,b,c]=arr;
// console.log(a,b,c);//1 2 3
// let [a,b,c,d,e,f,g]=arr;
// console.log(a,b,c,d,e,f,g);//1 2 3 44 34 56 undefined
// let [a,b,c,...rest]=arr;
// console.log(a,b,c,rest);//1 2 3 [ 44, 34, 56 ]
// let [a,b,c,d,e,f,g,h=45]=arr;
// console.log(a,b,c,d,e,f,g,h);//1 2 3 44 34 56 undefined 45
let [a, ,b, ,...rest]=arr;
// console.log(a,b,rest);//1 3 [ 34, 56 ]

//spread operator
let arr1 = [1,2,3,4,5];
let obj={...arr1};
console.log(obj);//{ '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

//use case
const sum = (...args) => {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}
console.log(sum(1,2,3,4,5,6,7,8,9,10));//55

const sum2 =(n1,n2,n3)=>{
    return n1+n2+n3;
}
sum2(...arr1);
console.log(sum2(...arr1));//6

let obj1={
    name:'ram',
    age:34,
    address:'delhi',
}
console.log({...obj1,age:45});//{ name: 'ram', age: 45, address: 'delhi' }
console.log({age:45,...obj1});//{ age: 34, name: 'ram', address: 'delhi' } not change the value