class EmployeeWageCalculator {
    constructor() {
      this.PART_TIME_HOUR = 4;
      this.FULL_DAY_HOUR = 8;
      this.totalWorkingDays = 0;
      this.totalWorkingHours = 0;
      this.monthlyWage = 0;
    }
  
    calculateWage(company, wagePerHour, numWorkingDays, maxWorkingHours) {
      console.log("Calculating wage for company " + company);
      let dailyWage;
      while (this.totalWorkingDays < numWorkingDays && this.totalWorkingHours < maxWorkingHours) {
        const newAttendance = Math.floor(Math.random() * 3); // 0 for absent, 1 for part-time, 2 for full-time
        switch (newAttendance) {
          case 1:
            dailyWage = wagePerHour * this.PART_TIME_HOUR;
            this.totalWorkingHours += this.PART_TIME_HOUR;
            break;
          case 2:
            dailyWage = wagePerHour * this.FULL_DAY_HOUR;
            this.totalWorkingHours += this.FULL_DAY_HOUR;
            break;
          default:
            dailyWage = 0;
            break;
        }
        this.totalWorkingDays++;
        this.monthlyWage += dailyWage;
      }
      return this.monthlyWage;
    }
  }
  
  const companyA = new EmployeeWageCalculator();
  const wageA = companyA.calculateWage("Company A", 20, 20, 100);
  console.log("Monthly wage for Company A: " + wageA);
  
  const companyB = new EmployeeWageCalculator();
  const wageB = companyB.calculateWage("Company B", 25, 25, 120);
  console.log("Monthly wage for Company B: " + wageB);
  
  


