const divideAndSort = (input) => {
    if (typeof input === 'number') {
        let p1 = input.toString().split("0"); // ["595656", "159466", "56" ]
        let sortir = p1.map((angka) => angka.split("").sort().join("")); // [ "555669", "145669", "56" ]
        console.log(sortir.join(""));
    } else {
        console.log("Ini Bukan Angka");
    }
}

divideAndSort(5956560159466056) 
