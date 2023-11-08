for(let i = 1; i < 55; i++){
    let box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box)
}

// add random colors in each box

let randomColorBlack = document.querySelectorAll('.box');

const addColor = () =>{
    randomColorBlack.forEach(e =>{
       e.style.background = randomColorRGB(); // we can use hex or rgb color
    })
}

// the color changer function return hex color

const randomColorHex = () =>{
    let chars = "1234567890abcdf";
    let colorLength = 6;
    let color = " ";

    for(let i = 1; i <= colorLength; i++){
        let randomColors = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomColors,randomColors+1);
    }

    return '#' + color
}

//                 Or


// the color changer function return rgb color 

const randomColorRGB = () =>{
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;
  let a = 0.5;

  return `rgba(${r},${g},${b})`;
}

addColor();


let boxes = document.querySelectorAll(".box");
const scrollTrigger = () => {
    boxes.forEach( boxxx =>{
        if(boxxx.offsetTop < window.scrollY){
            boxxx.classList.add('active')
        }else{
            boxxx.classList.remove("active")
        }
    })
}

// window.addEventListener('scroll', scrollTrigger)
//      OR
window.onscroll = scrollTrigger;