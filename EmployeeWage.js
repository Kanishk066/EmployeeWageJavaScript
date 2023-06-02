class EmployeeWageCalculator {
    static NUM_WORKING_DAYS = 20;
    static IS_PART_TIME = 1;
    static IS_FULL_TIME = 2;
    static PART_TIME_HOUR = 4;
    static WAGE_PER_HOUR = 20;
    static FULL_DAY_HOUR = 8;
    static MAX_WORKING_HOURS = 100;
  
    constructor() {
      this.totalWorkingDays = 0;
      this.totalWorkingHours = 0;
      this.monthlyWage = 0;
    }
  
    calculateWage() {
      console.log("Welcome to Employee Wage Project");
      let dailyWage;
      while (
        this.totalWorkingDays < EmployeeWageCalculator.NUM_WORKING_DAYS &&
        this.totalWorkingHours < EmployeeWageCalculator.MAX_WORKING_HOURS
      ) {
        const newAttendance = Math.floor(Math.random() * 3); // 0 for absent, 1 for part-time, 2 for full-time
        switch (newAttendance) {
          case EmployeeWageCalculator.IS_PART_TIME:
            dailyWage = EmployeeWageCalculator.WAGE_PER_HOUR * EmployeeWageCalculator.PART_TIME_HOUR;
            this.totalWorkingHours += EmployeeWageCalculator.PART_TIME_HOUR;
            break;
          case EmployeeWageCalculator.IS_FULL_TIME:
            dailyWage = EmployeeWageCalculator.WAGE_PER_HOUR * EmployeeWageCalculator.FULL_DAY_HOUR;
            this.totalWorkingHours += EmployeeWageCalculator.FULL_DAY_HOUR;
            break;
          default:
            dailyWage = 0;
            break;
        }
        this.totalWorkingDays++;
        this.monthlyWage += dailyWage;
      }
    }
  
    printWage() {
      console.log("Total Working Days = " + this.totalWorkingDays);
      console.log("Total Working Hours = " + this.totalWorkingHours);
      console.log("Employee Monthly Wage = " + this.monthlyWage);
    }
  }
  
  const empWage = new EmployeeWageCalculator();
  empWage.calculateWage();
  empWage.printWage();
  


