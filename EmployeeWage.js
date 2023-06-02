console.log("Welcome to Employee Wage Project");

const IS_PRESENT = 1;
const WAGE_PER_HOUR = 20;
const FULL_DAY_HOUR = 8;
let dailyWage = 0;

let attendance = Math.floor(Math.random() * 2);
if (attendance === IS_PRESENT) {
  console.log("Employee is Present");
} else {
  console.log("Employee is Absent");
}

attendance = Math.floor(Math.random() * 3);
if (attendance === 1) {
  const PART_TIME_HOUR = 4;
  dailyWage = WAGE_PER_HOUR * PART_TIME_HOUR;
  console.log("Employee is Part Time. Daily Wage = " + dailyWage);
} else if (attendance === 2) {
  dailyWage = WAGE_PER_HOUR * FULL_DAY_HOUR;
  console.log("Employee is Full Time. Daily Wage = " + dailyWage);
} else {
  console.log("Employee is Absent. Daily Wage = " + dailyWage);
}
