const refs = {
	days: document.querySelector('span[data-value="days"]'),
	hours: document.querySelector('span[data-value="hours"]'),
	minutes: document.querySelector('span[data-value="mins"]'),
	seconds: document.querySelector('span[data-value="secs"]'),
  }
  
  const timer = {
	start(){
		const startTime = new Date( 2021, 01, 01, );
	  setInterval(() => {
		  const targetTime = new Date();
		  const deltaTime = startTime - targetTime;
  
		  updateClockface(deltaTime);
	  }, 1000);
	}
  
  }
  timer.start();
  
  function updateClockface(time) {
	  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
	  const hours = pad(
		Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
	  );
	  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
	  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  
	  refs.days.textContent = days;
	  refs.hours.textContent = hours;
	  refs.minutes.textContent = mins;
	  refs.seconds.textContent = secs;
  }
  function pad(value) {
	  return String(value).padStart(2, '0');
	}




// document.addEventListener('DOMContentLoaded', () => {
// 	const endPromotion = new Date('Jan 1 2021 00:00:00');
	
// 	const daysVal = document.querySelector('.timer-days .timer-val');
// 	const hoursVal = document.querySelector('.timer-hours .timer-val');
// 	const minutesVal = document.querySelector('.timer-minutes .timer-val');
// 	const secondsVal = document.querySelector('.timer-seconds .timer-val');

// 	const daysText = document.querySelector('.timer-days .timer-text');
// 	const hoursText = document.querySelector('.timer-hours .timer-text');
// 	const minutesText = document.querySelector('.timer-minutes .timer-text');
// 	const secondsText = document.querySelector('.timer-seconds .timer-text');

// 	function declOfNum(number, titles) {  
// 		let cases = [2, 0, 1, 1, 1, 2];  
// 		return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
// 	}

// 	const timeCount = () => {
// 		let now = new Date();
// 		let leftUntil = endPromotion - now;
		
// 		let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
// 		let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
// 		let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
// 		let seconds = Math.floor(leftUntil / 1000) % 60;

// 		daysVal.textContent = days;
// 		hoursVal.textContent =	hours;
// 		minutesVal.textContent = minutes;
// 		secondsVal.textContent = seconds;

// 		daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
// 		hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
// 		minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
// 		secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
// 	};

// 	timeCount();
// 	setInterval(timeCount, 1000);
// });