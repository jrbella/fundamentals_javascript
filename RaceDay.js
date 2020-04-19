let raceNumber = Math.floor(Math.random() * 1000);

//vars
let runnerAge = 33
let runnerRegisteredEarly = false

/* Tests
let runnerAge = 13
let runnerRegisteredEarly = true

** Expect: The under 18 race will begin at 12:30

let runnerAge = 13
let runnerRegisteredEarly = false

** Expect: The under 18 race will begin at 12:30 

let runnerAge = 33
let runnerRegisteredEarly = true

** Expect: Your race will begin at 9:30 A.M. 

let runnerAge = 33
let runnerRegisteredEarly = false

** Expect: Late adults run at 11:00 A.M
*/


if(runnerAge > 18 && runnerRegisteredEarly === true){
  raceNumber = raceNumber + 1000
}

//runner message
let runnerMessage = ""

if(raceNumber > 1000){
  runnerMessage = `Your race will begin at 9:30 A.M. Your race number is ${raceNumber}`
}
else if(runnerAge >= 18 && raceNumber < 1000){
  runnerMessage = `Late adults run at 11:00 A.M. Your race number is ${raceNumber}`
}
else{
  runnerMessage = `The under 18 race will begin at 12:30 P.M. Your race number is ${raceNumber}`
}



//logging and test
console.log(runnerRegisteredEarly)
console.log(raceNumber)
console.log(runnerMessage)