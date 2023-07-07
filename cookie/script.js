console.log(document.cookie);
document.cookie = "name=John";
document.cookie = "surname=Smith";
document.cookie = "user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
let key =prompt("Enter a key");
let value =prompt("Enter a value");
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie);
