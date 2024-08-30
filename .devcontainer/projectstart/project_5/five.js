
const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let colorInterval;

const startChangingColor = function(){
    colorInterval = setInterval(() => {
        document.body.style.backgroundColor = randomColor();
    }, 1000); // Change color every 1 second
};

const stopChangingColor = function(){
    clearInterval(colorInterval);
    colorInterval = NULL;
};

document.querySelector('#start').
addEventListener('click',startChangingColor);

document.querySelector('#stop').
addEventListener('click',stopChangingColor);
