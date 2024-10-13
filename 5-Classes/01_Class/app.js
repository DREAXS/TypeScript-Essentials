// 1. Sınıf Tanımı:
//    Sınıf, nesne tabanlı programlamada nesneleri tanımlamak için bir şablondur.
//    `class` anahtar kelimesiyle başlar.
// 2. Özellikler (Properties):
//    Sınıfın veri üyeleri (özellikleri) sınıf içinde tanımlanır.
//    Özellikler, sınıfın durumunu tutar (örneğin, `id`, `firstName`, `lastName`).
// 3. Yapıcı Metot (Constructor):
//    Sınıfın bir örneği oluşturulurken çağrılan özel bir metottur.
//    Genellikle sınıfın özelliklerini başlatmak için kullanılır.
var Person = /** @class */ (function () {
    // Yapıcı metot: yeni bir Person nesnesi oluşturur
    function Person(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // Tam adı döndüren metot
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
// Yeni bir Person nesnesi oluştur
var kisibilgim = new Person(0, "Alper", "Bilgin");
console.log(kisibilgim); // Nesnenin kendisini konsola yazdır
console.log(kisibilgim.getFullName()); // Tam adı konsola yazdır
