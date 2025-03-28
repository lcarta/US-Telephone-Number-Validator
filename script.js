const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");
const keyboards = document.getElementsByClassName("keyboard");



const str = [
  "1 555-555-5555",
  "1 (555) 555-5555",
  "1(555)555-5555",
  "1 555 555 5555",
  "5555555555",
  "555-555-5555",
  "(555)555-5555",
  "1 456 789 4444",
  "1 456 789"
];



const regexp = /^1?\s?([(]\d{3}[)]|\d{3})[\s|-]?\d{3}[\s|-]?\d{4}$/g;



//console.log(str[1].match(regexp))

for (let i = 0; i < keyboards.length; i++) {
  keyboards[i].setAttribute("onclick", "getKeyboardValue(value)")
}

const getKeyboardValue = value => userInput.value += value;

const checkNumber = () => {
  if (!userInput.value) {
    alert("Please provide a phone number")
    return
  }
  userInput.value.match(regexp) ? isValidNumber() : isInvalidNumber()
}

const isValidNumber = () => {
  result.style.backgroundColor = "#2dc653";
  result.innerText = `Valid US number: ${userInput.value}\n`
}

const isInvalidNumber = () => {
  result.style.backgroundColor = "#ef233c";
  result.innerText = `Invalid US number: ${userInput.value}\n`
}

checkBtn.addEventListener('click', checkNumber);
clearBtn.addEventListener('click', () => {
  userInput.value = "";
  result.innerText = ""
  result.style.backgroundColor = "#465362"
})


