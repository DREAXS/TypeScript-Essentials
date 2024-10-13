// Tip, string veya number türlerini alabilen bir tür tanımlamasıdır.
type Tip = string | number;

// add fonksiyonu, tipine göre toplama veya birleştirme işlemi yapar.
function add(a: Tip, b: Tip): Tip {
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
class Customer {
  isCreditAllowed(): boolean {
    return true; // Kredi durumunu döndürür.
  }
}

// Supplier sınıfı, tedarikçi durumunu kontrol eder.
class Supplier {
  isInShortList(): boolean {
    return true; // Tedarikçi kontrolünü döndürür.
  }
}

// BusinessPartner tipi, Customer veya Supplier olabilir.
type BusinessPartner = Customer | Supplier;

// signContract fonksiyonu, iş ortağını değerlendirir ve uygun mesajı döndürür.
function signContract(partner: BusinessPartner): string {
  let message: string;
  if (partner instanceof Customer) {
    message = partner.isCreditAllowed()
      ? "Müşteri ile yeni bir sözleşme imzalayın"
      : "Kredi sorunu";
  } else if (partner instanceof Supplier) {
    message = partner.isInShortList()
      ? "Tedarikçi ile yeni bir sözleşme imzalayın"
      : "Daha fazla değerlendirme gerekiyor";
  } else {
    message = "Geçersiz iş ortağı"; // Herhangi bir durumda hata mesajı.
  }

  return message;
}

// Örnek kullanım
const customer = new Customer();
const supplier = new Supplier();

console.log(signContract(customer)); // Müşteri mesajı
console.log(signContract(supplier)); // Tedarikçi mesajı
