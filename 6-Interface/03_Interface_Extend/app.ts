// IPerson arayüzü, bir kişinin temel bilgilerini tanımlar.
interface IPerson {
  name: string;
  gender: string;
}

// IEmployee arayüzü, IPerson arayüzünden türetilir ve çalışan numarasını içerir.
interface IEmployee extends IPerson {
  empNumber: number;
}

// IWorker arayüzü, IPerson arayüzünden türetilir ve departman bilgisini içerir.
interface IWorker extends IPerson {
  empDepartment: string;
}

// IEmployee arayüzünü uygulayan bir nesne oluşturuluyor.
let employee: IEmployee = {
  empNumber: 1,
  gender: "Male",
  name: "Alper Bilgin", // Değiştirildi
};

// IWorker arayüzünü uygulayan bir nesne oluşturuluyor.
let employeeDepartment: IWorker = {
  empDepartment: "Computer Engineer",
  gender: "Male",
  name: "Alper Bilgin", // Değiştirildi
};

// Konsola nesneleri yazdır.
console.log(employee);
console.log(employeeDepartment);

// IPerson arayüzünü uygulayan bir sınıf oluşturuluyor.
class Employee implements IPerson {
  empNumber: number;
  name: string;
  gender: string;

  constructor(empNumber: number, name: string, gender: string) {
    this.empNumber = empNumber;
    this.name = name;
    this.gender = gender;
  }
}

// Yeni bir Employee nesnesi oluşturuluyor.
let newEmployee = new Employee(5, "Alper Bilgin", "Male"); // Değiştirildi
console.log(newEmployee);
