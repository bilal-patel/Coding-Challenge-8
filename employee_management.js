//Task 1 - Create an Employee Class

// Setting up a class
class Employee  {
    constructor (name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

getDetails (){
    return ` ${this.department}, ${this.position}, ${this.name}, ${this.salary}`;
}// return details about employee
}
// test output
//let e1 = new Employee("Cole Crane", 85000, "Project Manager", "IT Security")
//console.log(e1.getDetails()); // Check if class output is accuarate for COLE

// Task 3 - Create a Manager Class that Inherits from Employee
// extending class
class Manager extends Employee {
    constructor (name, salary, position, department, bonus) // calling the first constructor
    { 
        super(name, salary, position, department);
        this.bonus = bonus; // add bonus to managers
    }
    //override details
    getDetails (){
        return ` ${this.department}, ${this.position}, ${this.name}, ${this.salary}, Annual Bonus: ${this.bonus}`;
    }// return details about employee

}

// test task 3 below by removing //
//let m1 = new Manager("Sara Cryin", 125000, "Project Manager", "IT Security", 20500)
//console.log(m1.getDetails()); // check output

// TASK 2 - Create a Department Class

// Setting up a class
class Department  {
    constructor (name) {
        this.name = name;
        this.employees = []; // empty array to store employees
    }

    addEmployee(employee) {
        // Add employee to dept
        this.employees.push(employee);
    }

    // calc total salary of all employees
    getDepartmentSalary() {
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }
// test BELOW
// let itDept = new Department("IT");

// // create employees
// let e1 = new Employee("Cole Crane", 85000, "Project Manager", "IT");
// let e3 = new Employee("Jane Crowe", 120000, "Senior PM", "IT");

// // add employees
// itDept.addEmployee(e1);
// itDept.addEmployee(e3);

// console.log("Total Salary:", itDept.getDepartmentSalary());



    // TASK 4 - Move calculateWithBonus inside the Department class
    calculateWithBonus() { // 
        return this.employees.reduce((total, employee) => {
            if (employee instanceof Manager) { // check if employee is a manager
                total += employee.salary + employee.bonus; // add bonus and salary
            } else {
                total += employee.salary;
            }
            return total; // 
        }, 0); // start the total at 0
    }
}

// test BELOW by removing //
let itDept = new Department("IT");

// create employees
let e1 = new Employee("Cole Crane", 85000, "Project Manager", "IT");
let e3 = new Employee("Jane Crowe", 120000, "Senior PM", "IT");
let m1 = new Manager("Sara Cryin", 125000, "Project Manager", "IT Security", 20500);

// add employees
itDept.addEmployee(e1);
itDept.addEmployee(e3);
itDept.addEmployee(m1);

// Output the total salary with bonuses
console.log("Total Salary with bonus:", itDept.calculateWithBonus());