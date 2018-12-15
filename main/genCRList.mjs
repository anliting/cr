import fs from 'fs'
let output={}
Object.entries(
    JSON.parse(fs.readFileSync('cr/lib/entities.json').toString())
).filter(
    ([k,v])=>k[k.length-1]==';'
).map(([k,v])=>
    [k.substring(1,k.length-1),v.characters]
).map(([k,v])=>
    output[k]=v
)
fs.writeFileSync(
    'cr/src/cRList.mjs',
    `export default${JSON.stringify(output)}`
)
