const refs = {
  daysValue: document.querySelector("[data-value=days]"),
  hoursValue: document.querySelector("[data-value=hours]"),
  minsValue: document.querySelector("[data-value=mins]"),
  secsValue: document.querySelector("[data-value=secs]"),
}

const countDown = new Date('Jul 17, 2021 00:00:00').getTime();

const startTime = setInterval(() => {
  const nowDate = new Date().getTime();
  const time = countDown - nowDate;
  
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.daysValue.textContent = `${days}`;
  refs.hoursValue.textContent = `${hours}`;
  refs.minsValue.textContent = `${mins}`;
  refs.secsValue.textContent = `${secs}`;
}, 1000);

function pad(value) {
  return String(value).padStart(2, "0");
};
