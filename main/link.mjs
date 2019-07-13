import rollup from 'rollup'
import fs from'fs'
let nodeVersion='1.0.1'
async function link(input){
    let bundle=await rollup.rollup({
        input,
    })
    return(await bundle.generate({
        format:'es',
    })).output[0].code
}
fs.promises.writeFile('dist/node/package.json',JSON.stringify({
    name:'@anliting/cr',
    version:nodeVersion,
    main:'cr.mjs'
}))
fs.promises.copyFile('license','dist/node/license')
;(async()=>{
    let cr=await link(`main/cr.mjs`)
    fs.promises.writeFile('dist/node/cr.mjs',cr),
    fs.promises.writeFile('dist/cr.mjs',`/*${
        await fs.promises.readFile('license','utf8')
    }*/${cr}`)
})()
