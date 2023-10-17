//immediate invoke function expression
let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello');
        }, 2000)
    });
}
// let f = async () => {
//     let b = await a();
//     console.log(b);
//     let c = await a();
//     console.log(c);
//     let d = await a();
//     console.log(d);
// }
(async () => {
    let b = await a();
    console.log(b);
    let c = await a();
    console.log(c);
    let d = await a();
    console.log(d);
})();
// f();