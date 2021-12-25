const events = require("events");

class Alarm extends events {
  snoozeInterval;
  constructor(name, intervalInSec) {
    super();
    this.name = name;
    this.intervalInSec = intervalInSec;

    setTimeout(() => {
      this.emit(`AlarmFired`); // define event with name AlarmFired
    }, intervalInSec * 1000);
  }
  snooze(intervalInSec) {
    this.snoozeInterval = setInterval(() => {
      this.emit(`snooze`); // define event with name snooze
    }, intervalInSec * 1000);
  }
  stop() {
    console.log("alarm is stoped");
    clearInterval(this.snoozeInterval);
  }
}

module.exports = Alarm;
