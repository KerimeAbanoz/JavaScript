//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve metotlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//? Eger nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! Encapsulation OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation private degiskenler ve private metotlar yardimiyla yapilir.
//! ES6 ve sornasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenler dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disirasindan da eriselemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebilir.

class Book {
  //! private değişken ( property) tanımlaması
  #id;

  //!static property tanımlaması
  static counter = 0;
  constructor(title, author, year) {
    this.author = author;
    this.title = title;
    this.year = year;

    //? Private property
    this.#id = 44;
    this.getTitle = function () {
      return this.title;
    };

    //* static değişkenin değerini değiştirdik
    Book.counter++ // Classname.propertyName
  }

  //? Class içerisinde public metodlar yardımıyla private değişkenler okunabilir.
  //? bu tip metodlara "getter metod" denilir.
  //! getter metodları class içerisinde tanımlanmalıdır.
  getId() {
    return this.#id;
  }

  //? Class içerisinde public metodlar yardımıyla private değişkenlere yazılabilir.
  //? bu tip metodlara "setter metod" denilir.
  //! setter metodları class içerisinde tanımlanmalıdır.
  setId(id) {
    this.#id = id;
  }
  getSummary() {
    return `${this.title} was writtten by ${this.author} in ${this.year} its age is${ this.#computeAge()}`;
  }
  //! Private metod tanımlanması
  #computeAge(){
    return new Date().getFullYear() - this.year;
  }
    //? static method
    static compareAge(b1, b2) {
      return `Books age difference: ${b1.year - b2.year}`;
    }
}

const book1 = new Book("Simyacı", "poelho Coelgo", 1988);

console.log(book1.title);

//? private bir değişkenin değeri class dışarısından doğrudan okunamaz
// console.log(book1.#id);

//? private bir değişkenin değeri class dışarısından doğrudan değiştirilemez
// book1.#id = "11111";

//! Private field '#id' must be declared in an enclosing class (at 5-static-private.js:42:18)
//? Private değişkeni okuma
console.log(book1.getId());

//? Private değişkene değer atama
book1.setId("00000")
console.log(book1.getId());

//! Private metodlar class dışarısından erişilemezler ancak class içerisindeli bir metoddan erişilebilir
// console.log(book1.#computeAge()); 

console.log(book1.getSummary());

const book2 = new Book("ABC", "ali vei", 1988);
const book3 = new Book("XYZ", "ahmet can", 1988);
const book4 = new Book("XYZ", "ahmet can", 1920);

//! Static degiskenlere sadece class uzerinden erisilebilir
console.log(Book.counter);

//! instance'lar üzerinden static degiskenlere erilemez.
console.log(book1.counter);

//? Static metot cagrilmasi
console.log(Book.compareAge(book2, book4));