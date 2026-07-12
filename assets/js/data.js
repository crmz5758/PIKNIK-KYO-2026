const peserta = [

{
nama:"Agung",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"Transfer",
keterangan:"TF (sudah ditunaikan)"
},

{
nama:"Alma",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"Transfer",
keterangan:"Transfer"
},

{
nama:"Angga",
jumlah:1,
tagihan:150000,
bayar:50000,
metode:"Cash",
keterangan:"Cash"
},

{
nama:"Arif",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"Cash",
keterangan:"Cash + Ambil Tabungan 50.000"
},

{
nama:"Bowo",
jumlah:2,
tagihan:300000,
bayar:300000,
metode:"Cash",
keterangan:"Cash 220.000 + Ambil Tabungan 80.000"
},

{
nama:"Cahyo",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"Cash",
keterangan:"Cash 110.000 + Ambil Tabungan 40.000"
},

{
nama:"Dani",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"Cash",
keterangan:"Cash"
},

{
nama:"Devan",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"Cash",
keterangan:"Cash"
},

{
nama:"Dicky",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"Transfer",
keterangan:"Transfer"
},
    
{
nama:"Dimas",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"Cash",
keterangan:"Cash"
},

{
nama:"Dodo",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"Cash",
keterangan:"Cash"
},

{
nama:"Fachry",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"Cash",
keterangan:"Cash"
},

{
nama:"Falih",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"Cash",
keterangan:"Cash"
},

{
nama:"Farel",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"-",
keterangan:""
},

{
nama:"Febri",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"Transfer",
keterangan:"TF + Ambil Tabungan 110.000"
},

{
nama:"Feli",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"Cash",
keterangan:"Cash"
},

{
nama:"Herwan",
jumlah:2,
tagihan:300000,
bayar:300000,
metode:"Cash",
keterangan:"Cash"
},

{
nama:"Irwan",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"Cash",
keterangan:"Cash"
},

{
nama:"Isma",
jumlah:2,
tagihan:300000,
bayar:300000,
metode:"Cash",
keterangan:"Cash"
},

{
nama:"Khansa",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"Cash",
keterangan:"Cash"
},
{
nama:"L. Widodo",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"Cash",
keterangan:"Cash"
},

{
nama:"Malik",
jumlah:3,
tagihan:450000,
bayar:450000,
metode:"Transfer",
keterangan:"TF"
},

{
nama:"Nanda",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"Transfer",
keterangan:"TF + Ambil Tabungan 20.000"
},

{
nama:"Nurul",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"Transfer",
keterangan:"TF"
},

{
nama:"Okta",
jumlah:4,
tagihan:600000,
bayar:600000,
metode:"Cash",
keterangan:"Cash"
},

{
nama:"Sigit",
jumlah:2,
tagihan:300000,
bayar:0,
metode:"-",
keterangan:""
},

{
nama:"Rini",
jumlah:2,
tagihan:300000,
bayar:300000,
metode:"Transfer",
keterangan:"Transfer"
},

{
nama:"Rizky",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"Transfer",
keterangan:"Transfer"
},
    
{
nama:"Suryanto",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"Cash",
keterangan:"Cash 50.000 + Tabungan 100.000"
},

{
nama:"Tesa",
jumlah:2,
tagihan:300000,
bayar:300000,
metode:"Cash",
keterangan:"Cash 200.000 + Ambil Tabungan 100.000"
},
    
{
nama:"Wawan",
jumlah:3,
tagihan:450000,
bayar:450000,
metode:"Cash",
keterangan:"Cash"
},

{
nama:"Yudi",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"Cash",
keterangan:"Cash"
},

{
nama:"Yusuf",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"Transfer",
keterangan:"Transfer"
},

{
nama:"Yuli",
jumlah:1,
tagihan:150000,
bayar:110000,
metode:"Cash",
keterangan:"Ambil Tabungan 110.000"
},

{
nama:"Zildan",
jumlah:1,
tagihan:150000,
bayar:150000,
metode:"Transfer",
keterangan:"TF"
}

];

const logMasuk = [
    {
        tanggal: "2026-06-27",
        nama: "Agung",
        jumlah: 150000,
        metode: "Transfer",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-06-27",
        nama: "Angga",
        jumlah: 50000,
        metode: "Cash",
        keterangan: "DP"
    },
    {
        tanggal: "2026-06-27",
        nama: "Feli",
        jumlah: 150000,
        metode: "Cash",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-06-27",
        nama: "Tesa",
        jumlah: 300000,
        metode: "Cash",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-06-27",
        nama: "Yudi",
        jumlah: 150000,
        metode: "Cash",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-06-28",
        nama: "Malik",
        jumlah: 450000,
        metode: "Transfer",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-06-29",
        nama: "Herwan",
        jumlah: 300000,
        metode: "Cash",
        keterangan: "Lunas"
    },
    {
        tanggal:"2026-07-02",
        nama:"Febri",
        jumlah:150000,
        metode:"Transfer",
        keterangan:"Lunas"
    },
    {
        tanggal:"2026-07-02",
        nama:"Rini",
        jumlah:350000,
        metode:"Transfer",
        keterangan:"Transfer + Donasi 50.000"
    },
    {
        tanggal:"2026-07-03",
        nama:"Dodo",
        jumlah:150000,
        metode:"Cash",
        keterangan:"Lunas"
    },
    {
        tanggal:"2026-07-03",
        nama:"L. Widodo",
        jumlah:150000,
        metode:"Cash",
        keterangan:"Lunas"
    },
    {
        tanggal: "2026-07-04",
        nama: "Suryanto",
        jumlah: 150000,
        metode: "Cash",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-07-05",
        nama: "Farel",
        jumlah: 150000,
        metode: "Cash",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-07-05",
        nama: "Isma",
        jumlah: 150000,
        metode: "Cash",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-07-05",
        nama: "Fachry",
        jumlah: 150000,
        metode: "Transfer",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-07-08",
        nama: "Arif",
        jumlah: 150000,
        metode: "Cash",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-07-09",
        nama: "Nanda",
        jumlah: 150000,
        metode: "Transfer",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-07-09",
        nama: "Zildan",
        jumlah: 150000,
        metode: "Transfer",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-07-09",
        nama: "Nurul",
        jumlah: 150000,
        metode: "Transfer",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-07-10",
        nama: "Irwan",
        jumlah: 150000,
        metode: "Cash",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-07-11",
        nama: "Wawan",
        jumlah: 450000,
        metode: "Cash",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-07-11",
        nama: "Devan",
        jumlah: 150000,
        metode: "Cash",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-07-11",
        nama: "Dimas",
        jumlah: 150000,
        metode: "Cash",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-07-11",
        nama: "Falih",
        jumlah: 150000,
        metode: "Cash",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-07-11",
        nama: "Dani",
        jumlah: 150000,
        metode: "Cash",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-07-11",
        nama: "Khansa",
        jumlah: 150000,
        metode: "Cash",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-07-11",
        nama: "Okta",
        jumlah: 600000,
        metode: "Cash",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-07-11",
        nama: "Yuli",
        jumlah: 110000,
        metode: "Cash",
        keterangan: "DP"
    },
    {
        tanggal: "2026-07-11",
        nama: "Alma",
        jumlah: 150000,
        metode: "Cash",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-07-11",
        nama: "Dicky",
        jumlah: 150000,
        metode: "Transfer",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-07-12",
        nama: "Bowo",
        jumlah: 300000,
        metode: "Cash",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-07-12",
        nama: "Yusuf",
        jumlah: 150000,
        metode: "Transfer",
        keterangan: "Lunas"
    },
    {
        tanggal: "2026-07-12",
        nama: "Rizky",
        jumlah: 150000,
        metode: "Transfer",
        keterangan: "Lunas"
    },
     {
        tanggal: "2026-07-12",
        nama: "Cahyo",
        jumlah: 150000,
        metode: "Cash",
        keterangan: "Lunas"
    }
];
const logKeluar = [
    {
        tanggal: "2026-07-12",
        jumlah: 4000000,
        keperluan: "Pembayaran Transport Bus"
    },
    {
        tanggal: "2026-07-12",
        jumlah: 1250000,
        keperluan: "Pembayaran Konsumsi Peserta"
    }
];
renderLogMasuk();
renderLogKeluar();

document.getElementById("jumlahLogMasuk").textContent =
`${logMasuk.length} Transaksi`;

document.getElementById("jumlahLogKeluar").textContent =
`${logKeluar.length} Transaksi`;
