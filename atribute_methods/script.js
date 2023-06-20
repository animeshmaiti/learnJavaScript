let container= document.getElementById('container');//without this you can also use
                                                    // container but that is not good practice
let a = container.getAttribute('class');
console.log(a);
// is this container has this attribute
console.log(container.hasAttribute('class'));
console.log(container.hasAttribute('style'));
// set attribute
container.setAttribute('hidden','true');// hide the container attribute
container.setAttribute('class','hello how');// set the class hello and how but existing class will overwrite
container.removeAttribute('class');// remove the class attribute
console.log(container.attributes);//get all attributes
//access custom attributes without any future problems
console.log(container.dataset);
console.log(container.dataset.game);
console.log(container.dataset.player);