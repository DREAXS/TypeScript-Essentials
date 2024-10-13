// 1. **Generik Arayüzler**: `Months` arayüzü, iki generik tür parametresi alır: `U` ve `V`, bu da farklı türde anahtar ve değerlerin kullanılmasına olanak tanır.
// 2. **Nesne Oluşturma**: `month` değişkeni, `Months<number, string>` türünde bir nesne örneği oluşturur; burada anahtar olarak bir sayı (1) ve değer olarak bir string ('January') kullanılır.
// 3. **Konsola Yazdırma**: `console.log(month)` ifadesi, oluşturulan ay nesnesini konsola yazdırarak görüntüler.
// 4. **Collection Arayüzü**: `Collection` arayüzü, belirli bir türdeki elemanları eklemek ve çıkarmak için iki metot tanımlar: `add` ve `remove`.
// 5. **List Sınıfı**: `List` sınıfı, `Collection` arayüzünü uygular ve bir dizi eleman içeren bir yapı oluşturur. `items` dizisi, elemanları saklamak için kullanılır.
// 6. **Eleman Ekleme**: `add` metodu, verilen elemanı `items` dizisine ekler ve güncellenmiş diziyi konsola yazdırır.
// 7. **Eleman Çıkarma**: `remove` metodu, verilen elemanı diziden çıkarır; eğer eleman dizide mevcutsa, `splice` metodu ile kaldırılır.
// 8. **Örnek Kullanım**: `list` adında bir `List<number>` nesnesi oluşturulur ve 0'dan 9'a kadar olan sayılar döngü ile bu listeye eklenir.
// Ayların örnek nesnesi
var month = {
    key: 1,
    value: "January",
};
console.log(month);
// List sınıfı, Collection arayüzünü uygular ve bir dizi eleman içerir.
var List = /** @class */ (function () {
    function List() {
        this.items = []; // Elemanları tutan dizi
    }
    // Eleman ekleme metodu
    List.prototype.add = function (o) {
        this.items.push(o);
        console.log(this.items); // Güncellenmiş diziyi konsola yazdır.
    };
    // Eleman çıkarma metodu
    List.prototype.remove = function (o) {
        var index = this.items.indexOf(o); // Elemanın dizideki indeksi
        if (index > -1) {
            this.items.splice(index, 1); // Elemanı diziden çıkar
        }
    };
    return List;
}());
// List nesnesi oluşturuluyor
var list = new List();
// 0'dan 9'a kadar olan sayıları listeye ekle
for (var i = 0; i < 10; i++) {
    list.add(i);
}
