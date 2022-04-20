function openSnapchat() {
	window.open('https://www.snapchat.com/add/gogreekyogurt');
}

function openYoutube() {
	window.open('https://www.youtube.com/watch?v=0L_-SE5y5QE');
}

function openInstagram() {
	window.open('https://www.facebook.com/gogreek/');
}

function submitContactInfo() {
	const email = window.prompt("What's your email?");

	if (validateEmail(email)) {
		window.alert("Thanks so much! We'll reach out to " + email + " very soon!");
	} else {
		window.alert("Sorry, please provide a valid email address");
		submitContactInfo();
	}
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}