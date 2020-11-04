function seleksiNilai (nilaiAwal, nilaiAkhir, dataArray) {
    if (dataArray.length < 5) {
        console.log("Jumlah angka dalam dataArray tidak ada")
    } else if (nilaiAwal >= nilaiAkhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    } else if (nilaiAwal < nilaiAkhir){
        let filterArray = dataArray.filter(item => item > nilaiAwal && item < nilaiAkhir);
        let sortArray = filterArray.sort((a, b) => a - b)
        console.log(sortArray)
    }
}
seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])