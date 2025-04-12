const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const lengthValueEl = document.getElementById("lengthValue");
const strengthBars = document.getElementById("strengthBars").children;

const options = {
  mayusculas: document.getElementById("mayusculas"),
  minusculas: document.getElementById("minusculas"),
  numeros: document.getElementById("numeros"),
  simbolos: document.getElementById("simbolos"),
};

const characters = {
  mayusculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  minusculas: "abcdefghijklmnopqrstuvwxyz",
  numeros: "0123456789",
  simbolos: "!@#$%^&*()_+[]{}<>?,.",
};

function generatePassword() {
  let validChars = "";
  let selectedOptions = 0;

  for (const [key, checkbox] of Object.entries(options)) {
    if (checkbox.checked) {
      validChars += characters[key];
      selectedOptions++;
    }
  }

  const length = parseInt(lengthEl.value);
  lengthValueEl.textContent = length;

  if (!validChars) {
    passwordEl.textContent = "Seleccione una opción!";
    updateStrength(0, length);
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomChar = validChars[Math.floor(Math.random() * validChars.length)];
    password += randomChar;
  }

  passwordEl.textContent = password;
  updateStrength(selectedOptions, length);
}

function updateStrength(optionsCount, length) {
  let score = 0;
  if (length >= 8) score++;
  if (length >= 12) score++;
  if (optionsCount >= 3) score++;
  if (length >= 16) score++;

  for (let i = 0; i < strengthBars.length; i++) {
    strengthBars[i].classList.toggle("active", i < score);
  }
}

function copyPassword() {
  const text = passwordEl.textContent;
  if (text && text !== "Seleccione una opción!") {
    navigator.clipboard.writeText(text);
    alert("Contraseña copiada en el portapapeles!");
  }
}

// Eventos
document.getElementById("generateBtn").addEventListener("click", generatePassword);
lengthEl.addEventListener("input", generatePassword);
for (const checkbox of Object.values(options)) {
  checkbox.addEventListener("change", generatePassword);
}

// Inicial
generatePassword();