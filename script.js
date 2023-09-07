const passwordInput = document.querySelector("#password");
const label = document.querySelector("label");
const lock = document.querySelector(".lock i");
const criterias = document.querySelector(".criterias-list");

let validation = {
  uppercase: false,
  lowercase: false,
  number: false,
  characters: false,
};

passwordInput.addEventListener("input", checkPassword);

passwordInput.addEventListener("focus", () => label.classList.add("active"));

passwordInput.addEventListener(
  "blur",
  (e) => e.target.value === "" && label.classList.remove("active")
);

function checkPassword(e) {
  const char = e.target.value;

  checkUpperCase(char);
  checkLowerCase(char);
  checkNumber(char);
  checkMinChar(char);

  if (
    validation.uppercase === true &&
    validation.lowercase === true &&
    validation.number === true &&
    validation.characters === true
  ) {
    lock.classList.remove("fa-lock-open");
    lock.classList.add("fa-lock");
    passwordInput.style.color = "rgb(50, 80, 50)";
  } else {
    lock.classList.remove("fa-lock");
    lock.classList.add("fa-lock-open");
    passwordInput.style.color = "grey";
  }
}

function checkUpperCase(char) {
  const upperCaseRegExp = /[A-Z]/;
  const upperCase = criterias.firstElementChild.children[0];

  if (char.match(upperCaseRegExp)) {
    upperCase.classList.remove("fa-circle");
    upperCase.classList.add("fa-check");
    upperCase.parentElement.style.color = "#5e9d5e";
    validation.uppercase = true;
  } else {
    upperCase.classList.remove("fa-check");
    upperCase.classList.add("fa-circle");
    upperCase.parentElement.style.color = "whitesmoke";
    validation.uppercase = false;
  }
}

function checkLowerCase(char) {
  const lowerCaseRegExp = /[a-z]/;
  const lowerCase = criterias.children[1].children[0];

  if (char.match(lowerCaseRegExp)) {
    lowerCase.classList.remove("fa-circle");
    lowerCase.classList.add("fa-check");
    lowerCase.parentElement.style.color = "#5e9d5e";
    validation.lowercase = true;
  } else {
    lowerCase.classList.remove("fa-check");
    lowerCase.classList.add("fa-circle");
    lowerCase.parentElement.style.color = "whitesmoke";
    validation.lowercase = false;
  }
}

function checkNumber(char) {
  const numberRegExp = /[0-9]/;
  const number = criterias.children[2].children[0];

  if (char.match(numberRegExp)) {
    number.classList.remove("fa-circle");
    number.classList.add("fa-check");
    number.parentElement.style.color = "#5e9d5e";
    validation.number = true;
  } else {
    number.classList.remove("fa-check");
    number.classList.add("fa-circle");
    number.parentElement.style.color = "whitesmoke";
    validation.number = false;
  }
}

function checkMinChar(char) {
  const minChar = criterias.lastElementChild.children[0];

  if (char.length >= 8) {
    minChar.classList.remove("fa-circle");
    minChar.classList.add("fa-check");
    minChar.parentElement.style.color = "#5e9d5e";
    validation.characters = true;
  } else {
    minChar.classList.remove("fa-check");
    minChar.classList.add("fa-circle");
    minChar.parentElement.style.color = "whitesmoke";
    validation.characters = false;
  }
}
