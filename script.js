
// true estou no estado
// false não estou no estado
var estado1 = true;
var estado2 = false;

$(document).ready(function(){
	
	// var transitions1 = true; // Transição 1, vai do estado 1 para o 2
	// var transitions2 = false; // Transição 2, vai do estado 2 para o 1

	//	Medidor de tempo de permanência em cada estado
	var tempo = 1000;
	// Variavel para checar se estamos ou não no caso terminal, se sim preenchemos com 1, senao preenchemos com 0. 
	var terminal = 1;

	$('#button_teste').click(function(){
		var animation = setInterval(function automato(){
			if (estado1 == true) {
				// Transição 1 (Trocando de estado)
				estado1 = false;
				estado2 = true;
				var image_transition1 = '<img src="images/frame1.jpg">';
				$('#show').html(image_transition1);
				// Depois que trocamos a imagem, estamos em outro estado, no caso não estamos no terminal, logo, a animação não pode acabar aqui.
				terminal = 1;
			}
			else if(estado2 == true){
				// Transição 2 (Trocando de estado)
				estado2 = false;
				estado1 = true;
				var image_transition2 = '<img src="images/frame2.jpg">';
				$('#show').html(image_transition2);
				// Depois que trocamos a imagem, estamos em outro estado, no caso estamos no terminal.
				terminal = 0;}
		},tempo);

		$('#button_stop').click(function(){
			if (terminal == 0){
				var informacao = '<p>Esse estado n&atilde;o &eacute; terminal</p>';
				$('#info').html(informacao);
			}			
			else if (terminal == 1) {
				window.clearInterval(animation);
			}
		});

	});

});