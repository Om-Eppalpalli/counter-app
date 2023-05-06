let count = 0;
const counter = document.getElementById("counter");

let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let reset = document.getElementById("reset");

increment.onclick = function() {
    count += 1;
    counter.innerText = count;
}
decrement.onclick = function() {
    count -= 1;
    counter.innerText = count;
}
reset.onclick = function() {
    count = 0;
    counter.innerText = count;
}