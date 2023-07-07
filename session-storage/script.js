// sessionStorage is similar to localStorage; the difference is that while data in
// localStorage doesn't expire, data in sessionStorage is cleared when the page session ends.
// A page session lasts for as long as the browser is open and survives over page reloads and restores.
// Opening a page in a new tab or window will cause a new session to be initiated, which differs from how session cookies work.
sessionStorage.setItem('name', 'Chris');
sessionStorage.setItem('age', 38);
sessionStorage.setItem('location', 'UK');

sessionStorage.getItem('name'); // Chris
// storage events
// The storage event is fired on the window object whenever setItem(), removeItem(), or clear() is called
// and actually changes something.
// For example, if you set an item to its existing value or call clear() when there are no named keys,
// the storage event will not fire, because nothing actually changed in the storage area.
localStorage.setItem('name', 'Chris');
window.onstorage = (e)=> {
    console.log('changed');
    console.log(e);
}
// To See the storage event in action, open two browser windows and set an item in one, then watch the other.