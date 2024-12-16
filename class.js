class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  showDetails() {
    return `Nama saya ${this.firstName} ${this.lastName}, saya berumur ${this.age} tahun`;
  }
}

const ranggo = new Person("Ranggo", "Denggol", 25);
const apay = new Person("Apay", "Buras", 20);

console.log(ranggo.showDetails());
console.log(apay.showDetails());

class PersegiPanjang {
  #panjang;
  #lebar;

  constructor() {}

  set setLebar(lebar) {
    if (lebar < 0) {
      return "lebar harus lebih dari 0";
    } else {
      return (this.#lebar = lebar);
    }
  }

  set setPanjang(panjang) {
    if (panjang < 0) {
      return "panjang harus lebih dari 0";
    } else {
      return (this.#panjang = panjang);
    }
  }

  get getPanjang() {
    return this.#panjang;
  }

  get getLebar() {
    return this.#lebar;
  }

  luas() {
    return this.#panjang * this.#lebar;
  }

  keliling() {
    return 2 * (this.#panjang + this.#lebar);
  }
}

const soal1 = new PersegiPanjang();
const soal2 = new PersegiPanjang();

soal1.setPanjang = 11;
soal2.setPanjang = -1;
soal1.setLebar = 10;
soal2.setLebar = 10;

console.log(soal1.getPanjang);
console.log(soal1.getLebar);

console.log(soal1.luas());
console.log(soal1.keliling());

console.log(soal2.luas());
console.log(soal2.keliling());

const allRekening = [];
class RekeningBank {
  #noRekening;
  constructor(saldo) {
    this.saldo = saldo;
  }

  set setNoRekening(no) {
    const cek = allRekening.find((e) => e === no);
    if (cek) {
      return "rekening sudah ada";
    } else {
      this.#noRekening = no;
      allRekening.push(no);
    }
  }

  get getNoRekening() {
    return this.#noRekening;
  }

  setorUang(uang) {
    return (this.saldo = this.saldo + uang);
  }

  tarikUang(uang) {
    return (this.saldo = this.saldo - uang);
  }
}

const rekening1 = new RekeningBank(1000000);
console.log(rekening1.setorUang(500000));
console.log(rekening1.tarikUang(1000000));
rekening1.setNoRekening = 123;
console.log(rekening1.getNoRekening);

const rekening2 = new RekeningBank(600000);
console.log(rekening2.setorUang(500000));
console.log(rekening2.tarikUang(1000000));
rekening2.setNoRekening = 1234;
console.log(rekening2.getNoRekening);

const rekening3 = new RekeningBank(3500000);
console.log(rekening3.setorUang(500000));
console.log(rekening3.tarikUang(1000000));

console.log(allRekening);

class Bank {
  #kantorCabang = [];
  constructor(namaBank) {
    this.namaBank = namaBank;
  }

  set setKantorCabang(kantor) {
    const cek = this.#kantorCabang.find((e) => e === kantor);

    if (cek) {
      return "rekening sudah ada";
    } else {
      this.#kantorCabang.push(kantor);
    }
  }

  tambahKantorCabang(kantor) {
    this.setKantorCabang = kantor;
  }

  hapusKantorCabang() {
    return this.#kantorCabang.pop();
  }

  tampilkanCabang() {
    return this.#kantorCabang;
  }
}

const bank1 = new Bank("mandiri");

console.log(bank1.tambahKantorCabang("cirebon"));
console.log(bank1.tambahKantorCabang("cirebon"));
console.log(bank1.tambahKantorCabang("ngga tau"));
// console.log(bank1.hapusKantorCabang());

console.log(bank1.tampilkanCabang());
