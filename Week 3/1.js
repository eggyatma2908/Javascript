let str = 10001
let newString = '';
if (typeof str === 'number') {
    str = str.toString()
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i]
    }
} else {
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i]
    }
}
let reverseText = newString
if (str === reverseText) {
  console.log('Palindrom')
} else {
  console.log('Bukan Palindrom')
}