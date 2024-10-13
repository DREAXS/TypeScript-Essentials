// 1. Tanım: Interface, bir nesnenin yapısını tanımlamak için kullanılır.
// 2. Söz Dizimi: "interface" anahtar kelimesi ile başlar ve ardından interface adı gelir.
// 3. Özellikler: İçinde, nesnenin sahip olması gereken özellikler tanımlanır.
// 4. Tür Belirleme: Özellikler, belirli türlerde tanımlanabilir (örneğin, string, number, vs.).
// 5. Metot Tanımlama: Interface içinde metotlar da tanımlanabilir.
// 6. Miras Alma: Interface’ler diğer interface’lerden miras alabilir (extends kullanarak).
// 7. Uygulama: Interface’ler, sınıflar tarafından uygulanabilir (implements kullanarak).
// 8. Esneklik: Interface'ler, birden fazla nesne için ortak bir yapı sağlar.
// 9. Güvenlik: TypeScript, interface kullanarak kodun güvenliğini artırır ve hata olasılığını azaltır.
// 10. Gelişmiş Özellikler: Arayüzler, isteğe bağlı ve okunan özellikler (optional ve readonly) içerebilir.
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: "Alper",
    lastName: "Bilgin",
    age: 21,
};
console.log(getFullName(person));
