let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 1000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Promise 2 resolved");
        reject(new Error("promise 2 rejected"));
    }, 2000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved");
    }, 3000)
})
Promise.all([p1, p2, p3])
    .then((value) => {
        console.log(value);
    })
    .catch((err) => {
        console.log(err.message);
    })

Promise.allSettled([p1, p2, p3]) // returns all promises with status
    .then((value) => {
        console.log(value);
    })

Promise.race([p1, p2, p3]) //This returned promise settles with the eventual state of the first promise that settles
    .then((value) => {
        console.log(value);
    })

Promise.any([p1, p2, p3]) // This returned promise fulfills when any of the input's promises fulfills
    .then((value) => {
        console.log(value);
    })

Promise.resolve("Promise resolved") // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
    .then((value) => {
        console.log(value);
    })

