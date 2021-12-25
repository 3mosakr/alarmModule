const alarm = require(`./alarmModule`);

let alarm1 = new alarm("workAlarm", 3);

alarm1.on(`AlarmFired`, () => {
  console.log("walk Up for work");
  alarm1.snooze(2);
});
alarm1.on(`snooze`, () => {
  console.log("you are snoozed 2 seconds..");
  alarm1.stop();
});
