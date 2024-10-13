// 1. **Stack Sınıfı**: `Stack` sınıfı, generik bir yığın (stack) yapısını temsil eder ve herhangi bir türde eleman içerebilir.
// 2. **Özel Eleman Dizisi**: `private elements: T[] = []` ifadesi, yığındaki elemanları saklamak için özel bir dizi oluşturur.
// 3. **Yapıcı Metod**: `constructor(private size: number)` ifadesi, yığının maksimum boyutunu belirler ve bu değeri `size` değişkenine atar.
// 4. **Boş Kontrolü**: `isEmpty()` metodu, yığının boş olup olmadığını kontrol eder; eleman sayısı sıfırsa `true`, aksi takdirde `false` döner.
// 5. **Dolu Kontrolü**: `isFull()` metodu, yığının dolu olup olmadığını kontrol eder; eleman sayısı maksimum boyuta eşitse `true`, aksi takdirde `false` döner.
// 6. **Eleman Ekleme**: `push(element: T)` metodu, yığına yeni bir eleman ekler; eğer yığın doluysa bir hata fırlatır.
// 7. **Eleman Çıkarma**: `pop(): T` metodu, yığından en üstteki elemanı çıkarır; eğer yığın boşsa bir hata fırlatır ve aksi takdirde en üstteki elemanı döndürür.
// 8. **Rastgele Sayı Üretimi**: `randBetween(low: number, high: number)` fonksiyonu, verilen aralıkta rastgele bir tam sayı döndürür.
// 9. **Yığın Oluşturma**: `let numbers = new Stack<number>(5)` ifadesi, 5 eleman kapasiteli bir `Stack` nesnesi oluşturur.
// 10. **Eleman Ekleme Döngüsü**: `while (!numbers.isFull())` döngüsü, yığın dolu olmadığı sürece 1 ile 10 arasında rastgele sayılar üreterek bu sayıları yığına ekler.
// 11. **Eleman Çıkarma Döngüsü**: `while (!numbers.isEmpty())` döngüsü, yığın boş olmadığı sürece yığından en üstteki elemanları çıkarır ve bu elemanları konsola yazdırır.

// Stack sınıfı, generik bir yığın (stack) yapısı tanımlar.
class Stack<T> {
  private elements: T[] = []; // Yığındaki elemanları tutan dizi

  constructor(private size: number) {
    // Yığının maksimum boyutu
  }

  // Yığının boş olup olmadığını kontrol eder.
  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  // Yığının dolu olup olmadığını kontrol eder.
  isFull(): boolean {
    return this.elements.length === this.size;
  }

  // Yığına yeni bir eleman ekler.
  push(element: T): void {
    if (this.isFull()) {
      throw new Error("The stack is overflow!"); // Yığın doluysa hata fırlatır.
    }
    this.elements.push(element);
  }

  // Yığından en üstteki elemanı çıkarır.
  pop(): T {
    if (this.isEmpty()) {
      throw new Error("The stack is empty!"); // Yığın boşsa hata fırlatır.
    }
    return this.elements.pop()!; // En üstteki elemanı döndürür.
  }
}

// Belirli bir aralıkta rastgele bir sayı döndüren fonksiyon
function randBetween(low: number, high: number): number {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

// 5 eleman kapasiteli bir Stack oluşturuluyor.
let numbers = new Stack<number>(5);

// Yığının dolu olmadığı sürece rastgele sayılar ekleniyor.
while (!numbers.isFull()) {
  let n = randBetween(1, 10);
  console.log(`Push ${n} into the stack.`);
  numbers.push(n); // Yığına sayı ekle
}

// Yığının boş olmadığı sürece elemanlar çıkarılıyor.
while (!numbers.isEmpty()) {
  let n = numbers.pop();
  console.log(`Pop ${n} from the stack.`); // Yığından eleman çıkar
}
