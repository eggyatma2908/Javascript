let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

// A
address = {...data.address, street: "Jl. Lematang 1", suite: "No.88 RT.03 RW.04 Kel.Baktijaya Kec.Sukmajaya Depok Timur", city: "Depok", zipcode : "16418"}    
data1 = {...data, address, name : "Eggy Atma Riansyah", username : "Eggy", email : "eggyatmariansyah@gmail.com", hobby: "Futsal, Membaca Komik, Berenang dan Belajar Online", phone : "0813-1891-3824", }

console.log(data1)

// B
let {street, city} = data1.address

console.log(street, city)