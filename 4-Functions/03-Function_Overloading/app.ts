// Aşırı yükleme tanımları
function add(a: string, b: string): string; // string parametreleri kabul eden fonksiyon
function add(a: number, b: number): number; // number parametreleri kabul eden fonksiyon

// Gerçek fonksiyon tanımı
function add(a: any, b: any): any {
  return a + b; // a ve b'yi toplar, hangi türde olursa olsun
}

// Fonksiyon çağrıları
let X = add(5, 9); // 5 ve 9'un toplamını al
console.log(X); // 14 yazdırır

let Y = add("Merhaba, ", "Dünya!"); // "Merhaba, Dünya!" döner
console.log(Y); // Merhaba, Dünya! yazdırır
