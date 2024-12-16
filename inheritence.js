class Book {
  #title;
  constructor(author, year) {
    this.author = author;
    this.year = year;
  }

  set setTitle(title) {
    if (title.length < 0 || title == "") {
      return "Judul harus diisi";
    } else {
      this.#title = title;
    }
  }

  get getTitle() {
    return this.#title;
  }

  bookDetails(harga) {
    return {
      title: this.#title,
      author: this.author,
      year: this.year,
      harga: harga,
    };
  }
}

class EBook extends Book {
  constructor(author, year) {
    super(author, year);
  }

  tampilkanDetail(harga) {
    return super.bookDetails(harga);
  }
}

const buku1 = new EBook("J.K. Rowling", 1997);
buku1.setTitle = "denggol";
console.log(buku1.tampilkanDetail(20000));

class Employee {
  #nama;
  #gaji;
  constructor() {
    this.gajji = this.#gaji;
    this.nama = this.#nama;
  }

  hitungGajiTahunan(gaji) {
    return gaji * 12;
  }
}

class Manager extends Employee {
  constructor(departemen) {
    super();
    this.nama;
    this.gaji;
    this.departemen = departemen;
  }

  set setNama(nama) {
    if (nama.length < 0 || nama == "") {
      return "Nama harus diisi";
    } else if (typeof nama !== "string") {
      return "Tipe data harus string";
    } else {
      this.nama = nama;
    }
  }

  set setGaji(gaji) {
    if (gaji < 0) {
      return "Gaji harus lebih dari 0";
    } else {
      this.gaji = gaji;
    }
  }
  get getNama() {
    return this.nama;
  }

  get getGaji() {
    return this.gaji;
  }

  hitungGajiTahunan() {
    return {
      nama: this.nama,
      gaji:
        super.hitungGajiTahunan(this.gaji) +
        super.hitungGajiTahunan(this.gaji) * 0.1 * 12,
      bonus: super.hitungGajiTahunan(this.gaji) * 0.1,
      total: super.hitungGajiTahunan(this.gaji),
      gaji_bulanan: super.hitungGajiTahunan(this.gaji) / 12,
      gaji_tahunan: super.hitungGajiTahunan(this.gaji),
    };
  }

  detail() {
    return {
      gaji_pegawai_bulanan: super.hitungGajiTahunan(this.gaji) / 12,
      Manager: this.namaManager,
      departemen: this.departemen,
      gaji_tahunan_manager: this.hitungGajiTahunan(this.gajiManager),
      bonus: this.gajiManager * 0.1,
      total_gaji_bulanan_manager:
        super.hitungGajiTahunan(this.gajiManager) +
        super.hitungGajiTahunan(this.gajiManager) * 0.1,
      gaji_tahunan_manager:
        (super.hitungGajiTahunan(this.gajiManager) +
          super.hitungGajiTahunan(this.gajiManager) * 0.1) *
        12,
    };
  }
}

const asep = new Manager("HRD");
asep.setNama = "asep";
asep.setGaji = 500000;
const denggol = new Manager("HRD");

console.log(asep.hitungGajiTahunan());
console.log(denggol.hitungGajiTahunan());

// console.log(asep.detail());
// console.log(denggol.detail());

class Product {
  constructor(idProduct) {
    this.idProduct = idProduct;
    this.name;
    this.price;
  }

  set setName(name) {
    if (name.length < 0 || name == "") {
      return "Nama harus diisi";
    } else if (typeof name !== "string") {
      return "Tipe data harus string";
    } else {
      this.name = name;
    }
  }

  set setPrice(price) {
    if (price < 0) {
      return "Harga harus lebih dari 0";
    } else {
      this.price = price;
    }
  }

  totaHarga(qty) {
    return qty * this.price;
  }
}

class ElectronicProduct extends Product {
  constructor(idProduct, masaGaransi) {
    super(idProduct);
    this.name;
    this.price;
    this.masaGaransi = masaGaransi;
  }

  detailProduk(qty) {
    return {
      id: this.idProduct,
      nama: this.name,
      masaGaransi: this.masaGaransi,
      price: this.price,
      qty: qty,
      totaHarga: qty * this.price + this.masaGaransi,
    };
  }
}

const kipas = new ElectronicProduct(1, 1);
kipas.setName = "Kipas Angin";
kipas.setPrice = 100000;

console.log(kipas.detailProduk(20));

const allBankAccount = [];

class BankAccount {
  #namaNasabah;
  constructor(nomorRekening, saldo) {
    this.nomorRekening = nomorRekening;
    this.saldo = saldo;
  }

  set setNamaNasabah(nama) {
    const cek = allBankAccount.find((e) => e === nama);

    if (cek) {
      return "Nama sudah ada";
    } else {
      this.#namaNasabah = nama;
      allBankAccount.push(nama);
    }
  }

  get getNamaNasabah() {
    return this.#namaNasabah;
  }

  menyetor(uang) {
    return (this.saldo = this.saldo + uang);
  }

  menarik(uang) {
    return (this.saldo = this.saldo - uang);
  }

  mentransferUang(noRekening, uang) {
    if (uang > this.saldo) {
      return "saldo kurang";
    } else {
      noRekening.saldo = noRekening.saldo + uang;
      this.saldo = this.saldo - uang;
    }
  }
}

const rekening1 = new BankAccount(123, 1000000);
const rekening2 = new BankAccount(1234, 2000000);

rekening1.setNamaNasabah = "fardhan";
rekening2.setNamaNasabah = "fardhan";
console.log(rekening1.getNamaNasabah);
console.log(rekening2.getNamaNasabah);

rekening1.menyetor(500000);
console.log(rekening1.saldo);

rekening1.menarik(1000000);
console.log(rekening1.saldo);

console.log(rekening2.mentransferUang(rekening1, 1000000));
console.log(rekening1.saldo);
console.log(rekening2.saldo);

console.log(allBankAccount);
