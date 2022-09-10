const firstName = "Michał";
const age = 37;

console.log(firstName);
console.log(age);

console.log(
  `Witaj Drogi Odwiedzający. Nazywam się ${firstName} i mam ${age} lat!`
);

const heading = document.querySelector('.main__heading--js')

console.log(heading.innerHTML);

heading.innerHTML = `Witaj Drogi Odwiedzający. Nazywam się ${firstName} i mam ${age} lat!`;

console.log(heading);

const emptyParagraph = document.querySelector('.week-summary__description--js');

emptyParagraph.innerHTML = `Nawet uzupełniłem treść javascriptem`;
