const fs = require('fs')
//funcion original
// const crearArchivo = ( base = 5 ) => {
//     console.log('==============================')
//     console.log(`         Tabla del ${base}          `)
//     console.log('==============================')
//     let salida = ''

//     for(let index = 1; index <= 10; index++) {
//         salida += `${base} x ${index} = ${base * index}\n`
//     }
//     console.log(salida)
//     fs.writeFileSync(`tabla-${base}.txt`, salida)
//     console.log(`tabla-${base}.txt`)
// }

// const crearArchivo = ( base = 5 ) => {
//     return  new Promise((resolve, reject) => {
//         try {
//             let salida = ''
        
//             for(let index = 1; index <= 10; index++) {
//                 salida += `${base} x ${index} = ${base * index}\n`
//             }
//             fs.writeFileSync(`tabla-${base}.txt`, salida)
            
//             resolve(`tabla-${base}.txt`)
//         } catch (err) {
//             reject(err)
//         }
//     })
// }

const crearArchivo = async( base = 5, listar, hasta) => {
    try {
        let salida, consola = ''    
        for(let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base * index}\n`
            consola += `${base} x ${index} = ${base * index}\n`.rainbow
        }
        if(listar) console.log(consola)
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return `tabla-${base}.txt`
    } catch (err) {
        throw err
    }
}

module.exports = { crearArchivo }