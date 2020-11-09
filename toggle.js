var isOn = false;
function myFunction()
{
	var container = document.getElementById("container");
	var circle = document.getElementById("circle");
	if(isOn)
	{
		container.style.backgroundColor = "red";
		circle.style.transform = "translate(0px,0px)";
		isOn = false;
	}
	else
	{
		container.style.backgroundColor = "green";
		circle.style.transform = "translate(40px,0px)";
		isOn = true;
	}
	
}