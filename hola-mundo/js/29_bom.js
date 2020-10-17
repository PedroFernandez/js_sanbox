'use strict'

// BOM - Browser Object Model
function getBomDimenstions() {
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location);
    console.log(window.location.href);
}
getBomDimenstions();

function redirect(url) {
    window.location.href = url;
}