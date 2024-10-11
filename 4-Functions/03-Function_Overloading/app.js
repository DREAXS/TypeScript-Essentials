// Gerçek fonksiyon tanımı
function add(a, b) {
    return a + b; // a ve b'yi toplar, hangi türde olursa olsun
}
// Fonksiyon çağrıları
var X = add(5, 9); // 5 ve 9'un toplamını al
console.log(X); // 14 yazdırır
var Y = add("Merhaba, ", "Dünya!"); // "Merhaba, Dünya!" döner
console.log(Y); // Merhaba, Dünya! yazdırır
