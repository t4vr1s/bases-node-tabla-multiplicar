const argv = require('./config/yargs')
const { crearArchivoTabla } = require('./helpers/multiplicar')


console.clear()

crearArchivoTabla(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(`${nombreArchivo}, creado`))
  .catch(console.log)