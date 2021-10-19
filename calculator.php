<?php
	
	$first_value = $_GET['first_value'];
	$second_value = $_GET['second_value'];
	$O = $_GET['O'];


	switch ($O) {
		case 'add':
			echo $first_value + $second_value;
			break;

		case 'sub':
			echo $first_value - $second_value;
			break;

		case 'mul':
			echo $first_value * $second_value;
			break;

		case 'div':
			echo $first_value / $second_value;
			break;
		
		default:
			echo "Result not found....!!!";
			
	}

?>