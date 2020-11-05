let str = "Saya Belajar Javacsript";
let strToArray = str.split(" "); // [ "Saya", "Belajar", "Javacsript" ]
let array = [];
for (let i = strToArray.length - 1; i >= 0; i--){
    array.push(strToArray[i]); // ["Javascript", "Belajar",  "Saya"]
}
console.log(array.join(" "));
