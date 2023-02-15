document.getElementById("email").addEventListener("input", function() {
	var paragrapheErreur = document.getElementById("erreur");
 
	if (this.value != document.getElementById("email").value) {
		paragrapheErreur.innerHTML = "Il faut une bonne adresse email !";
	} else {
		paragrapheErreur.innerHTML = "";
	}
});​

document.forms["inscription"].addEventListener("submit", function(e) {
 
	var erreur;
 
	var inputs = this;
 
	Traitement cas par cas (input unique)
	if (inputs["email"].value != "primfx@p.com") {
		erreur = "Adresse email incorrecte";
	}
 
	Traitement générique
	for (var i = 0; i < inputs.length; i++) {
		console.log(inputs[i]);
		if (!inputs[i].value) {
			erreur = "Veuillez renseigner tous les champs";
			break;
		}
	}
 
	if (erreur) {
		e.preventDefault();
		document.getElementById("erreur").innerHTML = erreur;
		return false;
	} else {
		alert('Formulaire envoyé !');
	}
	
});

document.getElementById("inscription").addEventListener("submit", function(e) {
 
	var erreur;
 
	var inputs = this.getElementsByTagName("input");
 
	for (var i = 0; i < inputs.length; i++) {
		console.log(inputs[i]);
		if (!inputs[i].value) {
			erreur = "Veuillez renseigner tous les champs";
		}
	}
 
	if (erreur) {
		e.preventDefault();
		document.getElementById("erreur").innerHTML = erreur;
		return false;
	} else {
		alert('Formulaire envoyé !');
	}
 
 
	var theme = document.getElementById("theme");
	var raison = document.getElementById("raison");
	var email = document.getElementById("email");
	var image = document.getElementById("image");
 
	if (!theme.value) {
		erreur = "Veuillez renseigner un mot de passe";
	}
	if (!raison.value) {
		erreur = "Veuillez renseigner un email";
	}
	if (!email.value) {
		erreur = "Veuillez renseigner un pseudo";
	}
	
 
	
});