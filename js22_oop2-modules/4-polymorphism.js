//* ======================================================
//*        OOP -  Polymorphism(ES6)
//* ======================================================

//* Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller
//* alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir.
//* Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar
//* ile bilinir.

class Book {
  constructor(title, author, year) {
    this.author = author;
    this.title = title;
    this.year = year;

    //? Bu alanda yazilan bir metot butun instance'ların belleginde tek tek yer kaplar.
    this.getTitle = function () {
      return this.title;
    };
  }

  //! Bu kisimda yazilan fonksiyonlar aslinda prototype alaninda bulunur.
  getAge() {
    return new Date().getFullYear() - this.year;
  }
  getSummary() {
    return `${this.title} was writtten by ${this.author} in ${this.year}`;
  }

  setPrice(price) {
    const taxRate = 1.1;
    this.price = Math.trunc(price * taxRate);
  }
}

//? Sub-class tanımlaması (Inheritance)
class Magazine extends Book {
  constructor(title, author, year, month) {
    //! Bookun constructor'ı cağırıldı
    super(title, author, year); //! Book'un prototype kopyalanıyor otomatik
    this.month = month;
  }
  //! Overrided Metot (Parent class'daki bir metodun farkli
  //! fonksiyonellikle  ve ayni parametre listesi ile yeniden tanimlanmasi)
  getSummary() {
    return `${this.title} was writtten by ${this.author} in ${this.year} in ${this.month}`;
  }

  //!Override edilmis bir parent fonksiyonunu kullanmak icin super keyword'u kullanilabilr.
  getSummaryParent() {
    return super.getSummary();
  }
  //! Overloaded Metod ( Aynı metodun farklı parametreler ile kullanılması)
  setPrice(price, taxRate = 1.1) {
    this.price = Math.trunc(price * taxRate);
  }
}

//? Parent
const book1 = new Book("Simyacı", "poelho Coelgo", 1988);
console.log(book1);
book1.setPrice(100);
console.log(book1);

//? Magazine objesinin yeni bir instance'ı
const mag1 = new Magazine("Scientific Research", "Einstein", 1926, "Sep");
console.log(mag1.getSummary());
console.log(mag1.getSummaryParent());

mag1.setPrice(50);
console.log(mag1);

//? JS'de overloading, parent-child class arasinda kullanilir.
//? Ancak diger bir cok dilde ayni metot ayni class icerisinde de farkli paramtreler ile tekrar tekrar yazilabilir.
// //? overloading
// function x(string a, string b) {
//   return a + b;
// }

// //? overloading
// function x(integer a, integer b) {
//   return a + b;
// }

// x(1, 2);
// x("1", "2");
