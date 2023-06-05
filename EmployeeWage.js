class Employee {
  constructor(id, name, salary, gender, startDate) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.gender = gender;
    this.startDate = startDate;
  }
}

class EmployeeWageCalculator {
  constructor(company, wagePerHour, numWorkingDays, maxWorkingHours, employee) {
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
    this.employee = employee;
  }



  calculateWage = () => {
    console.log("Calculating wage for company " + this.company);
    let dailyWage;
    while (this.totalWorkingDays < this.numWorkingDays && this.totalWorkingHours < this.maxWorkingHours) {
      let newAttendance = Math.floor(Math.random() * 3); // 0 for absent, 1 for part-time, 2 for full-time
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
      }
      this.totalWorkingDays++;
      this.monthlyWage += dailyWage;
    }
    this.totalWage += this.monthlyWage;
    return this.monthlyWage;
  };

  getCompany = () => {
    return this.company;
  };

  getTotalWage = () => {
    return this.totalWage;
  };
}

class CompanyEmpWage {
  constructor(company, wagePerHour, numWorkingDays, maxWorkingHours) {
    this.company = company;
    this.wagePerHour = wagePerHour;
    this.numWorkingDays = numWorkingDays;
    this.maxWorkingHours = maxWorkingHours;
    this.totalWage = 0;
  }

  getTotalWage = () => {
    return this.totalWage;
  };

  getCompany = () => {
    return this.company;
  };

  getWagePerHour = () => {
    return this.wagePerHour;
  };

  getNumWorkingDays = () => {
    return this.numWorkingDays;
  };

  getMaxWorkingHours = () => {
    return this.maxWorkingHours;
  };

  setTotalWage = (totalWage) => {
    this.totalWage = totalWage;
  };
}

class EmpWageBuilder {
  constructor() {
    this.companies = [];
    this.numCompanies = 0;
    this.employees = [];
    this.numEmployees = 0;
  }

  addCompany = (company, wagePerHour, numWorkingDays, maxWorkingHours) => {
    const emp = new CompanyEmpWage(company, wagePerHour, numWorkingDays, maxWorkingHours);
    this.companies.push(emp);
    this.numCompanies++;
  };

  computeWages = () => {
    for (let i = 0; i < this.numCompanies; i++) {
      const wage = new EmployeeWageCalculator(
        this.companies[i].getCompany(),
        this.companies[i].getWagePerHour(),
        this.companies[i].getNumWorkingDays(),
        this.companies[i].getMaxWorkingHours()
      ).calculateWage();
      this.companies[i].setTotalWage(wage);
      console.log(
        "Total wage for " +
        this.companies[i].getCompany() +
         " is " +
        this.companies[i].getTotalWage());
}
};

 addEmployee = (id, name, salary, gender, startDate) => {
   try {
      const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
      if (!namePattern.test(name)) {
        throw new Error("Invalid name format. Name should start with a capital letter and have at least 3 characters.");
      }

      const employee = new Employee(id, name, salary, gender, startDate);
      this.employees.push(employee);
      this.numEmployees++;
    } catch (error) {
      console.error("Error adding employee:", error.message);
    }
  };

getTotalWage = (company) => {
for (let i = 0; i < this.companies.length; i++) {
if (this.companies[i].getCompany() === company) {
return this.companies[i].getTotalWage();
}
}
return 0;
};
}

const empWageBuilder = new EmpWageBuilder();
empWageBuilder.addCompany("Company A", 20, 20, 100);
empWageBuilder.addCompany("Company B", 25, 25, 120);
empWageBuilder.addEmployee(1, "Kanishk Singhal", 5000, "Male", "2023-01-01");
empWageBuilder.addEmployee(2, "Rajat Tokas", 6000, "Male", "2012-06-05");
empWageBuilder.computeWages();

const totalWageCompanyA = empWageBuilder.getTotalWage("Company A");
console.log("Total wage for Company A: " + totalWageCompanyA);

const totalWageCompanyB = empWageBuilder.getTotalWage("Company B");
console.log("Total wage for Company B: " + totalWageCompanyB);



