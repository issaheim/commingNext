const rootDiv = document.createElement("div");
const inputDiv = document.createElement("div");
const responseDiv = document.createElement("div");

rootDiv.id = "rootDiv";
inputDiv.id = "inputDiv";
responseDiv.id = "responseDiv";

const numberForm = document.createElement('form');
const numberLabel = document.createElement('label');
const inputNumber = document.createElement('input');
const submitBtn = document.createElement('input');

document.body.appendChild(rootDiv);

// Heading text
const h1 = document.createElement("h1");
h1.innerHTML = "What comes <br>next?";

rootDiv.insertAdjacentElement("afterbegin", h1);

// Form for adding new player
numberForm.setAttribute('onSubmit', 'event.preventDefault()');

numberLabel.setAttribute('for', 'inputNumber');

inputNumber.setAttribute('type', 'number');
inputNumber.setAttribute('name', 'inputNumber');
inputNumber.setAttribute('id', 'inputNumber');
inputNumber.setAttribute('placeholder', 'Number');

submitBtn.setAttribute('type', 'submit');
submitBtn.value = 'Add';
// submitBtn.addEventListener('click', addPlayer);

rootDiv.insertAdjacentElement("afterbegin", numberForm);

numberForm.id = "numberForm"
submitBtn.id ="submitBtn"

numberForm.appendChild(numberLabel);
numberForm.appendChild(inputNumber);
numberForm.appendChild(submitBtn);

inputDiv.appendChild(numberForm);
rootDiv.insertAdjacentElement("beforeend", inputDiv);

submitBtn.addEventListener("click", function() {
  nextValue();
})
 

function nextValue(){
  responseDiv.innerHTML = ""
  
  let inputValue = inputNumber.value
  console.log(inputValue);

  let nextNumber = ++inputValue;
  console.log(nextNumber);

  const nextValueText = document.createElement("h2");
  nextValueText.innerHTML = nextNumber;
  
  responseDiv.appendChild(nextValueText);
  rootDiv.insertAdjacentElement("beforeend", responseDiv)
  
  
}
