// 1. Public:
//    - `public` erişim belirleyicisi ile tanımlanan özellikler ve metotlar, her yerden erişilebilir.
//    - Varsayılan erişim belirleyicisidir, yani belirti olmasada public kabul edilir.
// 2. Private:
//    - `private` erişim belirleyicisi ile tanımlanan özellikler ve metotlar, yalnızca sınıf içinde erişilebilir.
//    - Dışarıdan erişim engellenir, bu sayede kapsülleme sağlanır.
// 3. Protected:
//    - `protected` erişim belirleyicisi ile tanımlanan özellikler ve metotlar , yalnızca sınıf içinde ve alt sınıflarda erişilebilir.
//    - Dışarıdan erişim engellenir, ancak kalıtım ile alt sınıflarda kullanılabilir.
// 4. Kullanım Örnekleri:
//    - `public` bir metot dışarıdan çağrılabilirken, `private` bir metot yalnızca sınıf içinden erişilebilir.
//    - `protected` bir özellik, alt sınıflarda kullanılabilirken, dış sınıflardan erişilemez.
var Person = /** @class */ (function () {
    function Person(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var kisibilgim = new Person(0, "Alper", "Bilgin");
console.log(kisibilgim.id);
