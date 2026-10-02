const siswa = {
    nama: "Lana",
    kelas:"X2",
    umur: 16,
    alamat:"Begajah rto7 rw02, sukoharjo",
    nomorHP: 62727283282732
};

const siswa2 = {
    nama: "Tatal",
    kelas:"X2",
    umur: 17,
    alamat:{
        kota:"sukoharjo",
        provinsi:"jawa tengah"
    },
    nomorHP: 628863328737
};

const siswa3 = [
    {nama : "Xixi", kelas : "X1", umur: 14, alamat: "semarang", nomorHP:"2673873783"},
    {nama:"Leouux", kelas:"X1", umur:15, alamat:"malang", nomorHP:"267777799"},
    {nama:"Viola", kelas:"X3",umur:12, alamat:"tawangsari", nomorHP:"265554444"},
    {nama:"lili", kelas:"X3", umur:11, alamat:"weru",nomorHP:"263435356"}
];

// siswa3.forEach(s => {
//     console.log(s.nama,s.kelas,s.umur,s.alamat,s.nomorHP)  
// });

console.log("namanya",siswa3[0].nama,"umurnya", siswa3[0].umur)
console.log("namanya",siswa3[1].nama,"umurnya", siswa3[1].umur)
console.log("namanya",siswa3[2].nama,"umurnya", siswa3[2].umur)
console.log("namanya",siswa3[3].nama,"umurnya", siswa3[3].umur)
