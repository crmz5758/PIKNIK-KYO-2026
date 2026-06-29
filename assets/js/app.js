// ===============================
// FORMAT RUPIAH
// ===============================

const rupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(angka);
};

// ===============================
// HITUNG DATA
// ===============================

const totalPeserta = peserta.length;

const totalTagihan = peserta.reduce((a, b) => a + b.tagihan, 0);

const totalBayar = peserta.reduce((a, b) => a + b.bayar, 0);

const totalKurang = totalTagihan - totalBayar;

const totalLunas = peserta.filter(x => x.bayar >= x.tagihan).length;

const progress = Math.round((totalBayar / totalTagihan) * 100);

const totalBelum = totalPeserta - totalLunas;

// ===============================
// CARD STATISTIK
// ===============================

document.getElementById("statistik").innerHTML = `
<div class="bg-white rounded-2xl shadow p-5">
    <div class="text-3xl md:text-4xl mb-2">👥</div>
    <div class="text-slate-500">Peserta</div>
    <div class="text-2xl md:text-3xl font-bold">${totalPeserta}</div>
</div>

<div class="bg-white rounded-2xl shadow p-5">
    <div class="text-3xl md:text-4xl mb-2">💰</div>
    <div class="text-slate-500">Total Dana</div>
    <div class="text-lg md:text-2xl font-bold text-green-600 break-all leading-tight">
        ${rupiah(totalBayar)}
    </div>
</div>

<div class="bg-white rounded-2xl shadow p-5">
    <div class="text-3xl md:text-4xl mb-2">❌</div>
    <div class="text-slate-500">Belum Lunas</div>

<div class="text-2xl md:text-3xl font-bold text-amber-500">
    ${totalBelum}
</div>

<div class="text-sm text-slate-500">
    Orang
</div>
</div>

<div class="bg-white rounded-2xl shadow p-5">
    <div class="text-3xl md:text-4xl mb-2">✅</div>
    <div class="text-slate-500">Sudah Lunas</div>
    <div class="text-2xl md:text-3xl font-bold">
        ${totalLunas}
    </div>
</div>
`;

// ===============================
// PROGRESS
// ===============================

document.getElementById("progressBar").style.width = progress + "%";

document.getElementById("progressText").innerHTML =
`${progress}% (${rupiah(totalBayar)} / ${rupiah(totalTagihan)})`;

document.getElementById("targetDana").innerHTML =
rupiah(totalTagihan);

document.getElementById("danaMasuk").innerHTML =
rupiah(totalBayar);

document.getElementById("sisaDana").innerHTML =
rupiah(totalKurang);

document.getElementById("persentaseDana").innerHTML =
progress + "%";

// ===============================
// TABEL
// ===============================

const tbody = document.getElementById("tableData");

function renderTable(data){

    tbody.innerHTML = "";

    data.forEach(item=>{

        const kurang = item.tagihan - item.bayar;

        const status =
            kurang <= 0
            ? `<span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Lunas</span>`
            : `<span class="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">Belum</span>`;

        tbody.innerHTML += `
        <tr
class="border-b hover:bg-slate-50 cursor-pointer"
onclick="detail('${item.nama}')">

            <td class="p-3 font-semibold">
                ${item.nama}
            </td>

            <td class="text-center">
                ${item.jumlah}
            </td>

            <td class="text-center">
                ${rupiah(item.bayar)}
            </td>

            <td class="text-center text-red-600">
                ${rupiah(kurang)}
            </td>

            <td class="text-center">
                ${status}
            </td>

        </tr>
        `;
    });

}

renderTable(peserta);
// ===============================
// SEARCH
// ===============================

const search = document.getElementById("search");

search.addEventListener("keyup", () => {

    const keyword = search.value.toLowerCase();

    const hasil = peserta.filter(item =>
        item.nama.toLowerCase().includes(keyword)
    );

    renderTable(hasil);

});

// ===============================
// FILTER
// ===============================

const filter = document.getElementById("filter");

filter.addEventListener("change", () => {

    const value = filter.value;

    let hasil = peserta;

    switch (value) {

        case "lunas":
            hasil = peserta.filter(x => x.bayar >= x.tagihan);
            break;

        case "belum":
            hasil = peserta.filter(x => x.bayar < x.tagihan);
            break;

        case "cash":
            hasil = peserta.filter(x => x.metode === "Cash");
            break;

        case "tf":
            hasil = peserta.filter(x => x.metode === "Transfer");
            break;

        default:
            hasil = peserta;
    }

    renderTable(hasil);

});
// ===============================
// DARK MODE
// ===============================

const body = document.body;
const btnDark = document.getElementById("darkMode");

if (localStorage.getItem("theme") === "dark") {

    body.classList.remove("bg-slate-100");
    body.classList.add("bg-slate-900");

}

btnDark.onclick = () => {

    body.classList.toggle("bg-slate-900");
    body.classList.toggle("bg-slate-100");

    if (body.classList.contains("bg-slate-900")) {

        localStorage.setItem("theme", "dark");
        btnDark.innerHTML = "☀️";

    } else {

        localStorage.setItem("theme", "light");
        btnDark.innerHTML = "🌙";

    }

};
// =====================
// DETAIL
// =====================
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
function detail(nama){

    const p = peserta.find(x=>x.nama===nama);

    document.getElementById("modalBody").innerHTML=`

        <div class="space-y-3">

            <p><b>Nama</b><br>${p.nama}</p>

            <p><b>Jumlah Orang</b><br>${p.jumlah}</p>

            <p><b>Tagihan</b><br>${rupiah(p.tagihan)}</p>

            <p><b>Sudah Bayar</b><br>${rupiah(p.bayar)}</p>

            <p><b>Sisa</b><br>${rupiah(p.tagihan-p.bayar)}</p>

            <p><b>Metode</b><br>${p.metode}</p>

        </div>

    `;

    modal.classList.remove("hidden");

}

closeModal.onclick=()=>{

    modal.classList.add("hidden");

}

// =====================
// PRINT
// =====================
const btnPrint = document.getElementById("btnPrint");
const btnTop = document.getElementById("btnTop");
btnPrint.onclick=()=>{

    window.print();

}

// =====================
// BACK TO TOP
// =====================

btnTop.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
document.getElementById("lastUpdate").innerHTML =
new Date().toLocaleDateString("id-ID",{
    dateStyle:"full"
});

// ===============================
// LOG UANG MASUK
// ===============================

function renderLogMasuk() {

    const tbody = document.getElementById("logMasukTable");

    tbody.innerHTML = "";

    [...logMasuk].reverse().forEach(item => {

        const badge =
            item.metode === "Transfer"
            ? `<span class="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-semibold">Transfer</span>`
            : `<span class="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700 font-semibold">Cash</span>`;

        tbody.innerHTML += `
        <tr class="border-b hover:bg-slate-50 transition">

    <td class="px-4 py-3 text-center whitespace-nowrap">
        ${item.tanggal}
    </td>

    <td class="px-4 py-3 text-center font-medium">
        ${item.nama}
    </td>

    <td class="px-4 py-3 text-center text-green-600 font-bold">
        ${rupiah(item.jumlah)}
    </td>

    <td class="px-4 py-3 text-center">
        ${badge}
    </td>

    <td class="px-4 py-3 text-center">
        ${item.keterangan}
    </td>

</tr>
        `;

    });

}

// ===============================
// LOG UANG KELUAR
// ===============================
function renderLogKeluar() {

    const tbody = document.getElementById("logKeluarTable");

    tbody.innerHTML = "";

    [...logKeluar].reverse().forEach(item => {

        tbody.innerHTML += `
        <tr class="border-b hover:bg-slate-50 transition">

    <td class="px-4 py-3 text-center">
        ${item.tanggal}
    </td>

    <td class="px-4 py-3 text-center text-red-600 font-bold">
        ${rupiah(item.jumlah)}
    </td>

    <td class="px-4 py-3 text-center">
        ${item.keperluan}
    </td>

</tr>
        `;

    });

}
renderLogMasuk();
renderLogKeluar();

document.getElementById("jumlahLogMasuk").textContent =
`${logMasuk.length} Transaksi`;

document.getElementById("jumlahLogKeluar").textContent =
`${logKeluar.length} Transaksi`;
