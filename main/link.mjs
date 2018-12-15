import rollup from 'rollup'
async function link(input,file){
    let bundle=await rollup.rollup({
        input,
    })
    await bundle.write({
        file,
        format:'es',
    })
}
link(`cr.mjs`,`cr.static.mjs`)
