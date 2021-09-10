let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistered = true;
let runnerAge = 18;

if (earlyRegistered === true && runnerAge > 18){
  raceNumber += 1000;
  console.log(`Good day! Runner #${raceNumber}, your race will commence at 9:30 am.`);
} else if (earlyRegistered === false && runnerAge > 18){
  console.log(`Good day! Runner #${raceNumber}, your race will commence at 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`Good day! Runner #${raceNumber}, your race will commence at 12:30 pm.`)
} else {
  console.log(`Good day! Please see the registration desk for you to be assigned for a schedule.`)
}