/*
Represent every character as character reference. This can be used to
represent text in the <template> elements, escapable raw text elements,
foreign elements, and normal elements. Note that it does not include raw
text elements.
https://www.w3.org/TR/2017/REC-html52-20171214/syntax.html#writing-html-documents-elements
*/
function escape(s){
    let x=''
    for(let i=0;i<s.length;i++)
        x+=`&#${s.charCodeAt(i)};`
    return x
}
export default escape
