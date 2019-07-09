let email, pass, validPass, oldPass, newPass, minLengthEmail, minLengthPass;
minLengthEmail = '6';
minLengthPass = '5';
email = prompt('Your email, please');
if(email === null || email === '') {
	alert('Canceled');
} else if(email.length < +minLengthEmail) {
	alert('I don\'t know any emails having name length less than 6 symbols');
} else if(email==='user@gmail.com' || email==='admin@gmail.com') {
	if(email==='user@gmail.com') {
		validPass = 'UserPass';
	} else if(email==='admin@gmail.com') {
		validPass = 'AdminPass';
	}
	pass = prompt('Also your password, please');
	if(pass===null || pass==='') {
		alert('Canceled');
	} else if(pass===validPass) {
		if(confirm('Do you want to change your password?')===true) {
			oldPass = prompt('Write old password');
			if(oldPass === validPass) {
				newPass = prompt('Write new password');
				if(newPass.length < +minLengthPass) {
					alert('It’s too short password. Sorry');
				} else {
					if(prompt('Write new password, again')===newPass) {
						validPass = newPass;
						alert('You have successfully changed your password.');
					} else {
						alert('You wrote the wrong password.');
					}
				}
			} else if(oldPass===null || oldPass==='') {
				alert('Canceled');
			} else {
				alert('Wrong password');
			}
		} else {
			alert('You have failed the change.');
		}
	} else {
		alert('Wrong password');
	}
} else {
	alert('I don’t know you');
}