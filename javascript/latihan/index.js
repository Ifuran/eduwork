// Berlatih menggunakan conditional variabel
// Berlatih menggunakan map dan filter
// Contoh kasus bebas
// Variabel conditional
const jk = "pria";
const keterangan = jk == "pria" ? "Ganteng" : "Cantik";
/* console.log(keterangan); */

// jika true maka return
const kondisiAnd = jk == "pria" && "Hello brother!";
// jika false maka return
const kondisiOr = jk == "wanita" || "Halo mbak!";

/* console.log(kondisiAnd);
console.log(kondisiOr); */

const laptop = [
  {
    merek: "ACER",
    harga: 5000000,
  },
  {
    merek: "HP",
    harga: 4000000,
  },
  {
    merek: "ASUS",
    harga: 4500000,
  },
];

// manipulasi data array
// method MAP
const listLaptop = laptop.map((item) => "Laptop " + item.merek);
console.log(listLaptop);

// method filter
const hrgMinim = laptop.filter((item) => item.harga < 4900000);
console.log("Merek sesuai harga pilihan: " + hrgMinim.map((item) => item.merek));
