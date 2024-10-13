// Person arayüzü, bir kişinin adını, soyadını ve isteğe bağlı olarak orta adını tanımlar.
interface Person {
  firstName: string;
  lastName: string;
  middleName?: string; // Orta ad isteğe bağlıdır.
}

// getFullName fonksiyonu, bir Person nesnesinin tam adını döndürür.
function getFullName(person: Person): string {
  if (person.middleName) {
    return `${person.firstName} ${person.middleName} ${person.lastName}`;
  }
  return `${person.firstName} ${person.lastName}`;
}

// Person nesnesi oluşturuluyor.
let person: Person = {
  firstName: "Alper",
  lastName: "Bilgin",
};

// Tam adı konsola yazdır.
console.log(getFullName(person));

// StringFormat arayüzü, bir dizeyi belirli bir formata göre biçimlendiren bir fonksiyonu tanımlar.
interface StringFormat {
  (str: string, isUpper: boolean): string;
}

// format fonksiyonu tanımlanıyor.
let format: StringFormat = function (str: string, isUpper: boolean): string {
  return isUpper ? str.toUpperCase() : str.toLowerCase();
};

// format fonksiyonunu kullanarak dizeyi biçimlendiriyoruz.
console.log(format("Alper Bilgin", true));
