//ES6 module syntax
export const hello = ()=>{
    console.log('Hello World');
}
export const bye = (name) =>{
    console.log('Bye ' + name);
}

const greeting = ()=>{
    console.log('Good Morning User');
}

export default greeting;