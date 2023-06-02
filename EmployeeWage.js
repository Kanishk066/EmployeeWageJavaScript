console.log("Welcome to the employee wage problem");
const IS_PRESENT = 1;
const WAGE_PER_HOUR = 20;
const FULL_DAY_HOUR = 8;
let dailyWage = 0;

// Generate a random number between 0 and 1 (inclusive)
let attendance = Math.floor(Math.random() * 2);

if (attendance === IS_PRESENT) {
  dailyWage = WAGE_PER_HOUR * FULL_DAY_HOUR;
  console.log("Employee is Present. Daily Wage = " + dailyWage);
} else {
  console.log("Employee is Absent. Daily Wage = " + dailyWage);
}