const argv = require('./config/yargs'),
    { crearArchivo } = require('./helpers/multiplicar'),
    colors = require('colors');
colors.enable();

console.clear()

// console.log(process.argv)
// const [ , , arg3 = 5] = process.argv
// const [ , base = 5 ] = arg3.split("=")

// console.log(base)
// const base = 1

// console.log(process.argv)
// console.log(argv)
const { base , listar, hasta } = argv
// console.log(base)

crearArchivo( base, listar, hasta )
    .then(nombreArchivo => console.log(`${nombreArchivo} creado`.green))
    .catch(err => console.error(err))

// fs.writeFile(`tabla-${base}.txt`, salida, (err, data) => {
//     if(err) throw err
//     console.log(`tabla-${base}.txt`)
// })