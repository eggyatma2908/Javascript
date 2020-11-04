const name = 
    [
        "Abigail", "Alexandra", "Alison",
        "Amanda", "Angela", "Bella",
        "Carol", "Caroline", "Carolyn",
        "Deirdre", "Diana", "Elizabeth",
        "Ella", "Faith", "Olivia", "Penelope"
    ]

function searchName (param1, param2, callback) {
    let p1 = name.filter(item => {
       return item.toLowerCase().indexOf(param1.toLowerCase()) > - 1
    })
    callback(p1, param2)
}
searchName("an", 5, (p1, param2) => {
    let p2 = p1.filter((item, index) => {
        if (index < param2){
            return item
        } 
    }) 
    console.log(p2)
}) 