// To experiment with error handling, "threshold" values cause errors randomly
const THRESHOLD_A = 9; // desire numbers less than this to get error

function tetheredGetNumber(resolve, reject) {
    setTimeout(() => {
        // const randomInt = Date.now();
        // const value = randomInt % 10;
        const value = 10;
        if (value < THRESHOLD_A) {
            resolve(value);
        } else {
            reject(`Too large: ${value}`);
        }
    }, 500);
}

function determineParity(value) {
    const isOdd = value % 2 === 1;
    return { value, isOdd };
}

function troubleWithGetNumber(reason) {
    const err = new Error("Trouble getting number", { cause: reason });
    console.error(err);
    throw err;
}

function promiseGetWord(parityInfo) {
    return new Promise((resolve, reject) => {
        const { value, isOdd } = parityInfo;
        if (value >= THRESHOLD_A - 1) {
            reject(`Still too large: ${value}`);
        } else {
            parityInfo.wordEvenOdd = isOdd ? "odd" : "even";
            resolve(parityInfo);
        }
    });
}

new Promise(tetheredGetNumber)
    .then(determineParity, troubleWithGetNumber)
    .then(promiseGetWord)
    .then((info) => {
        console.log(`Got: ${info.value}, ${info.wordEvenOdd}`);
        return info;
    })
    .catch((reason) => {
        if (reason.cause) {
            console.error("Had previously handled error");
        } else {
            console.error(`Trouble with promiseGetWord(): ${reason}`);
        }
    });
//   .finally((info) => console.log("All done"));
