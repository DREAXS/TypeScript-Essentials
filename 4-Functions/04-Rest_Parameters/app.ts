// 1. Tanım:
// Rest parametreleri, bir fonksiyonun değişken sayıda argüman almasına olanak tanır.

// 2. Sözdizimi:
// Rest parametreleri, fonksiyon tanımında üç nokta (...) ile gösterilir.
// Örnek: function fonksiyonAdi(param1: type, ...restParams: type[])

// 3. Kullanım:
// Rest parametreleri genellikle diziler olarak işlenir.
// Fonksiyon içinde, bu parametreler bir dizi olarak kullanılabilir.

// 4. Tip Belirtme:
// Rest parametrelerine tip belirtebilirsiniz; bu, tip güvenliğini artırır.
// Örnek: function fonksiyon(...param: string[]): void

// 5. Kısıtlamalar:
// Rest parametreleri sadece bir kez tanımlanabilir.
// Diğer parametrelerden sonra gelmelidir.

// Değişken sayıda sayıyı toplayan fonksiyon
function toplam(a: string, ...numbers: number[]): number {
  console.log(a); // İlk parametreyi konsola yazdır
  let total = 0; // Toplamı tutacak değişken
  numbers.forEach((num) => (total += num)); // Tüm sayıları topla
  return total; // Toplamı döndür
}

console.log(toplam("X", 20, 30));

function birlestir(message: string, ...names: string[]) {
  console.log(message + " " + names.join(", "));
}

// Fonksiyonu çağır
birlestir("A", "B", "C", "D"); // "Merhaba Can, Osman, Tuba"
