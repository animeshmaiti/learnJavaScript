let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise 1 resolved")
    }, 2000)
})

p1.then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise 2 resolved")
        }, 2000)
    })
})
.then((value)=>{
    console.log("done after 2nd promise");
    return 2
})
.then((value)=>{
    console.log("we are done after 2nd promise's then");
})