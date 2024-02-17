AOS.init();

const dateEvent = new Date("jun 02, 2024 00:00:00");
const timeStampEvent = dateEvent.getTime();

const countDays = setInterval(function() {
  const now = new Date();
  const timeStampCurrent = now.getTime();

  const distanceEvent = timeStampEvent - timeStampCurrent;

  const daysMs = 1000 * 60 * 60 * 24;
  const hoursMs = 1000 * 60 * 60;
  const minutesMs = 1000 * 60;

  const daysEvent = Math.floor(distanceEvent / daysMs);
  const hoursEvent = Math.floor((distanceEvent % daysMs) / hoursMs);
  const minutesEvent = Math.floor((distanceEvent % hoursMs) / minutesMs);
  const secondsEvent = Math.floor((distanceEvent % minutesMs) / 1000);

  document.getElementById('counter').innerHTML = `${daysEvent}D ${hoursEvent}H ${minutesEvent}M ${secondsEvent}S`;

  if(distanceEvent < 0) {
    clearInterval(countDays);
    document.getElementById('counter').innerHTML = 'Event expired';
  }

}, 1000);