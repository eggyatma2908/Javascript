// 1
const absen = new Promise ((resolve, reject) => {
    let masuk = true;
    if (masuk) {
        resolve ('Hadir')
    } else {
        reject ('Tidak Hadir')
    }
})

// absen
//  .then(res => console.log(res))
//  .catch(res => console.log(res))

// 2
const janjian = () => {
    return new Promise ((resolve, reject) => {
    setTimeout (() => {
        let datang = true;
    if (datang) {
        resolve ('Janji ditepati')
    } else {
        reject ('Janji tidak ditepati')
    }
}, 4000)
})
}

const result = async () => {
    try {
        const result = await janjian ()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

result()