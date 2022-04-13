// 1)
const button1 = document.getElementById(`one`);
button1.onclick = function(){
    alert(`You clicked the first button! Congrats!`);
};

// 2)
const h3 = document.querySelector(`h3`);
h3.addEventListener(`mouseover`, () => {
    alert(`You hovered over the h3 element! Congrats!`);
});

// 3)
const form = document.querySelector(`form`);
form.addEventListener(`submit`, () => {
    const entry = form.elements.entry.value;
    alert(`${entry}`);
});

// 4)
const darkMode = document.getElementById(`dm`);
const body = document.querySelector(`body`);
darkMode.addEventListener(`click`, () => {
    body.classList.toggle(`dark-mode`);
});

// 5)
const times = document.getElementById(`times`);
let x = 0;
times.addEventListener(`click`, () => {
    x++;
    if (x <= 2){
        alert(`You clicked the last button! Congrats!`);
    } else if (x === 3){
        alert(`OH NO! This button is not going to work anymore!`);
    } else {
        times.disabled = true;
    }
});