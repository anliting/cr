import cr from '../dist/cr.mjs'
console.log(cr.unescape(cr.escape(`a&b<c>e"d'f`)))
