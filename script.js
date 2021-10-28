let date;
const today = new Date();

const dayEtiquette = document.getElementById("daysNumber");
const hoursEtiquette = document.getElementById("hoursNumber");
const minutesEtiquette = document.getElementById("minutesNumber");
const secondsEtiquette = document.getElementById("secondsNumber");

const dayInput = document.getElementById("inputDay");
const monthInput = document.getElementById("inputMonth");
const yearInput = document.getElementById("inputYear");

const countDown = () => {
  const dateSelected = new Date(date);
  let currentDate = new Date();

  const totalTimeMiliseconds = dateSelected - currentDate;
  const totalTime = totalTimeMiliseconds / 1000;

  const days = Math.round(totalTime / 3600 / 24);
  const hours = Math.round(totalTime / 3600) % 24;
  const minutes = Math.round(totalTime / 60) % 60;
  const seconds = Math.round(totalTime % 60);

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

  console.log(y, m, d);

  dayInput.setAttribute("value", d);
  monthInput.setAttribute("value", m);
  yearInput.setAttribute("value", y);
};

const clickCalculate = () => {
  let buttonCalculate = document.getElementById("calculate");
  let inputGroup = document.getElementsByClassName("input");

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
  let month;

  let d = dayInput.value;
  let m = monthInput.value;
  let y = yearInput.value;

  if (
    d < 1 ||
    d > 31 ||
    m < 1 ||
    m > 12 ||
    y < today.getFullYear() ||
    isNaN(d) ||
    isNaN(m) ||
    isNaN(y)
  ) {
    alert("Insert a valid Date");
  } else {
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

    date = `${d} ${month} ${y}`;
    countDown();
    setInterval(countDown, 1000);
  }
};

clickCalculate();
setInputs();
