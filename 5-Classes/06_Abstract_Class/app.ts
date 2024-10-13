// Soyut sınıf: Department
abstract class Department {
  constructor(public name: string) {}

  // Departmanın adını yazdıran metot
  printName(): void {
    console.log("Department name: " + this.name);
  }

  // Soyut metot: alt sınıflarda mutlaka implement edilmesi gerekiyor
  abstract printMeeting(): void;

  // Diğer soyut metot örneği: generateReports (şu an kullanılmıyor)
  // abstract generateReports(): void;
}

// Soyut sınıfların doğrudan instance'ı alınamaz.
// Fakat referans olarak kullanılabilirler.
// Soyut sınıflardaki soyut metotlar, alt sınıflarda mutlaka implement edilmelidir.

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing"); // Üst sınıfın yapıcısını çağır
  }

  // Soyut metodu implement et
  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }

  // Raporları oluşturma metodu
  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}

// Department türünde bir referans oluştur
let department: Department;

// AccountingDepartment nesnesi oluştur ve referansa ata
department = new AccountingDepartment();

// Departmanın adını ve toplantı bilgisini yazdır
department.printName();
department.printMeeting();

// department.generateReports(); // Bu satır hata verecek çünkü generateReports metodu Department sınıfında tanımlı değil.
