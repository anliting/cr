//import cr from './cr.mjs'
import cr from './cr.static.mjs'
console.log(cr.unescape('a&nbsp;b'))
console.log(cr.unescape(cr.escape(`a&b<c>e"d'f`)))
