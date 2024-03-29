let arrowLeft = document.querySelector('.fa-arrow-left');
let pause = document.querySelector('.fa-pause');
let arrowRight = document.querySelector('.fa-arrow-right');
let shuffle = document.querySelector('.fa-shuffle');
let img = document.querySelector('.img');

// Array d'images
const arrayImg = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg'];

let i = 0;
let clickCount = 0;

// Fonction pour passer à l'image suivante
arrowRight.addEventListener('click', () => {
    i += 1;
    if (i == arrayImg.length) {
        i = 0;
    }
    img.src = arrayImg[i];
});

// Fonction pour passer à l'image précédente
arrowLeft.addEventListener('click', () => {
    if (i == 0) {
        i = 6;
    }
    i -= 1;
    img.src = arrayImg[i];
});

// Fonction pour passer à une image aléatoire
shuffle.addEventListener('click', () => {
    let last = img.src.slice(-13);
    console.log('last : ' + last);
    let rand = Math.floor(Math.random() * arrayImg.length);
    console.log('random : ' + rand);

    if(last == '/images/' + rand + '.jpg'){
        let rand2 = Math.floor(Math.random() * arrayImg.length);
        console.log('rand2 : ' + rand2);
        img.src = arrayImg[rand2];
    } else {
        img.src = arrayImg[rand];
    }
});



let timer;
// Fonction pour mettre en pause/marche le slider
pause.addEventListener('click', () => {
    clickCount++
    console.log(clickCount);
    if(clickCount%2 === 1){
        timer = setInterval(() => {
            i += 1;
        if (i == arrayImg.length) {
            i = 0;
        }
        img.src = arrayImg[i];
        }, 800); 
    }
    else{
        clearInterval(timer);
    }
});






































// console.log(img.src);

// arrowRight.addEventListener('click', () => {
//     let indice = arrayImg.indexOf(img.src);
//     console.log(indice);
//     img.src= arrayImg[indice + 1];
//     console.log(img.src);
//     // img.src.split('/');
//     // console.log(img.src);
//     console.log(img.src.split('/'));
//     let last = arrayImg.slice(-1).pop();
//     console.log(last);
// });





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
