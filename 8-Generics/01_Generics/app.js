// 1. Tanım: Generics, belirli bir tür belirtmeden fonksiyonlar ve sınıflar oluşturmanıza olanak tanır.
// 2. Tür Parametreleri: Generics, fonksiyon ve sınıflara tür parametreleri ekleyerek esneklik sağlar.
// 3. Kullanım: Tür parametreleri, genellikle `<T>` gibi bir sözdizimi ile tanımlanır.
// 4. Örnek: `function identity<T>(arg: T): T { return arg; }` şeklinde bir fonksiyon tanımlanabilir.
// 5. Esneklik: Generics, farklı türlerde verilerle çalışmayı kolaylaştırır ve kod tekrarını azaltır.
// 6. Sınıflar: Sınıflar da generics kullanabilir; örneğin, `class Box<T> { contents: T; }` ile tanımlanabilir.
// 7. Arayüzler: Generics, arayüzlerde de kullanılabilir; `interface Pair<K, V> { key: K; value: V; }` gibi.
// 8. Kısıtlama: Tür parametreleri belirli türlerle kısıtlanabilir; `function log<T extends { name: string }>(arg: T) { console.log(arg.name); }` gibi.
// 9. Çoklu Türler: Birden fazla tür parametresi kullanılabilir; `function combine<K, V>(key: K, value: V): [K, V] { return [key, value]; }` gibi.
// 10. Kullanım Alanları: Generics, koleksiyonlar, API yanıtları ve bileşenlerde yaygın olarak kullanılır.
// Rastgele bir sayı döndüren fonksiyon
function getRandomNumber(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
// Örnek sayı dizisi
var numbers = [1, 54, 65, 7, 8];
// console.log(getRandomNumber(numbers)); // Rastgele sayı
// Rastgele bir string döndüren fonksiyon
function getRandomString(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
// Örnek string dizisi
var adlarim = ["X", "Y", "Z"];
// console.log(getRandomString(adlarim)); // Rastgele string
// Genel bir rastgele eleman döndüren fonksiyon
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
// Örnek boolean dizisi
var degiskenlerim = [true, false, true];
// Rastgele elemanları konsola yazdır
console.log(getRandomElement(numbers)); // Rastgele sayı
console.log(getRandomElement(adlarim)); // Rastgele string
console.log(getRandomElement(degiskenlerim)); // Rastgele boolean
