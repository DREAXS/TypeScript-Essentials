class Circle {
  static pi: number = 3.14; // Sınıf düzeyinde pi değeri
  pi: number; // Nesne düzeyinde pi değeri

  constructor() {
    this.pi++; // Nesne düzeyindeki pi değerini artır
    Circle.pi++; // Sınıf düzeyindeki pi değerini artır
  }

  // Statik metot: dairenin alanını hesaplar
  static hesapla(yaricap: number): number {
    return this.pi * yaricap * yaricap; // Alan formülü: π * r²
  }
}

// Yeni Circle nesneleri oluştur
let objem = new Circle();
let objem2 = new Circle();

console.log(objem.pi); // 1 (ilk nesne oluşturulurken 0'dan 1'e çıkar)

console.log(Circle.pi); // 2 (iki nesne oluşturulduğu için 1'den 2'ye çıkar)

// Dairenin alanını hesaplamak için yarıçapı 5 olan bir daire için hesapla metodu çağrılır
console.log(Circle.hesapla(5)); // 78.5 (3.14 * 5 * 5)
