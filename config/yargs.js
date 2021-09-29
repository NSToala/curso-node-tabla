const argv = require('yargs')
    .options(
        {
            'b':  {
                alias: 'base',
                type: 'number',
                demandOption: 'true',
                describe: 'Es la base de la table de multiplicar'
            },
            'l':  {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Muestra la tabla en consola'
            },
            'h':  {
                alias: 'hasta',
                type: 'number',
                default: 10,
                describe: 'Es hasta donde se va a multiplicar'
            }
        })
    .check((argv, options) => {
        if(isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        }
        return true
    })
    .argv
module.exports = argv