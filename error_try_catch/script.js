// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
try {
    throw new TypeError("oops");
} catch ({ name, message }) {
    console.log(name); // "TypeError"
    console.log(message); // "oops"
}
// The catch block catches any exception that may be thrown in the try block.
try {
    console.log(nonExistentVariable);
} catch (e) {
    console.log(e.name);// ReferenceError 
}
// this try...catch statement is not able to catch errors that occur asynchronously.
// try {
//     setTimeout(() => {
//         console.log(nonExistentVariable)
//     }, 100)
// }
// catch (err) {
//     console.log("with set timeout", err.name);
// }

// the exception variable is writable. For example, you may want to normalize the exception value to make
// sure it's an Error object.
try {
    // throw "Oops; this is not an Error object";
    throw new Error("I'm an Error object");
  } catch (e) {
    if (!(e instanceof Error)) {
      e = new Error(e);
    }
    console.error(e.message);
    // console.log(e);
  }
  