"use strict";

const x = document.querySelector(".x");

function toggleModal() {
  const button = document.querySelector(".button");
  const modal = document.querySelector(".modal");

  button.addEventListener("click", function () {
    modal.classList.add("open");
  });

  x.addEventListener("click", function () {
    modal.classList.remove("open");
  });
}

toggleModal();

function submitForm() {
  const form = document.querySelector(".form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const names = this.names.value;
    const phone = this.phone.value;
    const email = this.email.value;
    const errorMessage = this.querySelector(".error-message");
    const successMessage = document.querySelector(".subscription-window");
    const inputs = this.querySelectorAll("input");
    const stringRegex = /^[a-zA-Z ]{2,30}$/;
    const numberRegex = /^[0-9]{12}$/;
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    hideMessage();

    function showMessage(msg) {
      errorMessage.textContent = msg;
      errorMessage.classList.add("open");
    }

    function hideMessage() {
      errorMessage.textContent = "";
      errorMessage.classList.remove("open");
    }

    if (!names.trim()) {
      return showMessage("'Your names' field is empty!");
    }

    if (!stringRegex.test(names)) {
      return showMessage("'Your names' field must contain only letters!");
    }

    if (!phone.trim()) {
      return showMessage("'Phone No' field is empty!");
    }

    if (!numberRegex.test(phone)) {
      return showMessage("'Phone No' field should contain 12 digits!");
    }

    if (!email.trim()) {
      return showMessage("'Email address' field is empty!");
    }

    if (!emailRegex.test(email)) {
      return showMessage("Invalid email address!");
    }

    successMessage.classList.add("open");
    inputs.forEach((input) => (input.value = ""));
    setTimeout(() => successMessage.classList.remove("open"), 4500);
  });
}

submitForm();
