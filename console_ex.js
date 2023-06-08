// these actual work you can see in browser console 
// usually console is used for developers
console.error('there is an error');//this is a error massage in red color
let obj={
    a:5,
    b:'hfg',
    c: false,
}
console.table(obj);//this give a tabular form
console.warn('hey don\'t go there');//this give you a warning massage in yellow color

console.assert(55>3);//if condition is true it will don't give any error 
console.assert(55<3);// if false it gives a special error massage 'Assertion failed'
console.clear();//clear the console