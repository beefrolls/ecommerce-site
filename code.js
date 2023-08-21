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
        button1.disabled = false;
    } else if (counter == 2) {
        image2.style.display = 'none'
        image3.style.display = 'flex';
        button1.disabled = true;
    }
})

button2.addEventListener('click', function() {
    counter -= 1;
    console.log(counter)
    if (counter == 1) {
        image1.style.display = 'none';
        image2.style.display = 'flex';
        button1.disabled = false;
    } else if (counter == 2) {
        image2.style.display = 'none';
        image3.style.display = 'flex';
        button1.disabled = false;
    } else if (counter == 0) {
        image1.style.display = 'flex';
        image2.style.display = 'none';
        button2.disabled = true;
    }
})