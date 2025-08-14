const submitButton = document.getElementById("sbutton");
const error = document.getElementById("errorSpan");
const main = document.getElementById("main");
const confirmation = document.getElementById("confirmation");
const confirmationText = document.getElementById("text");
const confirmButton = document.getElementById("confirmButton");

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputField = document.getElementById("inputF");

  const inputValue = /\S+@\S+\.\S+/.test(inputField.value);

  if (inputField.value === "" || !inputValue) {
    error.textContent = "Valid email required";
    inputField.style.placeholder;
    inputField.classList.add("errorInput");
    inputField.classList.add("testError");
  } else {
    error.textContent = "";
    inputField.classList.remove("errorInput");
    inputField.classList.remove("testError");
  }

  if (inputField.value !== "" && inputValue === true) {
    main.style.display = "none";
    inputField.value
    confirmation.classList.add("activate");
    confirmationText.innerHTML = `A confirmation email has been sent to <b>${inputField.value}</b>. Please open it and click the button inside to confirm your subscription.`;
    inputField.value = ""
  }
});

const returnToHome = () => {
  main.style.display = "block";
  confirmation.classList.remove("activate");
  confirmationText.textContent = "";
};

confirmButton.addEventListener("click", returnToHome);

const changeButtonColor = () => {
  submitButton.classList.add("test");
  submitButton.style.cursor = "pointer";
};

const removeButtonColor = () => {
  submitButton.classList.remove("test");
};

submitButton.addEventListener("mouseenter", changeButtonColor);

submitButton.addEventListener("mouseleave", removeButtonColor);
