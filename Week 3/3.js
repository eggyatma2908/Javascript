const divideAndSort = (input) => {
    if (typeof input === 'number') {
        let p1 = input.toString().split("0") // ["595656", "159466", "56" ]
        let p2 = p1[0].split("").sort() // [ "5", "5", "5", "6", "6", "9" ]
        let p3 = p1[1].split("").sort() // [ "1", "4", "5", "6", "6", "9" ]
        let p4 = p1[2].split("").sort() // [ "5", "6" ]
        let p5 = [...p2, ...p3, ...p4]  // [ "5", "5", "5", "6", "6", "9", "1", "4", "5", "6", "6", "9", "5", "6" ]
        console.log(p5.join(""))
    } else {
        console.log("Ini Bukan Angka")
    }
}

divideAndSort(5956560159466056) 