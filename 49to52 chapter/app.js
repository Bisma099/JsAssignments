function validateForm() {
	var uname = document.registration.userid;
	var fname = document.registration.fname;
	var uid = document.registration.userid;
	var phone = document.registration.phone;
	var email = document.registration.email;
	var lname = document.registration.lname;
	var passid = document.registration.password;

	var uid_len = uid.value.length;
	var check_letter_regex = /^[A-Za-z]+$/;
	var numbers = /^[0-9]+$/;
	var emails_fmt =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (uid_len == 0 || uid_len >= 5 || uid_len < 12)
	{
		alert("User Id should not be empty / length be between "+5+" to "+12);
		uid.focus();
		return false;
	} else if(!(uname.value.match(check_letter_regex))) {
    	alert('first name must have alphabet characters only and it should not be empty.');
    	uname.focus();
	} else if(!(phone.value.match(numbers))) {
    	alert('phone number must have number.');
    	phone.focus();
	} else if(!(email.value.match(emails_fmt))) {
		alert('Please enter a valid email');
		email.focus();
		return false;
	} else {
		alert('Successfully! Your form has been submitted successfully.');
	}

}
function submitForm() {
	console.log('Successfully! form has been submitted.');
}