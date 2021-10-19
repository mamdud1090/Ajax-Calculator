function calc(operator){

	// if (operator == "+") 
	// {
	// 	operator = 1;
	// }

	var x = document.form_calculator.first_value.value;
	var y = document.form_calculator.second_value.value;

	var xmlhttp;

	if (window.XMLHttpRequest) 
	{
		xmlhttp = new XMLHttpRequest;
	}

	else
	{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200) 
		{
			document.getElementById("result").innerHTML = xmlhttp.responseText;

		}
	}

	xmlhttp.open("GET","calculator.php?first_value="+ x +"&second_value="+ y + 
		"&O=" + operator , true);

	xmlhttp.send();
}