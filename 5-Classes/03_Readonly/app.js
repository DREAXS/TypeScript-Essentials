var Person = /** @class */ (function () {
    // Yapıcı metot: yeni bir Person nesnesi oluşturur.
    function Person(id, firstName, lastName) {
        this.id = id; // Kimlik numarasını ayarla (readonly)
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var kisibilgim = new Person(0, "Alper", "Bilgin");
// kisibilgim.id = 5; // Bu satır hata verecek, çünkü id readonly.
// Kimlik numarasını konsola yazdır
console.log(kisibilgim.id); // 0
