

const submitButton = document.getElementById("sbutton");
const error = document.getElementById("errorSpan");

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputField = document.getElementById("inputF");

  if(inputField.value.length <= 0){
    error.textContent = "Valid email required";
    inputField.style.backgroundColor = "hsl(4, 100%, 67%)"
    inputField.style.opacity = 0.3;
    inputField.style.color = "hsl(4, 100%, 67%)"

  }


});

const changeButtonColor = () => {
  submitButton.classList.add("test");
  submitButton.style.cursor = "pointer";
};

const removeButtonColor = () => {
  submitButton.classList.remove("test");
};

submitButton.addEventListener("mouseenter", changeButtonColor);

submitButton.addEventListener("mouseleave", removeButtonColor);
