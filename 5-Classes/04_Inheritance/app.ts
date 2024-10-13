// 1. Tanım:
//    - Kalıtım, bir sınıfın (üst sınıf veya parent class) özelliklerini ve metotlarını, başka bir sınıfa (alt sınıf veya child class) aktararak yeniden kullanılabilirliği artırır.

// 2. Kullanım:
//    - Bir alt sınıf oluşturmak için `extends` anahtar kelimesi kullanılır.
//    - Alt sınıf, üst sınıfın özelliklerine ve metotlarına erişebilir.

// 3. Yapıcı Metot:
//    - Alt sınıfın yapıcı metodu, üst sınıfın yapıcı metodunu `super()` ile çağırarak, üst sınıfın özelliklerini başlatabilir.

// 4. Erişim Belirleyicileri:
//    - Alt sınıf, `public` ve `protected` ile tanımlanan özelliklere ve metotlara erişebilir.
//    - `private` ile tanımlanan özelliklere ve metotlara erişemez.

class Person {
  id: number; // Kişinin kimlik numarası
  firstName: string; // Kişinin adı
  lastName: string; // Kişinin soyadı

  // Yapıcı metot: yeni bir Person nesnesi oluşturur
  constructor(id: number, firstName: string, lastName: string) {
    this.id = id; // Kimlik numarasını ayarla
    this.firstName = firstName; // Adı ayarla
    this.lastName = lastName; // Soyadı ayarla
  }

  // Tam adı döndüren metot
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`; // Ad ve soyadı birleştirir
  }
}

// Person sınıfı üst sınıf (parent)
// Employee sınıfı alt sınıf (child)
class Employee extends Person {
  // Yapıcı metot: Employee nesnesi oluşturur
  constructor(id: number, firstName: string, lastName: string) {
    super(id, firstName, lastName); // Parent sınıfın yapıcısını çağır
  }
}

// Yeni bir Employee nesnesi oluştur
let employee = new Employee(1, "A", "B");
console.log(employee.getFullName());

// Yeni bir Person nesnesi oluştur
let kisibilgim = new Person(0, "Alper", "Bilgin");
// kisibilgim.id = 5; // Bu satır hata verecek çünkü id değiştirilemez (readonly değil ama iyi bir uygulama değil)

// Kimlik numarasını konsola yazdır
console.log(kisibilgim.id);
