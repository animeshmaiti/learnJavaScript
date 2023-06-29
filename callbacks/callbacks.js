//Asynchronous JavaScript
//Functions running in parallel with other functions are called asynchronous
// https://www.w3schools.com/js//js_asynchronous.asp
console.log("start");
setTimeout(() => {
    console.log("2 seconds timer");
}, 2000);
console.log("end");
// callbacks
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
      console.log("Loaded script with SRC: " + src)
      callback(null, src);
    }
    script.onerror = function() {
      console.log("Error loading script with SRC: " + src);
      callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
  }
  
  function hello(error, src) {
    if (error) {
      console.log(error)
      return
    }
    console.log('Hello World!' + src);
  }
  
  
  function goodMorning(error, src) {
    
    if (error) {
      console.log(error)
      return
    }
    console.log('Good morning' + src);
  }
  
  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodMorning) 