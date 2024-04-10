const fs = require('fs')
const path = require('path')

const jsonFilePath = './src/lib/vars.json'
const scssFilePath = './public/styles/vars.scss'


function generateSCSS(jsonData) {
  let scssVars = ''

  for (const key in jsonData) {
    scssVars += `$${key}: ${jsonData[key]};\n`
  }

  fs.writeFileSync(scssFilePath, scssVars)
}


const jsonData = JSON.parse(fs.readFileSync(jsonFilePath))

generateSCSS(jsonData)


fs.watch(jsonFilePath, (event) => {
  if (event) {
    const jsonData = JSON.parse(fs.readFileSync(jsonFilePath))

    generateSCSS(jsonData)

    console.log('SCSS файл обновлен.')
  }
})