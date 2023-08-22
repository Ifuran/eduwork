// Destructuring Array
const olahraga = ["Basket", "Volly", "Takraw", "Bisbol", "Tenis Meja", "Berenang"];

const [a, b, c, ...all] = olahraga;

console.log(olahraga);

// Destructring Object
const laptop = {
  merek: "ACER",
  processor: "AMD",
  harga: {
    normal: 5000000,
    spesial: 4500000,
  },
  ram: 4,
  warna: "biru",
};

const {
  merek,
  processor: cpu, //inisial
  harga: { spesial },
  fungsi = "Coding", //default value
  ...detail
} = laptop;

console.log(merek, cpu, spesial, fungsi, detail);

// Destructuring Function
function infoLaptop({
  merek,
  warna,
  harga: hrg, //inisial
  fungsi = "Animation", //default value
}) {
  console.log({
    hrg,
    warna,
    merek,
    fungsi,
  });
}

infoLaptop(laptop);
