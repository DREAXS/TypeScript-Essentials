var Circle = /** @class */ (function () {
    function Circle() {
        this.pi++; // Nesne düzeyindeki pi değerini artır
        Circle.pi++; // Sınıf düzeyindeki pi değerini artır
    }
    // Statik metot: dairenin alanını hesaplar
    Circle.hesapla = function (yaricap) {
        return this.pi * yaricap * yaricap; // Alan formülü: π * r²
    };
    Circle.pi = 3.14; // Sınıf düzeyinde pi değeri
    return Circle;
}());
// Yeni Circle nesneleri oluştur
var objem = new Circle();
var objem2 = new Circle();
console.log(objem.pi); // 1 (ilk nesne oluşturulurken 0'dan 1'e çıkar)
console.log(Circle.pi); // 2 (iki nesne oluşturulduğu için 1'den 2'ye çıkar)
// Dairenin alanını hesaplamak için yarıçapı 5 olan bir daire için hesapla metodu çağrılır
console.log(Circle.hesapla(5)); // 78.5 (3.14 * 5 * 5)
