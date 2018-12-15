/*
https://www.w3.org/TR/2017/REC-html52-20171214/syntax.html#named-character-references
https://www.w3.org/TR/2017/REC-html52-20171214/entities.json
*/
import cRList from './cRList.mjs'
function unescape(s){
    let x=''
    for(;;){
        let m=s.match(/&(?:[A-Za-z]+|#(?:[0-9]+|[Xx][0-9A-Fa-f]+));/)
        if(!m)
            break
        x+=m[0][1]=='#'?
            String.fromCodePoint(
                m[0][2]=='X'||m[0][2]=='x'?
                    parseInt(m[0].substring(3,m[0].length-1),16)
                :
                    parseInt(m[0].substring(2,m[0].length-1),10)
            )
        :
            cRList[m[0].substring(1,m[0].length-1)]
        s=s.substring(m.index+m[0].length)
    }
    return x
}
export default unescape
