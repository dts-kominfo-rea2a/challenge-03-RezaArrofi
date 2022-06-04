// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (l_belanjaan) => {
  const hasil = [];

  // looping list belanjaan
  for(let index=0; index < l_belanjaan.length; index++){
    // push(tambahkan) data ke array hasil
    hasil.push("- "+ l_belanjaan[index].nama +" x "+ l_belanjaan[index].kuantitas);
  }

  // mengembalikan nilai
  return hasil;
}

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (l_belanjaan) => {
  
  let total = 0;
  for (let index = 0; index < l_belanjaan.length; index++) {
    total += l_belanjaan[index].harga * l_belanjaan[index].kuantitas;
  }

  return total;
}

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
