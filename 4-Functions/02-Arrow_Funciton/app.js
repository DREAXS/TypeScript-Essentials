// Üçüncü parametre isteğe bağlı olan carpim fonksiyonu
function carpim(a, b, c) {
    // c'nin tipini konsola yazdır "undefined"
    console.log(typeof c);
    if (typeof c !== "undefined") {
        // eğer c tanımlıysa
        return a * b * c;
    }
    return a * b; // c tanımlı değilse, sadece a ve b'nin çarpımını döndür
}
// carpim fonksiyonunu 5 ve 10 ile çağır
var toplam1 = carpim(5, 10);
console.log(toplam1);
// İki parametre alan ve çarpma işlemi yapan arrow fonksiyonu
var carpim2 = function (a, b) {
    return a * b;
};
// Kısa yazım şekli: arrow fonksiyon ile tek satırda tanımlama
// let carpim2 = (a: number, b: number): number => a * b;
var toplam2 = carpim2(4, 5); // carpim fonksiyonunu 4 ve 5 ile çağır
console.log(toplam2);
// Arrow fonksiyonu tanımlama
var yazdir = function () {
    console.log("Typescript"); // "Typescript" mesajını konsola yazdır
};
// bastir fonksiyonunu çağır
yazdir();
var kisiler = [
    { isim: "Ali", yas: 30 },
    { isim: "Ayşe", yas: 25 },
];
var isimler = kisiler.map(function (kisi) { return kisi.isim; });
console.log(isimler); // ["Ali", "Ayşe"]
var kareveKenarUzunlugu = function (kenar) {
    return {
        kare: kenar * kenar,
        cevre: 4 * kenar,
    };
};
var sonuc = kareveKenarUzunlugu(5);
console.log(sonuc); // { kare: 25, cevre: 20 }
