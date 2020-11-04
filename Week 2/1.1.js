/* 1. charAt()
    Metode charAt () mengembalikan karakter pada indeks yang ditentukan dalam sebuah string.
    Sintaks : string.charAt(index)
*/
// Contoh
let string = "Eggy Atma Riansyah";
console.log(string.charAt(5));

/* 2. concat()
    Metode concat () digunakan untuk menggabungkan dua atau lebih string.
    Sintaks : string.concat(string1, string2, ..., stringX)
*/
// Contoh 
let str1 = "Hello ";
let str2 = "world!";
let str3 = " Have a nice day!";
console.log(str1.concat(str2, str3));

/* 3. endsWith()
    Metode endsWith() menentukan apakah string berakhir dengan karakter dari string yang ditentukan.
    Metode ini mengembalikan nilai true jika string diakhiri dengan karakter, dan false jika tidak.
    Sintaks : string.endsWith(searchvalue, length)
*/
// Contoh 
let str = "Hello world, welcome to the universe.";
console.log(str.endsWith("universe."));

/* 4. pop ()
    Metode pop () menghapus item/elemen terakhir dari sebuah array, dan mengembalikan elemen itu.
    Sintaks : array.pop()
*/
// Contoh 
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop());

/* 5. shift ()
    Metode shift() menghapus item/elemen pertama dari sebuah array. dan mengembalikan elemen itu.
    Sintaks : array.shift()
*/
// Contoh 
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.shift());
console.log(fruits2)

/* 6. unshift()
    Metode unshift () menambahkan item/elemen baru ke awal larik, dan mengembalikan panjang baru.
    Sintaks : array.unshift(item1, item2, ..., itemX)
*/
// Contoh
let fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.unshift("Lemon","Pineapple"));

/* 7. join()
    Metode join() mengembalikan array sebagai string.
    Elemen-elemen tersebut akan dipisahkan oleh pemisah yang ditentukan. Pemisah default adalah koma (,).
    Sintaks : array.join(separator)
*/
// Contoh
let drinks = ["Tea", "Coffee", "Juice Orange"];
console.log(drinks.join());

/* 8. isArray ()
    Metode isArray () menentukan apakah suatu objek adalah array.
    Fungsi ini mengembalikan nilai true jika objek adalah array, dan false jika tidak.
    Sintaks : Array.isArray(obj)
*/
// Contoh
let name = "Dody";
console.log(Array.isArray(name));

/* 9. valueOf ()
    Metode valueOf () mengembalikan larik.
    Metode ini adalah metode default dari objek array. Array.valueOf () akan mengembalikan sama seperti Array
    Sintaks : array.valueOf()
*/
// Contoh
let vehicle = ["Car", "Bicycle", "Motorcycle", "Bus"];
console.log(vehicle.valueOf());

/* 10. toString ()
    Metode toString() mengembalikan string dengan semua nilai array, dipisahkan dengan koma.
    Sintaks : array.toString()
*/
// Contoh
var os = ["Windows", "Linux", "Android", "iOS"];
console.log(os.toString());