$(document).ready(function() {
	
	function fizzBuzz(num) {
		if (num%3==0 && num%5!=0) {
			$("<p>fizz</p>").appendTo('body');
		}else if (num%5==0 && num%3!=0) {
			$("<p>buzz</p>").appendTo('body');
		}else if (num%3==0 && num%5==0) {
			$("<p>fizzbuzz</p>").appendTo('body');
		}else {
			$("<p>"+num+"</p><p>You're neither fizzing nor buzzing.</p>").appendTo('body');
		}
	}

	//invoke fizzBuzz, delete input
	$('#number-submit').on('click', function() {
		var inputNum = document.getElementById("number-input");
		var inputVal = inputNum.value;
		if (+inputVal){
			var num = +inputVal;
			fizzBuzz(num);
		}else {
			alert('please type a number');
		}	
		document.getElementById('number-input').value = '';
	});
});