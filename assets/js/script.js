const textArea = document.querySelector('.text-area');

const mensaje = document.querySelector('.texto-output');



// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function copyToClipBoard() {

    mensaje.select();
    document.execCommand('copy');

    alert("Copied!");
}

function btnEncriptar() {
	if (textArea.value != '') {
		const textEncriptado = encriptar(textArea.value);
		mensaje.value = textEncriptado;
		textArea.value = '';
		mensaje.classList.add('removeImg');
	} else {
		mensaje.value = '';
		mensaje.classList.remove('removeImg');
	}
	
	
}

function btnDesencriptar() {
	if (textArea.value != '') {
		const textDesencriptado = desencriptar(textArea.value);
		mensaje.value = textDesencriptado;
		textArea.value = '';
		mensaje.classList.add('removeImg');
	} else {
		mensaje.value = '';
		mensaje.classList.remove('removeImg');
	}
	
}


function encriptar(stringText) {

	

	var matrizCodigo = [
		["e","enter"],
		["i","imes"],
		["a","ai"],
		["o","ober"],
		["u","ufat"] 
	];

	stringText = stringText.toLowerCase();


	for (var i = 0; i < matrizCodigo.length; i++) {
		 stringText = stringText.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
	}

	return stringText;
	
}

function desencriptar(stringText) {

	

	var matrizCodigo = [
		["e","enter"],
		["i","imes"],
		["a","ai"],
		["o","ober"],
		["u","ufat"] 
	];

	stringText = stringText.toLowerCase();


	for (var i = 0; i < matrizCodigo.length; i++) {
		 stringText = stringText.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
	}
	return stringText;
}

// encriptar('felicidades por enfrentar este desafio y haberlo concluido con exito!');


// desencriptar('fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!');












