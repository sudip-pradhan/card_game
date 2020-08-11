
let deckCursor = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function init() {
  let x = document.querySelectorAll("img");
  for (let i = 6; i < x.length; i++)
    x[i].style.display = "none";
}

function displayTop() {
  let x = document.getElementById("hiddenBank").querySelectorAll("img");
  let y = document.getElementById("sortedBank").querySelectorAll("img");
  x[0].src = "./img/" + stack[stack.length - 1] + ".png";

  if (sorted[0].length)
    y[0].src = "./img/" + sorted[0][sorted[0].length - 1] + ".png";
  if (sorted[1].length)
    y[1].src = "./img/" + sorted[1][sorted[1].length - 1] + ".png";
  if (sorted[2].length)
    y[2].src = "./img/" + sorted[2][sorted[2].length - 1] + ".png";
  if (sorted[3].length)
    y[3].src = "./img/" + sorted[3][sorted[3].length - 1] + ".png";
}

function deckDisplay() {
  let x = document.getElementById("bottShelf").querySelectorAll("img");

  if (deckCursor >= deck.length) {
    for (let i = 0; i < 34; i++) {
      x[i].style.display = "none";
    }
    deckCursor = 0;
    spliceelement.sort();
    for (let i = 0; i < spliceelement.length; i++) {
      deck.splice(spliceelement[i] - i, 1);
      hash[spliceelement[i]] = 0;
    }
    spliceelement = [];

    return;
  }

  for (let i = deckCursor; i < deckCursor + 3 && i < deck.length; i++) {
    if (i < deck.length) {
      x[i].src = "./img/" + deck[i] + ".png";
      x[i].style.display = "";
    }

    else
      x[i].style.display = "none";
  }

  if (deckCursor < 33) {
    if (deckCursor - 1 > 0)
      x[deckCursor - 1].classList.remove("active");
    x[deckCursor + 2].classList.add("active");
  }

  else {
    x[32].classList.remove("active");
    x[33].classList.add("active");
    deckCursor += 1;
    botdeckindex = deckCursor - 1;
    return;
  }

  deckCursor += 3;
  botdeckindex = deckCursor - 1;
}

function unsortedDisplay() {
  let x = document.getElementById("first").querySelectorAll("img");
  let y = document.getElementById("first").querySelectorAll("div");

  for (let i = 0; i < 12; i++) {
    if (i < unsorted[0].length) {
      x[i].src = "./img/" + unsorted[0][i] + ".png";
      x[i].style.display = "";
      x[i].classList.remove("active");
      y[i].style.display = "";
    }

    else
      y[i].style.display = "none";
  }
  if (unsorted[0].length) {
    x[unsorted[0].length - 1].classList.add("active");
  }

  x = document.getElementById("second").querySelectorAll("img");
  y = document.getElementById("second").querySelectorAll("div");

  for (let i = 0; i < 12; i++) {
    if (i < unsorted[1].length) {
      x[i].src = "./img/" + unsorted[1][i] + ".png";
      x[i].style.display = "";
      x[i].classList.remove("active");
      y[i].style.display = "";
    }

    else
      y[i].style.display = "none";
  }
  if (unsorted[1].length) {
    x[unsorted[1].length - 1].classList.add("active");
  }

  x = document.getElementById("third").querySelectorAll("img");
  y = document.getElementById("third").querySelectorAll("div");

  for (let i = 0; i < 12; i++) {
    if (i < unsorted[2].length) {
      x[i].src = "./img/" + unsorted[2][i] + ".png";
      x[i].style.display = "";
      x[i].classList.remove("active");
      y[i].style.display = "";
    }

    else
      y[i].style.display = "none";
  }
  if (unsorted[2].length) {
    x[unsorted[2].length - 1].classList.add("active");
  }

  x = document.getElementById("fourth").querySelectorAll("img");
  y = document.getElementById("fourth").querySelectorAll("div");

  for (let i = 0; i < 12; i++) {
    if (i < unsorted[3].length) {
      x[i].src = "./img/" + unsorted[3][i] + ".png";
      x[i].style.display = "";
      x[i].classList.remove("active");
      y[i].style.display = "";
    }

    else
      y[i].style.display = "none";
  }

  if (unsorted[3].length) {
    x[unsorted[3].length - 1].classList.add("active");
  }
  return;
}

let deck = [];
for (let i = 0; i < 52; i++)
  deck.push(i);
console.log(deck);
shuffle(deck);
let stack = [];
for (let i = 0; i < 13; i++)
  stack.push(deck.pop());

//console.log(deck);
//console.log(stack);
let sorted = [[], [], [], []];
let sorted_bottom = deck.pop();
sorted[0].push(sorted_bottom);
document.getElementById("hovershow").querySelectorAll("img")[0].src="./img/" + sorted_bottom + ".png";

//push_sorted(sorted_bottom);

let unsorted = [[], [], [], []];
unsorted[0].push(deck.pop());
unsorted[1].push(deck.pop());
unsorted[2].push(deck.pop());
unsorted[3].push(deck.pop());

//console.log(deck);

init();

unsortedDisplay();
displayTop();

var entry = 1, exit = 0;
var state = 0, pushElemet;
var botdeckindex = -1;
var spliceelement = [];
var hash = [];
for (let i = 0; i < 34; i++) {
  hash.push(0);
}

let button1 = document.getElementById("button1");
button1.style.display = "block";
button1.addEventListener('click', deckDisplay);

let hiddenBank = document.getElementById("hiddenBank");
hiddenBank.addEventListener('click', hclk);//1

let sortedBank = document.getElementById("sortedBank").querySelectorAll("img");
//console.log(sortedBank);
sortedBank[0].addEventListener('click', () => sclk(0));//2
sortedBank[1].addEventListener('click', () => sclk(1));//3
sortedBank[2].addEventListener('click', () => sclk(2));//4
sortedBank[3].addEventListener('click', () => sclk(3));//5

let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");
//console.log(midShelf);
first.addEventListener('click', () => mclk(0));//6
second.addEventListener('click', () => mclk(1));//7
third.addEventListener('click', () => mclk(2));//8
fourth.addEventListener('click', () => mclk(3));//9

let bottShelf = document.getElementsByClassName("bottShelf");
bottShelf[0].addEventListener('click', bclk);//10

function hclk() {
  if (entry) {
    if(stack.length==0)
    return;
    pushElemet = stack.pop();
    displayTop();
    entry = 0;
    exit = 1;
  }

  else if (exit) {
    return;
  }
}

function sclk(state) {
  if (entry) {
    return;
  }

  else if (exit) {
    //console.log("sort exit " + state);
    sorted[state].push(pushElemet);
    displayTop();
    entry = 1;
    exit = 0;
  }
}

function mclk(state) {
  if (entry) {
    //console.log("mid entry " + state);
    if (unsorted[state].length == 0)
      return;
    pushElemet = unsorted[state].pop();
    unsortedDisplay();
    entry = 0;
    exit = 1;
  }

  else if (exit) {
    //console.log("mid exit " + state);
    unsorted[state].push(pushElemet);
    unsortedDisplay();
    entry = 1;
    exit = 0;
  }
}

function bclk() {
  if (entry) {
    //console.log("bot entry");
    if (hash[botdeckindex] == 0) {

      if(botdeckindex<0)
      return;
      pushElemet = deck[botdeckindex];
      spliceelement.push(botdeckindex);
      hash[botdeckindex] = 1;
      //console.log(spliceelement);
      let y = document.getElementById("bottShelf").querySelectorAll("img");
      y[botdeckindex].style.display = "none";
      botdeckindex--;
      entry = 0;
      exit = 1;
    }

    else {
      botdeckindex--;
      bclk();
    }
  }

  else if (exit) {
    return;
  }
}