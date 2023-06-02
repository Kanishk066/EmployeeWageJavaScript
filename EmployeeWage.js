class EmployeeWageCalculator {
    constructor(company, wagePerHour, numWorkingDays, maxWorkingHours) {
      this.PART_TIME_HOUR = 4;
      this.FULL_DAY_HOUR = 8;
      this.totalWorkingDays = 0;
      this.totalWorkingHours = 0;
      this.monthlyWage = 0;
      this.company = company;
      this.wagePerHour = wagePerHour;
      this.numWorkingDays = numWorkingDays;
      this.maxWorkingHours = maxWorkingHours;
      this.totalWage = 0;
    }
  
    calculateWage() {
      console.log("Calculating wage for " + this.company);
      let dailyWage;
      while (this.totalWorkingDays < this.numWorkingDays && this.totalWorkingHours < this.maxWorkingHours) {
        const newAttendance = Math.floor(Math.random() * 3); // 0 for absent, 1 for part-time, 2 for full-time
        switch (newAttendance) {
          case 1:
            dailyWage = this.wagePerHour * this.PART_TIME_HOUR;
            this.totalWorkingHours += this.PART_TIME_HOUR;
            break;
          case 2:
            dailyWage = this.wagePerHour * this.FULL_DAY_HOUR;
            this.totalWorkingHours += this.FULL_DAY_HOUR;
            break;
          default:
            dailyWage = 0;
            break;
        }
        this.totalWorkingDays++;
        this.monthlyWage += dailyWage;
      }
      this.totalWage += this.monthlyWage;
      return this.monthlyWage;
    }
  
    getCompany() {
      return this.company;
    }
  
    getTotalWage() {
      return this.totalWage;
    }
  }
  
  class EmpWageBuilder {
    constructor(numCompanies) {
      this.companies = [];
      this.numCompanies = numCompanies;
    }
  
    addCompany(company, wagePerHour, numWorkingDays, maxWorkingHours) {
      const emp = new EmployeeWageCalculator(company, wagePerHour, numWorkingDays, maxWorkingHours);
      this.companies.push(emp);
    }
  
    computeWages() {
      for (let i = 0; i < this.numCompanies; i++) {
        const wage = this.companies[i].calculateWage();
        console.log("Monthly wage for " + this.companies[i].getCompany() + ": " + wage);
      }
    }
  
    printWages() {
      for (let i = 0; i < this.numCompanies; i++) {
        console.log("Total wage for " + this.companies[i].getCompany() + ": " + this.companies[i].getTotalWage());
      }
    }
  }
  
  const builder = new EmpWageBuilder(2);
  builder.addCompany("Company A", 20, 20, 100);
  builder.addCompany("Company B", 25, 25, 120);
  builder.computeWages();
  builder.printWages();
  
  
  


