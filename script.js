const button = document.querySelector(".free");

const outputError = (parent) => {
  parent.classList.add("error");
  parent.classList.remove("success");
};

const removeError = (parent) => {
  parent.classList.remove("error");
  parent.classList.add("success");
};

const validateEmail = (email) => {
  let regExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regExp.test(email.toLowerCase());
};

const validateInput = (input) => {
  const value = input.value.trim();
  if (!value) return false;
  if (input.type === "email" && !validateEmail(value)) return false;
  if (input.type === "password" && value.length < 6) return false;
  return true;
};
button.addEventListener("click", () => {
  const groups = document.getElementsByClassName("group");
  [...groups].map((group) => {
    const input = group.querySelector("input");
    const isValid = validateInput(input);
    if (isValid) {
      removeError(group);
    } else {
      outputError(group);
    }
  });
});
