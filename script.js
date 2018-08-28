$(function(){


	$('#altura').mask('0,00');
	$('#peso').mask('000,0');

	$('a').on('click', function(){
		$('.warning').fadeOut('fast');
	});

	$('button').on('click', function(){
		var altura = parseFloat($('#altura').val().split(',').join('.'));
		var peso = parseFloat($('#peso').val().split(',').join('.'));
		if((altura > 0) && (peso > 0)){
			$('button').attr('disabled', '');
			$('.warning').fadeOut('fast');
			$('.divB').slideDown('slow');
			var imc = peso / (altura*altura);
			imc = imc.toFixed(2);
			$('.divB').html(imc+' Kg/m2');

			var tipo = [0, 17, 18.5, 25, 30, 35, 40, 9999];
			var sum = 0;

			for(var i in tipo){
				if(tipo[sum]<=imc && imc<tipo[sum+1]){
					if(sum == 2){
						$('tbody').find('tr').eq(sum).addClass('bg-success');
					}else{
						$('tbody').find('tr').eq(sum).addClass('bg-danger');
					}
				}else{
					sum++;
				}
			}

		}else{

			$('.warning').css('display', 'inline-block');
		}

		
	});
});

