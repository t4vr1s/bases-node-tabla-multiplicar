const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base de la tabla de multiplicar'
  })
  .check((argv, options) => {
    console.log('yargs', argv)
    if (isNaN(argv.b)) {
      throw 'la base tiene que ser un número' //eslint-disable-line
    }
    return true
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla de multiplicar en la terminal'
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'número multiplicador'
  })
  .argv

module.exports = argv
