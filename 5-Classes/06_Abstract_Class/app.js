var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Soyut sınıf: Department
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    // Departmanın adını yazdıran metot
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
// Soyut sınıfların doğrudan instance'ı alınamaz.
// Fakat referans olarak kullanılabilirler.
// Soyut sınıflardaki soyut metotlar, alt sınıflarda mutlaka implement edilmelidir.
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this; // Üst sınıfın yapıcısını çağır
    }
    // Soyut metodu implement et
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    // Raporları oluşturma metodu
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
// Department türünde bir referans oluştur
var department;
// AccountingDepartment nesnesi oluştur ve referansa ata
department = new AccountingDepartment();
// Departmanın adını ve toplantı bilgisini yazdır
department.printName();
department.printMeeting();
// department.generateReports(); // Bu satır hata verecek çünkü generateReports metodu Department sınıfında tanımlı değil.
