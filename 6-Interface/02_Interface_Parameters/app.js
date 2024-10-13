// getFullName fonksiyonu, bir Person nesnesinin tam adını döndürür.
function getFullName(person) {
    if (person.middleName) {
        return "".concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
    }
    return "".concat(person.firstName, " ").concat(person.lastName);
}
// Person nesnesi oluşturuluyor.
var person = {
    firstName: "Alper",
    lastName: "Bilgin",
};
// Tam adı konsola yazdır.
console.log(getFullName(person));
// format fonksiyonu tanımlanıyor.
var format = function (str, isUpper) {
    return isUpper ? str.toUpperCase() : str.toLowerCase();
};
// format fonksiyonunu kullanarak dizeyi biçimlendiriyoruz.
console.log(format("Alper Bilgin", true));
