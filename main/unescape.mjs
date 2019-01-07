import cRList from './cRList.mjs'
function unescape(s){
    return s.replace(
        /&(?:[A-Za-z]+|#(?:[0-9]+|[Xx][0-9A-Fa-f]+));/g,
        (m,i)=>
            m[1]=='#'?
                String.fromCodePoint(
                    m[2]=='X'||m[2]=='x'?
                        parseInt(m.substring(3,m.length-1),16)
                    :
                        parseInt(m.substring(2,m.length-1),10)
                )
            :
                cRList[m.substring(1,m.length-1)]
    )
}
export default unescape
