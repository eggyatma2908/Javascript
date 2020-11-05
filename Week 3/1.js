let str = "malam";
let string = '';
if (typeof str === 'number') {
    str = str.toString();
    for (let i = str.length - 1; i >= 0; i--) {
      string += str[i];
    }
} else {
    str = str.toLocaleLowerCase();
    for (let i = str.length - 1; i >= 0; i--) {
      string += str[i];
    }
}
let reverseText = string;
if (str === reverseText) {
  console.log('Palindrom');
} else {
  console.log('Bukan Palindrom');
}
