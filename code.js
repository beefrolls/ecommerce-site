/*
const image1 = document.querySelector('.image-1 img');
const image2 = document.querySelector('.image-2 img');
const image3 = document.querySelector('.image-3 img');
const button1 = document.querySelector('.slideshow #right');
const button2 = document.querySelector('.slideshow #left');

let counter = 0;

button1.addEventListener('click', function() {
    counter += 1;
    console.log(counter)
    if (counter == 1) {
        image1.style.display = 'none';
        image2.style.display = 'flex';
    } else if (counter == 2) {
        image2.style.display = 'none'
        image3.style.display = 'flex';
    } else if (counter == 3) {
        image3.style.display = 'none';
        image1.style.display = 'flex';
        counter = 0;
    }
})

button2.addEventListener('click', function() {
    console.log(counter)
    if (counter == 1) {
        image1.style.display = 'none';
        image2.style.display = 'flex';
    } else if (counter == 2) {
        image2.style.display = 'none';
        image3.style.display = 'flex';
    } else if (counter == 0) {
        image1.style.display = 'flex';
        image2.style.display = 'none';
        counter == 3;
    } else if (counter == -1) {
        image1.style.display = 'none';
        image3.style.display = 'flex';
    }
    counter -= 1;
})
*/

const image1 = document.querySelector('.image-1 img');
const image2 = document.querySelector('.image-2 img');
const image3 = document.querySelector('.image-3 img');
const right = document.querySelector('.slideshow #right');
const left = document.querySelector('.slideshow #left');

let counter = 0;

let display1 = image1.style.display;
let display2 = image2.style.display;
let display3 = image3.style.display;

right.addEventListener('click', function() {
    console.log(counter)
    if (counter == 0) {
        counter += 1;
        image1.style.display = 'none';
        image2.style.display = 'flex';
    } else if (counter == 1) {
        counter += 1;
        image2.style.display = 'none';
        image3.style.display = 'flex';
    } else if (counter == 2) {
        counter = 0;
        image1.style.display = 'flex';
        image3.style.display = 'none';
    }
})

left.addEventListener('click', function() {
    console.log(counter)
    if (counter == 0) {
        counter = 2;
        image1.style.display = 'none';
        image3.style.display = 'flex';
    } else if (counter == 1) {
        counter -= 1;
        image2.style.display = 'none';
        image1.style.display = 'flex';
    } else if (counter == 2) {
        counter -= 1;
        image2.style.display = 'flex';
        image3.style.display = 'none';
    }
})