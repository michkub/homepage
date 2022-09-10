const firstName = "Michał";
const age = 37;

console.log(firstName);
console.log(age);

console.log(
  `Witaj Drogi Odwiedzający. Nazywam się ${firstName} i mam ${age} lat!`
);

const heading = document.querySelector('.main-heading--js')

console.log(heading.innerHTML);

heading.innerHTML = `Witaj Drogi Odwiedzający. Nazywam się ${firstName} i mam ${age} lat!`;

console.log(heading);
