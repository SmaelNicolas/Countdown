let date = "24 nov 2021";

const dayEtiquette = document.getElementById("daysNumber");
const hoursEtiquette = document.getElementById("hoursNumber");
const minutesEtiquette = document.getElementById("minutesNumber");
const secondsEtiquette = document.getElementById("secondsNumber");

const countDown = () => {
  const dateSelected = new Date(date);
  const currentDate = new Date();

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

countDown();
setInterval(countDown, 1000);
