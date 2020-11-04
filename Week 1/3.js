const printSegitiga = 5

if (typeof printSegitiga == "number" ){
for (i = printSegitiga; i >= 1; i--) {
    let stringNull = "";
    for (j = 1; j <= i; j++){
    stringNull += j
    }
    console.log(stringNull)
}
} else {
    alert("Data harus Number")
}