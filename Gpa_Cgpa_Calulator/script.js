const grades = {
  O: 10,
  Aplus: 9,
    A: 8,
      Bplus: 7,
        B : 6,
          C: 4,
            U : 0,
              UA : 0,
                WH : 0
}
const subjectCredit = {
  CS3401: 4,
  CS3451: 3,
  CS3452: 3,
  CS3461: 1.5,
  CS3481: 1.5,
  CS3491: 4,
  CS3492: 3,
  GE3451: 2
}

const totalCredits = 22

//algo
const CS3401 = document.querySelector('#CS3401');
//os
const CS3451 = document.querySelector('#CS3451');
//toc
const CS3452 = document.querySelector('#CS3452');
//os lab
const CS3461 = document.querySelector('#CS3461');
//dbms lab
const CS3481 = document.querySelector('#CS3481');
//ai and ml
const CS3491 = document.querySelector('#CS3491');
//dbms
const CS3492 = document.querySelector('#CS3492');
//evs
const GE3451 = document.querySelector('#GE3451');


// let arr = [ CS3401, CS3451, CS3452, CS3461, CS3481, CS3491, CS3492, GE3451]


let submitButton = document.querySelector('#calculate');

submitButton.addEventListener('click', function (e) {
  e.preventDefault();
  
  let proceed = true;

  let arr = [grades[CS3401.value] * subjectCredit.CS3401,
  grades[CS3451.value] * subjectCredit.CS3451,
  grades[CS3452.value] * subjectCredit.CS3452,
  grades[CS3461.value] * subjectCredit.CS3461,
  grades[CS3481.value] * subjectCredit.CS3481,
  grades[CS3491.value] * subjectCredit.CS3491,
  grades[CS3492.value] * subjectCredit.CS3492,
  grades[GE3451.value] * subjectCredit.GE3451];
  console.log(arr);



  if (proceed) {
    for (let ele of arr) {
      if (isNaN(ele)) {
        eval("alert('Please select all the fields')");
        proceed = false;
        break;
      }
    }
  }
  if (proceed) {
    let total = arr.reduce((acc, curr) => {
      return acc + curr;
    });
    console.log(total);

    const gpa = (total / totalCredits).toFixed(5);
    const result = document.querySelector('#result');
    result.innerHTML = `<h2>Your GPA is ${gpa}</h2>`;
  }
  proceed = true;
});



// Add an event listener to the "Copy GPA" button
const copyButton = document.querySelector('#copyButton');
copyButton.addEventListener('click', function () {
  const cgpaValue = parseFloat(document.querySelector('#result').innerText.replace('Your GPA is ', ''));
  if (!isNaN(cgpaValue)) {
    const textToCopy = cgpaValue.toFixed(5); // Copy the GPA value rounded to two decimal places
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








