let key, value;
const setValue = () => {
    key = document.getElementById("key").value;
    value = document.getElementById("value").value;
    localStorage.setItem(key, value);
    console.log(`the value at ${key} is ${localStorage.getItem(key)}`);
    if (key === "red") {
        localStorage.removeItem(key);
    }
    if (key == 0 && value == 0) {
        localStorage.clear();
    }
}
console.log(`stored key at index 0 in local storage ${localStorage.key(0)}`);
console.log(`length of local storage ${localStorage.length}`);
console.log(localStorage.getItem("blue"));// getItem returns the value of the key 
for(let i=0; i<localStorage.length; i++){
    console.log(`key at index ${i} is ${localStorage.key(i)}`);
}