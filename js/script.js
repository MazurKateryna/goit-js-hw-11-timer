class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = document.querySelector(selector);
    this.targetDate = new Date(targetDate);
  }
  startTimer() {
    this.intervalId = setInterval(() => {
      this.nowDate = new Date().getTime();
      this.time = this.targetDate - this.nowDate;
      this.countTime();
      this.insertMarckup(); 
      
      if(this.time < 0) {
        this.stopTimer();
      }
    }, 1000);
  }   
  countTime() {
    this.days = Math.floor(this.time / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
    this.secs = Math.floor((this.time % (1000 * 60)) / 1000);
  }
  insertMarckup() {
    this.refs = {
      days: document.querySelector(" [data-value=days]"),
      hours: document.querySelector(" [data-value=hours]"),
      minutes: document.querySelector(" [data-value=mins]"),
      seconds: document.querySelector(" [data-value=secs]")
    };
    this.refs.days.textContent = this.pad(this.days);
    this.refs.hours.textContent = this.pad(this.hours);
    this.refs.minutes.textContent = this.pad(this.mins);
    this.refs.seconds.textContent = this.pad(this.secs);
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
  stopTimer() {
    clearInterval(this.intervalId);
    this.time = 0;
    this.countTime(this.time);
    this.insertMarckup(this.time);
  }
};

const countdownTimer = new CountdownTimer("#timer-1", "Jul 17, 2021, 00:00:00");
countdownTimer.startTimer();
