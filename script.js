//Queustion 1
function greetUser(name){
      document.getElementById ('output').innerText=("Hello "+ name)
}
greetUser("HI!!!")
     
//Question 2    
function changeMessage(){
      document.getElementById('message').innerText=("Hello, World!")
 }
     

//Question 3
function addNumbers(){
      var val1 = document.getElementById('number1').value
      var val2 = document.getElementById('number2').value
      var result = (val1+val2)   
}

//Question 4
function updateTitle() {
      const inputValue = document.getElementById('input').value;
      document.getElementById('title').innerText = inputValue
}
  
//Question 5 
function concatenateStrings() {
      const str1 = document.getElementById('string1').value;
      const str2 = document.getElementById('string2').value;
      document.getElementById('combinedText').innerText = str1  + str2;
}
  
//Question 6 
const colorBox = document.getElementById('colorBox');
const changeColorButton = document.getElementById('changeColorButton');
changeColorButton.addEventListener('click', function () {
      colorBox.style.backgroundColor = 'blue';})
  