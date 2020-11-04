const mtk = parseInt(prompt("Masukan Nilai Matematika : "));
const bahasaIndonesia = parseInt(prompt("Masukan Nilai Bahasa Indonesia : "));
const bahasaInggris = parseInt(prompt("Masukan Nilai Bahasa Inggris : "));
const ipa = parseInt(prompt("Masukan Nilai IPA : "));

let total = mtk + bahasaIndonesia + bahasaInggris + ipa;
let rata2 = total / 4;

if (rata2 > 89){
    alert("Rata-rata = " + rata2)
    alert("Grade = A")
} else if (rata2 > 79) {
    alert("Rata-rata = " + rata2)
    alert("Grade = B")
} else if (rata2 > 69) {
    alert("Rata-rata = " + rata2)
    alert("Grade = C")
} else if (rata2 > 59) {
    alert("Rata-rata = " + rata2)
    alert("Grade = D")
} else if (rata2 <= 59) {
    alert("Rata-rata = " + rata2)
    alert("Grade = E")
} else {
    alert("Nilai tidak boleh kosong dan nilai harus berupa angka")
};