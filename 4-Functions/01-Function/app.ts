// a sayı b sayı dönüş tipide sayı olacak
function add(a: number, b: number): number {
  return a + b; // a ve b'nin toplamını döndür
}

let toplam = add(10, 20); // add fonksiyonu çağrılarak 10 ve 20'nin toplamı hesaplanıyor

console.log(typeof toplam); // toplamın tipini konsola yazdır

// void varsa return keyword ü yok
function bastir(): void {
  // void dönüş tipi, hiçbir değer döndürmeyecek
  console.log("Typescript!!!"); // "Typescript!!!" mesajını konsola yazdır
  // return 35; // void fonksiyonlarda return ifadesi kullanılmamalı
}

let degisken = bastir(); // bastir fonksiyonu çağrılıyor, dönüş değeri yok
console.log(degisken); // degisken undefined olacak, çünkü bastir fonksiyonu bir değer döndürmüyor

// ad ve soyad string parametreleri alır ve string döner
function birlestir(ad: string, soyad: string): string {
  return ad + " " + soyad; // ad ve soyadı birleştirip döndür
}

let degisken2 = birlestir("Alper", "Bilgin"); // birlestir fonksiyonu çağrılarak "Alper Bilgin" elde ediliyor
console.log(degisken2); // sonucu konsola yazdır

// X değeri default parametre, bir değer gönderilmediğinde X değeri geçerli olacak
function birlestirr(ad: string, soyad: string = "X"): string {
  return ad + " " + soyad; // ad ve soyadı birleştirip döndür
}

let degisken3 = birlestir("A", "B"); // birlestir fonksiyonu çağrılarak "A B" elde ediliyor
console.log(degisken3); // sonucu konsola yazdır
