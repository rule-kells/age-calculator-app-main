let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let form = document.getElementById("id-form");
const dayOutput = document.getElementById("data-output-dd");
const monthOutput = document.getElementById("data-output-mm");
const yearOutput = document.getElementById("data-output-yy");
// const btn = document.querySelector(".btn");

reset();

function reset() {
  day = document.getElementById("day").value = "";
  month = document.getElementById("month").value = "";
  year = document.getElementById("year").value = "";
}

form.addEventListener("submit", calculateAge);

function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;

  let currentYear = new Date();
  currentYear.getFullYear
  console.log(currentYear);

  inputs.forEach((input) => {
    const errorMsg = input.nextElementSibling;

    // console.log(errorMsg);
    //probably needs to be siblingelement
    console.log(input);
    if (!input.value) {
      input.classList.add("error-outline");
      errorMsg.classList.add("invalid-msg");
      validator = false;
    } else if (input === month && input.value > 12) {
      // monthInp.style.borderColor = "red";
      // monthInp.parentElement.querySelector("small").innerText = "must be a valid month.";
      month.classList.add("error-outline");
      errorMsg.classList.add("invalid-msg");
      validator = false;
    } else if (input === day && input.value > 31) {
      // dayInp.style.borderColor = "red";
      // dayInp.parentElement.querySelector("small").innerText = "must be a valid day.";
      day.classList.add("error-outline");
      errorMsg.classList.add("invalid-msg");
      validator = false;
    // } else if (input === year && input.value > 2300) {
    //   console.log(year)
    //   year.classList.add("error-outline");
    //   errorMsg.classList.add("invalid-msg");
    //   validator = false;
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
  // var birthDate = new Date(date.value);
  e.preventDefault();
  let currentDate = new Date();
  let getUserDay = currentDate.getDate();
  console.log(getUserDay);
  let getUserMonth = currentDate.getMonth() + 1;
  console.log(getUserMonth);
  let getUserYear = currentDate.getFullYear();
  console.log(getUserYear);

  day = document.getElementById("day").value;
  month = document.getElementById("month").value;
  year = document.getElementById("year").value;

  // variable for user bday - current year
  let calcDays;
  let calcMonths;
  let calcYears;

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

document.addEventListener("keypress", (e) => {
  if (e == 13) {
    form.click();
  }
});

// run calculate on enter key
// document.addEventListener('keypress', (e) => {
//   if (e.keyCode == 13) {
//     calculate.click();
//   }
// });
// onload focus on date input

// make month positive
