var tanggal = 29;
var bulan = 7;
var tahun = 2019;

if (tanggal < 32 && tanggal > 0 && tahun < 2201 && tahun >1899) {
switch(bulan) {
    case 1: console.log(tanggal + " Januari " + tahun);
    break;
    case 2: console.log(tanggal + " Februari " + tahun);
    break;
    case 3: console.log(tanggal + " Maret " + tahun);
    break;
    case 4: console.log(tanggal + " April " + tahun);
    break;
    case 5: console.log(tanggal + " Mei " + tahun);
    break;
    case 6: console.log(tanggal + " Juni " + tahun);
    break;
    case 7: console.log(tanggal + " Juli " + tahun);
    break;
    case 8: console.log(tanggal + " Agustus " + tahun);
    break;
    case 9: console.log(tanggal + " September " + tahun);
    break;
    case 10: console.log(tanggal + " Oktober " + tahun);
    break;
    case 11: console.log(tanggal + " November " + tahun);
    break;
    case 12: console.log(tanggal + " Desember " + tahun);
    break;
    default: console.log("Bulan tidak valid");
    break;
    }
} else {
    console.log("Tanggal dan Tahun anda tidak valid");
}
