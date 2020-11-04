let str = "Saya Belajar Javacsript";
let strToArray = str.split(" ")
let stringNull = "";
for (let i = strToArray.length - 1; i >= 0; i--){
    stringNull += strToArray[i]
}
console.log(stringNull)