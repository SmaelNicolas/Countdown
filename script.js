let date;
const today = new Date();

const dayEtiquette = document.getElementById("daysNumber");
const hoursEtiquette = document.getElementById("hoursNumber");
const minutesEtiquette = document.getElementById("minutesNumber");
const secondsEtiquette = document.getElementById("secondsNumber");

const dayInput = document.getElementById("inputDay");
const monthInput = document.getElementById("inputMonth");
const yearInput = document.getElementById("inputYear");
let inputGroup = document.getElementsByClassName("input");

const countDown = () => {
  const dateSelected = new Date(date);
  let currentDate = new Date();

  const totalTimeMiliseconds = dateSelected - currentDate;
  const totalTime = totalTimeMiliseconds / 1000;

  const days = Math.floor(totalTime / 3600 / 24);
  const hours = Math.floor(totalTime / 3600) % 24;
  const minutes = Math.floor(totalTime / 60) % 60;
  const seconds = Math.floor(totalTime % 60);

  addHTML(days, hours, minutes, seconds);
};

const addHTML = (d, h, m, s) => {
  dayEtiquette.innerHTML = d;
  hoursEtiquette.innerHTML = h;
  minutesEtiquette.innerHTML = m;
  secondsEtiquette.innerHTML = s;
};

const setInputs = () => {
  let y = today.getFullYear();
  let m = today.getMonth() + 1;
  let d = today.getDate();

  dayInput.setAttribute("value", d);
  monthInput.setAttribute("value", m);
  yearInput.setAttribute("value", y);
};

const clickCalculate = () => {
  let buttonCalculate = document.getElementById("calculate");

  for (let i = 0; i < inputGroup.length; i++) {
    inputGroup[i].addEventListener("keyup", () => {
      if (event.keyCode === 13) {
        calculate();
      }
    });
  }

  buttonCalculate.addEventListener("click", () => {
    calculate();
  });
};

const calculate = () => {
  let d = dayInput.value;
  let m = monthInput.value;
  let y = yearInput.value;

  if (isValid(d, m, y)) {
    m = monthName(m);
    date = `${d} ${m} ${y}`;
    countDown();
    setInterval(countDown, 1000);
  } else {
    alert("Insert a valid Date");
    for (let i = 0; i < inputGroup.length; i++) {
      inputGroup[i].value = "";
    }
  }
};

const monthName = (m) => {
  let month;
  switch (m) {
    case "1":
      month = "jan";
      break;
    case "2":
      month = "feb";
      break;
    case "3":
      month = "mar";
      break;
    case "4":
      month = "apr";
      break;
    case "5":
      month = "may";
      break;
    case "6":
      month = "jun";
      break;
    case "7":
      month = "jul";
      break;
    case "8":
      month = "aug";
      break;
    case "9":
      month = "sep";
      break;
    case "10":
      month = "oct";
      break;
    case "11":
      month = "nov";
      break;
    case "12":
      month = "dec";
      break;
  }
  return month;
};

const isValid = (d, m, y) => {
  let valid = true;

  if (d < 1 || d > 31) {
    valid = false;
  }

  if (m < 1 || m > 12) {
    valid = false;
  }

  if (d == 31 && (m == 2 || m == 4 || m == 6 || m == 9 || m == 11)) {
    valid = false;
  }

  if ((m == 2 && d == 29 && !(y % 4 == 0 && y % 100 != 0)) || y % 400 == 0) {
    valid = false;
  }

  if (isNaN(d) || isNaN(m) || isNaN(y)) {
    valid = false;
  }

  if (y <= today.getFullYear()) {
    if (m <= today.getMonth() + 1) {
      if (d <= today.getDate()) {
        valid = false;
      }
    }
  }

  return valid;
};

clickCalculate();
setInputs();
