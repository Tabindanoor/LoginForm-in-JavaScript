const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
	e.preventDefault();

	const username = document.querySelector('#username').value;
	const password = document.querySelector('#password').value;

	if(username === 'admin' && password === 'password') {
		alert('Login Successful!');
	} else {
		alert('Invalid Username or Password!');
	}
});
