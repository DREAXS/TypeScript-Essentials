// Üçüncü parametre isteğe bağlı olan carpim fonksiyonu
function carpim(a: number, b: number, c?: number) {
  // c'nin tipini konsola yazdır "undefined"
  console.log(typeof c);
  if (typeof c !== "undefined") {
    // eğer c tanımlıysa
    return a * b * c;
  }

  return a * b; // c tanımlı değilse, sadece a ve b'nin çarpımını döndür
}

// carpim fonksiyonunu 5 ve 10 ile çağır
let toplam1 = carpim(5, 10);
console.log(toplam1);

// İki parametre alan ve çarpma işlemi yapan arrow fonksiyonu
let carpim2 = (a: number, b: number): number => {
  return a * b;
};

// Kısa yazım şekli: arrow fonksiyon ile tek satırda tanımlama
// let carpim2 = (a: number, b: number): number => a * b;

let toplam2 = carpim2(4, 5); // carpim fonksiyonunu 4 ve 5 ile çağır
console.log(toplam2);

// Arrow fonksiyonu tanımlama
let yazdir = (): void => {
  console.log("Typescript"); // "Typescript" mesajını konsola yazdır
};

// bastir fonksiyonunu çağır
yazdir();

interface Kisi {
  isim: string;
  yas: number;
}

let kisiler: Kisi[] = [
  { isim: "Ali", yas: 30 },
  { isim: "Ayşe", yas: 25 },
];

let isimler = kisiler.map((kisi) => kisi.isim);
console.log(isimler); // ["Ali", "Ayşe"]

let kareveKenarUzunlugu = (kenar: number): { kare: number; cevre: number } => {
  return {
    kare: kenar * kenar,
    cevre: 4 * kenar,
  };
};

let sonuc = kareveKenarUzunlugu(5);
console.log(sonuc); // { kare: 25, cevre: 20 }
