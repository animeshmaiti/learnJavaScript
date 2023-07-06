let p=fetch("https://goweather.herokuapp.com/weather/Ny")

p.then((response)=>{
    // this first then is the response from the server
    console.log(response)
    // A Promise that resolves to a JavaScript object. This object could be anything
    //  that can be represented by JSON
    return response.json()
})
.then((data)=>{
    console.log(data)
})