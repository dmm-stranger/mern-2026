// DOM: catch element by id selector::
// const headerId = document.getElementById('header-section-one');
// console.log(headerId);
// console.log(headerId?.innerHTML);
// console.log(headerId?.innerText);
// console.log(headerId?.getBoundingClientRect());
// headerId.innerHTML = 'Hello World!'; // change text

// DOM API: Application Programming Interface::
// find element using her ID:
// const navigation = document.getElementById('navigation');
// console.log(navigation);

// // find element by tagName:
// const list = document.getElementsByTagName('li');
// console.log(list);
// console.log(list.length);
// console.log(list[2]);

// // find element by className:
// const parentList = document.getElementsByClassName('parent-list');
// console.log(parentList);

// // find elements by its first selector querySelector:
// const firstElement = document.querySelector('.border-e');
// console.log(firstElement);

// // find elements by using querySelectorAll:\
// const allElements = document.querySelectorAll('.border-e');
// console.log(allElements);

// DOM accusable::
const navigation = document.getElementById('navigation');
console.log(document.body);
// console.log(document.body.innerHTML);

//
console.log(document.documentElement);

//
console.log(document.embeds);

//
// console.log(document.forms);
// console.log(document.head);
// console.log(document.links);
// console.log(document.images);
// console.log(document.scripts);
// console.log(document.title);

// Changing Content in HTML:
// const logoTitle = document.getElementById('header-section-one');
// console.log(logoTitle);

// logoTitle.innerHTML = '<h1>LOGO TITLE</h1>';

// logoTitle.innerHTML = 'LOGO TITLE';
// console.log(logoTitle);

// Change Image Attribute:
const sectionImg = document.getElementById('section-image');
console.log(sectionImg);

sectionImg.src = 'https://www.w3schools.com/js/landscape.jpg';

// Change CSS:
const navSection = document.getElementById('navigation');
console.log(navSection);

navSection.style.backgroundColor = 'lightyellow';

// action in a form:
const runFormValidation = () => {
	let inputName = document.forms['myForm']['fname'].value;
	console.log(inputName);
	if (inputName === '') {
		alert('Input Name is Missing!');
		return false;
	}
};
