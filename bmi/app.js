


function calculator() {
var weight = document.getElementById('weight').value
var height = document.getElementById('height').value

if (weight > 0 && height > 0) {
  var bmi = weight/(height/100*height/100)
  console.log(bmi)
}
else {
  document.getElementById('results').innerHTML = "pleas input a value"
}

 if (bmi < 18.5) {
  document.getElementById('results').innerHTML = "Your result is: "
  +Math.round(bmi)+ " and you are Underweight"
}
if (bmi >= 18.5 && bmi <= 24.9 ) {
  document.getElementById('results').innerHTML = "Your result is: "
  +Math.round(bmi)+ " and you are normal weight"
}

if (bmi >= 25 && bmi <= 29.9) {
  document.getElementById('results').innerHTML = "Your result is: "
  +Math.round(bmi)+ " and you are overweight"
}

if (bmi >= 30) {
  document.getElementsById('results').innerHTML = "Your result is: "
  +Math.round(bmi)+ " and you are Obesity"
}

}
