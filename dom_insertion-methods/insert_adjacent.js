// syntax=> insertAdjacentHTML(position, text)
/*<!-- beforebegin -->
<div>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</div>
<!-- afterend -->*/
let first=document.getElementById('first');
first.insertAdjacentHTML('beforebegin','<div class="test">beforebegin</div>');
first.insertAdjacentHTML('afterbegin','<div class="test">afterbegin</div>');
first.insertAdjacentHTML('beforeend','<div class="test">beforeend</div>');
first.insertAdjacentHTML('afterend','<div class="test">afterend</div>');