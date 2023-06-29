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
        // this is a manual error not an actual error
        // if you write "i am success" in rejected it will be considered
        // as a success but we are writing an error so it will be considered as an error
        rejected(new Error("i am an error"));
    }, 2000)
})
// To get the value
// .then((value) => {}) .then will be called when the promise is resolved
p1
    .then((value) => {// this value is the value that we passed in resolve
        console.log(value)
    })
    .catch((err) => {// this err is the value that comes in error in in rejected
        console.log(err)
    })

p2
    .then((value) => {
        console.log(value)
    })
    .catch((err) => {
        console.log(err)
    })