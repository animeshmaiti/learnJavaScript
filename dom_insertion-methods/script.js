let a=document.getElementsByTagName('div')[0];
a.innerHTML +='<h1>Hello World</h1>'
let h1=document.createElement('h1');
h1.innerHTML='hello';
a.append(h1);// https://developer.mozilla.org/en-US/docs/Web/API/Element/append
// a.prepend(h1);// https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend
// a.before(h1);// https://developer.mozilla.org/en-US/docs/Web/API/Element/before
// a.after(h1);// https://developer.mozilla.org/en-US/docs/Web/API/Element/after
// a.replaceWith(h1);// https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceWith
