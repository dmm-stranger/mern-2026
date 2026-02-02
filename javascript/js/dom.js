// DOM: catch element by id selector::
const headerId = document.getElementById('header-section-one');
console.log(headerId);
console.log(headerId?.innerHTML);
console.log(headerId?.innerText);
console.log(headerId?.getBoundingClientRect());
headerId.innerHTML = 'Hello World!'; // change text
