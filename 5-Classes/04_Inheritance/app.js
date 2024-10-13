// 1. Tanım:
//    - Kalıtım, bir sınıfın (üst sınıf veya parent class) özelliklerini ve metotlarını, başka bir sınıfa (alt sınıf veya child class) aktararak yeniden kullanılabilirliği artırır.
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
// 2. Kullanım:
//    - Bir alt sınıf oluşturmak için `extends` anahtar kelimesi kullanılır.
//    - Alt sınıf, üst sınıfın özelliklerine ve metotlarına erişebilir.
// 3. Yapıcı Metot:
//    - Alt sınıfın yapıcı metodu, üst sınıfın yapıcı metodunu `super()` ile çağırarak, üst sınıfın özelliklerini başlatabilir.
// 4. Erişim Belirleyicileri:
//    - Alt sınıf, `public` ve `protected` ile tanımlanan özelliklere ve metotlara erişebilir.
//    - `private` ile tanımlanan özelliklere ve metotlara erişemez.
var Person = /** @class */ (function () {
    // Yapıcı metot: yeni bir Person nesnesi oluşturur
    function Person(id, firstName, lastName) {
        this.id = id; // Kimlik numarasını ayarla
        this.firstName = firstName; // Adı ayarla
        this.lastName = lastName; // Soyadı ayarla
    }
    // Tam adı döndüren metot
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName); // Ad ve soyadı birleştirir
    };
    return Person;
}());
// Person sınıfı üst sınıf (parent)
// Employee sınıfı alt sınıf (child)
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    // Yapıcı metot: Employee nesnesi oluşturur
    function Employee(id, firstName, lastName) {
        return _super.call(this, id, firstName, lastName) || this; // Parent sınıfın yapıcısını çağır
    }
    return Employee;
}(Person));
// Yeni bir Employee nesnesi oluştur
var employee = new Employee(1, "A", "B");
console.log(employee.getFullName());
// Yeni bir Person nesnesi oluştur
var kisibilgim = new Person(0, "Alper", "Bilgin");
// kisibilgim.id = 5; // Bu satır hata verecek çünkü id değiştirilemez (readonly değil ama iyi bir uygulama değil)
// Kimlik numarasını konsola yazdır
console.log(kisibilgim.id);
