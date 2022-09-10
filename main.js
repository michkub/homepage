const firstName = "Michał";
const age = 37;

const heading = document.querySelector(".main__heading--js");

heading.innerHTML = `Witaj Drogi Odwiedzający. Nazywam się ${firstName} i mam ${age} lat!`;

const emptyParagraph = document.querySelector(".week-summary__description--js");

emptyParagraph.innerHTML = `Nawet uzupełniłem treść javascriptem`;

function greetOld(age, firstName) {
  console.log(
    `Witaj Drogi Odwiedzający. Nazywam się ${firstName} i mam ${age} lat!`
  );
}

const calculate = (myNumber) => myNumber * 7;

const myResult = calculate(5);

console.log(myResult);

const greet = (age, firstName) => {
  console.log(
    `Witaj Drogi Odwiedzający. Nazywam się ${firstName} i mam ${age} lat - funkcja strzałkowa`
  );
};

greet(age, firstName);

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

createContent(".week-summary__description--js", "Witaj swiecie!");

createContent(".week-summary__title--js", "Homework done!");
