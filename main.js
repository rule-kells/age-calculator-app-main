// variables
// inputs

const inputs = document.querySelectorAll("input");
// form
let form = document.getElementById("id-form");

// outputs
const dayOutput = document.getElementById("data-output-dd");
const monthOutput = document.getElementById("data-output-mm");
const yearOutput = document.getElementById("data-output-yy");

let validator = true;

function reset() {
  let day = document.getElementById("day");
  let month = document.getElementById("month");
  let year = document.getElementById("year");

  day.value = "";
  month.value = "";
  year.value = "";
}

reset();

form.addEventListener("submit", calculateAge);

function validated(input) {}

function validate() {
  validator = true;

  // let regex = /\d{4,4}/;

  inputs.forEach((input) => {
    const errorMsg = input.nextElementSibling;
    let day = document.getElementById("day");
    let month = document.getElementById("month");
    let year = document.getElementById("year");

    if (!input.value) {
      input.classList.add("error-outline");
      errorMsg.classList.add("invalid-msg");
      validator = false;
    } else if (input === month && input.value > 12) {
      month.classList.add("error-outline");
      errorMsg.classList.add("invalid-msg");
      validator = false;
    } else {
      input.classList.remove("error-outline");
      errorMsg.classList.remove("invalid-msg");
      input.classList.add("valid-outline");
      validator = validator && true;
    }

    if (!input.value) {
      input.classList.add("error-outline");
      errorMsg.classList.add("invalid-msg");
      validator = false;
    } else if (input === day && input.value > 31) {
      day.classList.add("error-outline");
      errorMsg.classList.add("invalid-msg");
      validator = false;
    } else {
      input.classList.remove("error-outline");
      errorMsg.classList.remove("invalid-msg");
      input.classList.add("valid-outline");
      validator = validator && true;
    }

    if (!input.value) {
      input.classList.add("error-outline");
      errorMsg.classList.add("invalid-msg");
      validator = false;
    } else if (
      (input === year && input.value > new Date().getFullYear()) ||
      year.value < 1000
    ) {
      year.classList.add("error-outline");
      errorMsg.classList.add("invalid-msg");
      validator = false;
    } else {
      input.classList.remove("error-outline");
      errorMsg.classList.remove("invalid-msg");
      input.classList.add("valid-outline");
      validator = validator && true;
    }
  });
  return validator;
}

function calculateAge(e) {
  e.preventDefault();
  let currentDate = new Date();
  let getUserDay = currentDate.getDate();
  let getUserMonth = currentDate.getMonth() + 1;
  let getUserYear = currentDate.getFullYear();

  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

  // variable for user bday - current year
  let calcDays;
  let calcMonths;
  let calcYears;

  // calculate year
  if (validate()) {
    if (
      getUserMonth > month ||
      (getUserMonth == month && getUserDay >= month)
    ) {
      calcYears = getUserYear - year;
    } else {
      calcYears = getUserYear - year - 1;
    }

    // Calculate months
    if (getUserDay >= day) {
      calcMonths = getUserMonth - month;
    } else if (getUserDay < day) {
      calcMonths = getUserMonth - month - 1;
    }

    calcMonths = calcMonths < 0 ? calcMonths + 12 : calcMonths;

    // Calculate days
    // days of months in a year
    let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (getUserDay >= day) {
      calcDays = getUserDay - day;
    } else {
      calcDays = getUserDay - day + monthDays[getUserMonth];
    }

    // Display result
    dayOutput.innerHTML = calcDays;
    monthOutput.innerHTML = calcMonths;
    yearOutput.innerHTML = calcYears;
  }
}
