const calculate  = document.querySelector("#calculate");


let proceed = true;
calculate.addEventListener("click",(evt)=>{
  evt.preventDefault();
  const parent  = document.querySelector(".parent");
  const childElements = parent.querySelectorAll("input");
  const childValues = [];
    for (const inputElement of childElements) {
      childValues.push(parseFloat(inputElement.value));
    }
  if (proceed) {
    for (let ele of childValues) {
      if (isNaN(ele)) {
        eval("alert('Please Enter all the Values!!!')");
        proceed = false;
        break;
      }
    }
  }
  if (proceed) {
    let total = childValues.reduce((acc, curr) => {     
      return acc + curr;
    } 
    );

    let cgpa = total/4;
    document.querySelector("#result").innerHTML = `<h2>Your CGPA is ${cgpa}</h2>`;;
  }
  proceed = true;

})

// Add an event listener to the "Copy CGPA" button
const copyButton = document.querySelector('#copyButton');
copyButton.addEventListener('click', function () {
  const cgpaValue = parseFloat(document.querySelector('#result').innerText.replace('Your CGPA is ', ''));
  if (!isNaN(cgpaValue)) {
    const textToCopy = cgpaValue.toFixed(5); // Copy the CGPA value rounded to two decimal places
    copyToClipboard(textToCopy);
    alert('CGPA copied to clipboard!');
  } else {
    alert('Please calculate CGPA before copying.');
  }
});

// Function to copy text to clipboard using the Clipboard API
function copyToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}