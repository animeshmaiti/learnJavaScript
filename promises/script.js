let p1 = new Promise((resolve, rejected) => {
    console.log("Promise 1 pending");
    setTimeout(() => {
        resolve("Promise 1 resolved");
        // resolve(true)
    }, 2000)
})
let p2 = new Promise((resolve, rejected) => {
    console.log("Promise 2 pending");
    setTimeout(() => {
        rejected(new Error("i am an error"));
    }, 2000)
})
// To get the value
p1
    .then((value) => {
        console.log(value)
    })
    .catch((err) => {
        console.log(err)
    })

p2
    .then((value) => {
        console.log(value)
    })
    .catch((err) => {
        console.log(err)
    })