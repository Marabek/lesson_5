const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
let cleaner = document.getElementById('reset');

let state = 0;

let calc = (() => {
    counter.textContent = state.toString();
});

addBtn.addEventListener('click', () => {
    state++;
    calc();
})

subBtn.addEventListener('click', () => {
    state--;
    calc();
});

cleaner.addEventListener('click', () => {
    state = 0;
    calc();
});