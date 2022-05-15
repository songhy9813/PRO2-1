alert("Hello Passenger! You can get useful information about Mars travel.🚀");

function mover(){
	var M
	M=document.getElementById("fuelNumber");
	M.innerHTML="500,000 Gallons";
}

function mout(){
	var M
	M=document.getElementById("fuelNumber");
	M.innerHTML="➔ FUEL";
}

document.getElementById('acceleration').onclick=function(){
	var number1=document.getElementById('speedNumber').value;
	var number2=document.getElementById('timeNumber').value;
	var result=number1/number2;

	document.getElementById('resultAcceleration').innerHTML=result;
};

document.getElementById('supply').onclick=function(){
	document.getElementById('message').innerHTML='Your meal is ready. Enjoy food and drink!😃'
};

document.getElementById('gravity').innerHTML=(Math.random()*9.8).toFixed(4)+'m/s²';
document.getElementById('distancetraveled').innerHTML=(Math.random()*1000000).toFixed(4)+'m/s²';

var atm=["Earth","Troposphere","Tropopause","Stratosphere","Ozone layer","Mesosphere","Ionosphere","Thermosphere","Exosphere"];
document.getElementById('atmosphere').innerHTML=atm[Math.floor(Math.random()*9)];

var bDisplay = true;
function doDisplay(){
	var con = document.getElementById("myDiv2");
	if(con.style.display=='block'){
		con.style.display = 'none';
	}else{
		con.style.display = 'block';
	}
}

const div = document.getElementById('myDiv3');
const result = document.getElementById('result');
div.addEventListener('click', (event) => {
  result.innerHTML+= '<h4>Earth:5.5g/cm³</h4> <h4>Mars:3.9g/cm³</h4>';
});