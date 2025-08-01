const textInput = document.getElementById("text-input");
const resultText = document.getElementById("result");
const checkBtn = document.getElementById("check-btn");    

    checkBtn.onclick = function() {

        const inputText = textInput.value.trim();

        if (inputText === ""){
            resultText.textContent = "Please enter a word or phrase to check.";
            resultText.style.color = "red";
            resultText.style.fontWeight = "bold";
            return;
        }

        const cleaned = inputText.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        const reversedText = cleaned.split('').reverse().join('');

        if (inputText.length > 0 && (cleaned== reversedText)) {
            resultText.textContent = `The word "${inputText}" is a palindrome.`;
            resultText.style.color = "green";
        } 
        else {
            resultText.textContent = `The word "${inputText}" is not a palindrome.`;
            resultText.style.color = "red";
        }

        resultText.style.fontWeight = "bold";

    };

