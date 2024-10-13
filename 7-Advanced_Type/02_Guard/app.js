// add fonksiyonu, tipine göre toplama veya birleştirme işlemi yapar.
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b; // Sayıları toplar.
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b); // Stringleri birleştirir.
    }
    throw new Error("Lütfen doğru formatta veri gönderin"); // Hatalı durum.
}
// Örnek kullanım
console.log(add(5, "Alper Bilgin")); // Hata fırlatacak, çünkü sayı ve string ile işlem yapılıyor.
// Customer sınıfı, kredi durumu kontrolü yapar.
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.isCreditAllowed = function () {
        return true; // Kredi durumunu döndürür.
    };
    return Customer;
}());
// Supplier sınıfı, tedarikçi durumunu kontrol eder.
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    Supplier.prototype.isInShortList = function () {
        return true; // Tedarikçi kontrolünü döndürür.
    };
    return Supplier;
}());
// signContract fonksiyonu, iş ortağını değerlendirir ve uygun mesajı döndürür.
function signContract(partner) {
    var message;
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed()
            ? "Müşteri ile yeni bir sözleşme imzalayın"
            : "Kredi sorunu";
    }
    else if (partner instanceof Supplier) {
        message = partner.isInShortList()
            ? "Tedarikçi ile yeni bir sözleşme imzalayın"
            : "Daha fazla değerlendirme gerekiyor";
    }
    else {
        message = "Geçersiz iş ortağı"; // Herhangi bir durumda hata mesajı.
    }
    return message;
}
// Örnek kullanım
var customer = new Customer();
var supplier = new Supplier();
console.log(signContract(customer)); // Müşteri mesajı
console.log(signContract(supplier)); // Tedarikçi mesajı
