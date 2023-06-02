console.log("Welcome to Employee Wage Project");

let a = Math.floor(Math.random() * 2);
if (a === 1) {
  console.log("Employee is Present");
} else {
  console.log("Employee is Absent");
}

const IS_PRESENT = 1;
const WAGE_PER_HOUR = 20;
const FULL_DAY_HOUR = 8;
let dailyWage = 0;

let attendance = Math.floor(Math.random() * 2);
if (attendance === IS_PRESENT) {
  dailyWage = WAGE_PER_HOUR * FULL_DAY_HOUR;
  console.log("Employee is Present. Daily Wage = " + dailyWage);
} else {
  console.log("Employee is Absent. Daily Wage = " + dailyWage);
}

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
let NewAttendance = Math.floor(Math.random() * 3);
if (NewAttendance === IS_PART_TIME) {
  dailyWage = WAGE_PER_HOUR * PART_TIME_HOUR;
  console.log("Employee is Part Time. Daily Wage = " + dailyWage);
} else if (NewAttendance === IS_FULL_TIME) {
  dailyWage = WAGE_PER_HOUR * FULL_DAY_HOUR;
  console.log("Employee is Full Time. Daily Wage = " + dailyWage);
} else {
  console.log("Employee is Absent. Daily Wage = " + dailyWage);
}

const PART_TIME = 1;
const FULL_TIME = 2;
const WAGEPERHOUR = 20;
const FULLDAYHOUR = 8;
const PARTTIMEHOUR = 4;
switch (NewAttendance) {
  case PART_TIME:
    dailyWage = WAGEPERHOUR * PARTTIMEHOUR;
    console.log("Employee is Part Time. Daily Wage = " + dailyWage);
    break;
  case FULL_TIME:
    dailyWage = WAGEPERHOUR * FULLDAYHOUR;
    console.log("Employee is Full Time. Daily Wage = " + dailyWage);
    break;
  default:
    console.log("Employee is Absent. Daily Wage = " + dailyWage);
    break;
}


