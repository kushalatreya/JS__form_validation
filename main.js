const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
let inputFirstName = document.querySelector('#firstname');
//let inputFirstNameValue = inputFirstName.value

let inputLastName = document.querySelector('#lastname');
let inputEmail = document.querySelector('#email');

inputEmail.addEventListener('keyup', (e) => {
	console.log(e.target.value);
});

const confirmFirstNameInput = () => {
	let value = inputFirstName.value;
	inputFirstName.value = inputFirstName.value.replace(/[^a-zA-Z]$/, '');
	let firstNameRGEX = /^[a-zA-Z]{3,5}$/;
	let firstNameResult = firstNameRGEX.test(value);
	if (firstNameResult == false) {
		console.log('please enter valid name');
		return false;
	} else {
		return true;
	}
};




inputLastName.addEventListener('keyup', e => {
	let memory = e.target.value;
	//console.log(memory)
	//console.log(inputLastName.value)

	inputLastName.value = memory.replace(/[^a-zA-Z]$/, '');



});
