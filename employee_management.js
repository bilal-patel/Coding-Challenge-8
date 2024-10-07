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

// Task 3 -