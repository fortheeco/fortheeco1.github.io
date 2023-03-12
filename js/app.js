// UI VARIABLES
const nameInput = document.querySelector('.name-field');
const emailInput = document.querySelector('.email-field');

const nextBtn = document.querySelector('.next-btn');
const SubmitBtn = document.querySelector('.next-btn');

nextBtn.addEventListener('click', (e) => {
	const name = document.querySelector('#name').value;

	if (name.value === '') {
		nameInput.classList.toggle('error');
	} else {
		nameInput.classList.toggle('hidden');
		emailInput.classList.toggle('hidden');
	}
});
