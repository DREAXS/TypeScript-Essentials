// 1. Sınıf Tanımı:
//    Sınıf, nesne tabanlı programlamada nesneleri tanımlamak için bir şablondur.
//    `class` anahtar kelimesiyle başlar.

// 2. Özellikler (Properties):
//    Sınıfın veri üyeleri (özellikleri) sınıf içinde tanımlanır.
//    Özellikler, sınıfın durumunu tutar (örneğin, `id`, `firstName`, `lastName`).

// 3. Yapıcı Metot (Constructor):
//    Sınıfın bir örneği oluşturulurken çağrılan özel bir metottur.
//    Genellikle sınıfın özelliklerini başlatmak için kullanılır.

class Person {
  id: number; // Kişinin kimlik numarası
  firstName: string; // Kişinin adı
  lastName: string; // Kişinin soyadı

  // Yapıcı metot: yeni bir Person nesnesi oluşturur
  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Tam adı döndüren metot
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Yeni bir Person nesnesi oluştur
const kisibilgim = new Person(0, "Alper", "Bilgin");
console.log(kisibilgim); // Nesnenin kendisini konsola yazdır
console.log(kisibilgim.getFullName()); // Tam adı konsola yazdır
