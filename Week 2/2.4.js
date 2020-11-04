fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    return data.map(item => console.log(item.name))
})
.catch(err => console.log(err))

// Jalankan di console browser 