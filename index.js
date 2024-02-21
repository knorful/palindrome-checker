const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

checkBtn.addEventListener("click", e => {
    let userInput = textInput.value;
    let reg = /[^a-zA-Z0-9]+/g;
    let cleanedInput = userInput.replace(reg, '');
    
    cleanedInput.toLowerCase() === cleanedInput.toLowerCase().split('').reverse().join('') ? 
    result.innerHTML = `${userInput} is a palindrome` : 
    result.innerHTML = `${userInput} is not a palindrome`;

})