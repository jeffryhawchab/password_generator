const resultDOM = document.getElementById("result");
const copybtnDOM = document.getElementById("copy");
const lengthDOM = document.getElementById("length");
const uppercaseDOM = document.getElementById("uppercase");
const numbersDOM = document.getElementById("numbers");
const symbolsDOM = document.getElementById("symbols");
const generatebtn = document.getElementById("generate");
const form = document.getElementById("passwordGeneratorForm");
function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
      array.push(i);
    }
    return array;
}
  let generatePassword = (
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  ) => {
    let charCodes = LOWERCASE_CODES;
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CODES);
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CODES);
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CODES);
    const passwordCharacters = [];
    for (let i = 0; i < characterAmount; i++) {
      const characterCode =
        charCodes[Math.floor(Math.random() * charCodes.length)];
      passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join("");
  };
  copybtnDOM.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const passwordToCopy = resultDOM.innerText;
    // A Case when Password is Empty
    if (!passwordToCopy) return;
    // Copy Functionality
    textarea.value = passwordToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password Copied to Clipboard");
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const characterAmount = lengthDOM.value;
    const includeUppercase = uppercaseDOM.checked;
    const includeNumbers = numbersDOM.checked;
    const includeSymbols = symbolsDOM.checked;
    const password = generatePassword(
      characterAmount,
      includeUppercase,
      includeNumbers,
      includeSymbols
    );
    resultDOM.innerText = password;
  });