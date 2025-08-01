const textInput = document.getElementById("text-input");
const resultText = document.getElementById("result");
const checkBtn = document.getElementById("check-btn");

textInput.addEventListener("input", function() {
    const inputText = textInput.value;
    const reversedText = inputText.split('').reverse().join('');
    checkBtn.onclick = function() {
        if (inputText.length > 0 && (inputText== reversedText)) {
            resultText.textContent = `The word "${inputText}" is a palindrome.`;
        } 
        else {
            resultText.innerHTML = `The word "${inputText}" is not a palindrome.`;
        }
    };
});