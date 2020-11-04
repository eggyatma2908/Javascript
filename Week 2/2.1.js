const cekHariKerja = (day) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek){
                resolve(cek)
            } else {
                reject(new Error('hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

const resultData = async (day) => {
    try {
        const result = await cekHariKerja (day)
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}

resultData ('sabtu')

// Penggunaan try catch untuk mengatasi Error (error handling) 

// cekHariKerja('sabtu')
//  .then((result) => {
//      console.log(result)
//  })
//  .catch((error) => {
//      console.log(error.message)
//  })

// Pengunaan then catch yaitu untuk menangkap resolve dan reject atau mengolah hasil sukses dan gagal