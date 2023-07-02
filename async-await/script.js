const asyncFunction = async () => {
    let kolkataWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                temp: 30,
                condition: "Sunny"
            })
        }, 2000)
    })

    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                temp: 45,
                condition: "Sunny"
            })
        }, 5000)
    })

    let mumbaiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve({
            //     temp: 35,
            //     condition: "Cloudy"
            // })
            reject(new Error("connection lost"));
        }, 7000)
    })
    console.log("fetching kolkataW data");
    let kolkataW = await kolkataWeather;
    console.log("fetched kolkataW data", kolkataW);

    console.log("fetching delhiW data");
    let delhiW = await delhiWeather;
    console.log("fetched delhiW data", delhiW);

    console.log("fetching mumbaiW data");
    let mumbaiW = await mumbaiWeather;
    console.log("fetched mumbaiW data", mumbaiW);
    return [kolkataW, delhiW, mumbaiW];
}
const asyncFunction2 = async () => {
    // console.log("asyncFunction2 i am not waiting for asyncFunction");
    console.log("asyncFunction2 i am waited for asyncFunction");
}

const main1 = async () => {
    console.log("main1 function is running");
    await asyncFunction().then((data) => {
        console.log("data", data);
    }).catch((err) => {
        console.log("err", err);
    })
    await asyncFunction2();// if we don't use await then it will not wait for asyncFunction to complete it parallely run
}
main1();