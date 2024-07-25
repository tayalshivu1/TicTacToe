const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");
const c5 = document.getElementById("c5");
const c6 = document.getElementById("c6");
const c7 = document.getElementById("c7");
const c8 = document.getElementById("c8");
const c9 = document.getElementById("c9");

let p1 = true;
let p2 = false;
let text = "X";

let winnerEl = document.getElementsByClassName("winner")[0];

Array.from(document.getElementsByClassName("cell")).map((el) => el.blur());

const handleClick = (event) => {
  if (p1 === true) {
    text = "X";
  } else if (p2 === true) {
    text = "O";
  }
  if (event.target.closest("#c1")) {
    c1.value = text;
    disableInput(c1);
  } else if (event.target.closest("#c2")) {
    c2.value = text;
    disableInput(c2);
  } else if (event.target.closest("#c3")) {
    c3.value = text;
    disableInput(c3);
  } else if (event.target.closest("#c4")) {
    c4.value = text;
    disableInput(c4);
  } else if (event.target.closest("#c5")) {
    c5.value = text;
    disableInput(c5);
  } else if (event.target.closest("#c6")) {
    c6.value = text;
    disableInput(c6);
  } else if (event.target.closest("#c7")) {
    c7.value = text;
    disableInput(c7);
  } else if (event.target.closest("#c8")) {
    c8.value = text;
    disableInput(c8);
  } else if (event.target.closest("#c9")) {
    c9.value = text;
    disableInput(c9);
  }
  p1 = !p1;
  p2 = !p2;
  checkWinner();
};

const checkWinner = () => {
  if (areEquals(c1.value, c5.value, c9.value)) {
    disableInput(c1, c2, c3, c4, c5, c6, c7, c8, c9);
    winnerEl.innerText = `Player ${c5.value} is winner`;
    attachClass(c1, c5, c9);
    // helperWinnerFunction(c5,c1,c9)
  } else if (areEquals(c3.value, c5.value, c7.value)) {
    disableInput(c1, c2, c3, c4, c5, c6, c7, c8, c9);
    winnerEl.innerText = `Player ${c5.value} is winner`;
    attachClass(c3, c5, c7);
  } else if (areEquals(c2.value, c5.value, c8.value)) {
    disableInput(c1, c2, c3, c4, c5, c6, c7, c8, c9);
    winnerEl.innerText = `Player ${c5.value} is winner`;
    attachClass(c2, c5, c8);
  } else if (areEquals(c4.value, c5.value, c6.value)) {
    disableInput(c1, c2, c3, c4, c5, c6, c7, c8, c9);
    winnerEl.innerText = `Player ${c5.value} is winner`;
    attachClass(c4, c5, c6);
  } else if (areEquals(c1.value, c4.value, c7.value)) {
    disableInput(c1, c2, c3, c4, c5, c6, c7, c8, c9);
    winnerEl.innerText = `Player ${c1.value} is winner`;
    attachClass(c1, c4, c7);
  } else if (areEquals(c1.value, c2.value, c3.value)) {
    disableInput(c1, c2, c3, c4, c5, c6, c7, c8, c9);
    winnerEl.innerText = `Player ${c1.value} is winner`;
    attachClass(c1, c2, c3);
  } else if (areEquals(c3.value, c6.value, c9.value)) {
    disableInput(c1, c2, c3, c4, c5, c6, c7, c8, c9);
    winnerEl.innerText = `Player ${c9.value} is winner`;
    attachClass(c3, c6, c9);
  } else if (areEquals(c7.value, c8.value, c9.value)) {
    disableInput(c1, c2, c3, c4, c5, c6, c7, c8, c9);
    winnerEl.innerText = `Player ${c9.value} is winner`;
    attachClass(c7, c8, c9);
  } else if(checkTie(c1,c2,c3,c4,c5,c6,c7,c8,c9)) {
    winnerEl.innerText = `Its a Tie Man....`;
  }
};

// const helperWinnerFunction = (...arr) => {
//     disableInput(c1, c2, c3, c4, c5, c6, c7, c8, c9);
//     winnerEl.innerText = `Player ${arr[0].value} is winner`;
//     attachClass(arr);
// }

const attachClass = (...arr) => {
  arr.map((val) => val.classList.add("winner-cell"));
};

const areEquals = (...arr) => {
  return arr.every((value) => value === arr[0] && value !== "");
};

const checkTie = (...arr) => {
  return arr.every((value) => value.value !== "");
};

const disableInput = (...input) => {
  input.map((inp) => (inp.disabled = true));
};

const reset = () => {
  location.reload();
};
