// IEmployee arayüzünü uygulayan bir nesne oluşturuluyor.
var employee = {
    empNumber: 1,
    gender: "Male",
    name: "Alper Bilgin", // Değiştirildi
};
// IWorker arayüzünü uygulayan bir nesne oluşturuluyor.
var employeeDepartment = {
    empDepartment: "Computer Engineer",
    gender: "Male",
    name: "Alper Bilgin", // Değiştirildi
};
// Konsola nesneleri yazdır.
console.log(employee);
console.log(employeeDepartment);
// IPerson arayüzünü uygulayan bir sınıf oluşturuluyor.
var Employee = /** @class */ (function () {
    function Employee(empNumber, name, gender) {
        this.empNumber = empNumber;
        this.name = name;
        this.gender = gender;
    }
    return Employee;
}());
// Yeni bir Employee nesnesi oluşturuluyor.
var newEmployee = new Employee(5, "Alper Bilgin", "Male"); // Değiştirildi
console.log(newEmployee);
