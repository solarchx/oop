// no 1
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  this.showDetails = () => {
    return `Nama saya ${this.firstName} ${this.lastName}, saya berumur ${this.age} tahun`;
  };
}

const fardhan = new Person("Fardhan", "Denggol", 25);
console.log(fardhan.showDetails());

// soal 2
function PersegiPanjang(panjang, lebar) {
  this.panjang = panjang;
  this.lebar = lebar;

  this.luas = () => {
    return `Luasnya adalah ${this.panjang * this.lebar}`;
  };

  this.keliling = () => {
    return `Keliling nya adalah ${2 * (this.panjang + this.lebar)}`;
  };
}

const persegiPanjang = new PersegiPanjang(10, 5);
console.log(persegiPanjang.luas());
console.log(persegiPanjang.keliling());
