const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");

let auth =(btn)=>{
  
  if (number1.value.trim() == "" || number2.value.trim() == "") {
    alert("Please enter a number");
  }
  else{
    id = btn.id;
  switch(id){
    case'+':
      add();
      break;
    case'-':
      sub();
      break;
    case'*':
      mul();
      break;
    case'/':
      div();
      break;
    default:
      alert("Please enter a number");  }
  }
}


const add = () => {
  let result = parseInt(number1.value) + parseInt(number2.value);
  document.querySelector("#result").textContent = "The addition of the two number is "+result;
}

const sub = () => { 
  let result = parseInt(number1.value) - parseInt(number2.value);
  document.querySelector("#result").textContent = "The difference between the two number is"+result;
}

const mul = () => {
  let result = parseInt(number1.value) * parseInt(number2.value);
  document.querySelector("#result").textContent = "The multiplication of two number is "+result;
}

const div = () => {
  let result = parseInt(number1.value) / parseInt(number2.value);
  document.querySelector("#result").textContent = "The division of the two number is "+result;
}



function clearAll(){
  number1.value = "";
  number2.value = "";
  document.querySelector("#result").textContent = "";
}