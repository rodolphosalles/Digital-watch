const formatTimeUnit = (unit) => {
  return String(unit).length === 1 ? `0${unit}` : unit;
};

const clockContainer = document.querySelector(".clock-container");

const updateClock = () => {
  const present = new Date();
  const hours = present.getHours();
  const minutes = present.getMinutes();
  const seconds = present.getSeconds();

  clockContainer.innerHTML = `
    <span>${formatTimeUnit(hours)}</span> :
    <span>${formatTimeUnit(minutes)}</span> :
    <span>${formatTimeUnit(seconds)}</span>
  `;
};
setInterval(updateClock, 1000);
