let rect = document.querySelector('#rect');

rect.addEventListener('mousemove', function(details) {
    var rectLocX = rect.getBoundingClientRect().left;
    let rectWidth = rect.getBoundingClientRect().width;
    let mouseX = details.clientX;
    let inRectX = mouseX - rectLocX;
    let percent = inRectX / rectWidth * 100;
    let red = 255 * percent / 100;
    let blue = 255 * (100 - percent) / 100;
    
    rect.style.backgroundColor = `rgb(${red}, 0, ${blue})`;
    // console.log(inRectX);
});