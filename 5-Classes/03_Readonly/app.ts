class Person {
  // readonly: Sadece sınıf içinde değeri atanabilir, dışarıdan değiştirilemez.
  readonly id: number;
  firstName: string; // Dışarıdan erişilebilir ve değiştirilebilir.
  lastName: string; // Dışarıdan erişilebilir ve değiştirilebilir.

  // Yapıcı metot: yeni bir Person nesnesi oluşturur.
  constructor(id: number, firstName: string, lastName: string) {
    this.id = id; // Kimlik numarasını ayarla (readonly)
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const kisibilgim = new Person(0, "Alper", "Bilgin");

// kisibilgim.id = 5; // Bu satır hata verecek, çünkü id readonly.

// Kimlik numarasını konsola yazdır
console.log(kisibilgim.id); // 0
