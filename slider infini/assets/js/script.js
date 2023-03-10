let arrowLeft = document.querySelector('.fa-arrow-left');
let pause = document.querySelector('.fa-pause');
let arrowRight = document.querySelector('.fa-arrow-right');
let shuffle = document.querySelector('.fa-shuffle');
let img = document.querySelector('.img');


const arrayImg = ['./images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg', './images/5.jpg', './images/6.jpg'];

console.log(img.src);

arrowRight.addEventListener('click', () => {
    let indice = img.indexOf(img.src);
    img.src= arrayImg[indice + 1];
    console.log(img.src);
});





// for(let i = 0; i < arrayImg.length; i++){
//     // let test = 
//     arrowRight.addEventListener('click', () => {
//         img.src= arrayImg[i++];
//         console.log(i);
//     });
// }

// arrowRight.addEventListener('click', () => {
//     img.src= arrayImg[2];
// });
