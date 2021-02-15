const fs = require('fs')
const colors = require('colors')

const crearArchivoTabla = async (
  base = 5,
  listar = false,
  multiplicador = 10
) => {
  try {
    let salida = ''
    for (let index = 1; index <= multiplicador; index++) {
      salida += `${base} * ${index} = ${base * index}\n`
    }
    if (listar) {
      console.log(`##################`.cyan)
      console.log('Tabla del: '.green, base)
      console.log(`##################`.cyan)
      console.log(colors.green(salida))
    }
    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //   if (err) {
    //     throw err
    //   }
    //   console.log(`tabla-${base}.txt, creada`)
    // })
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
    return `tabla-${base}.txt`.rainbow
  } catch (error) {
    throw error
  }
}

module.exports = {
  crearArchivoTabla
}