let id1=document.getElementById('id1');
console.log(id1);
// matches
// if the class is available in id1 it will return true other wise false
console.log(id1.matches('.class'));
console.log(id1.matches('.box'));
// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
const birds = document.querySelectorAll("li");

for (const bird of birds) {
  if (bird.matches(".endangered")) {
    console.log(`The ${bird.textContent} is endangered!`);
  }
}
// closest(selector)
//The closest ancestor Element or itself, which matches the selectors. If there are no such element, null.
// https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
const el = document.getElementById("div-03");

// the closest ancestor with the id of "div-02"
console.log(el.closest("#div-02")); // <div id="div-02">

// the closest ancestor which is a div in a div
console.log(el.closest("div div")); // <div id="div-03">

// the closest ancestor which is a div and has a parent article
console.log(el.closest("article > div")); // <div id="div-01">

// the closest ancestor which is not a div
console.log(el.closest(":not(div)")); // <article>

//contains(otherNode)
// A boolean value that is true if otherNode is contained in the node, false if not.
// If the otherNode parameter is null, contains() always returns false
let sp1=document.getElementById('sp1');
console.log(id1.contains(sp1));// true
console.log(sp1.contains(sp1));// true
console.log(sp1.contains(id1));// false
