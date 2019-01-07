function escape(s){
    let x=''
    for(let i=0;i<s.length;i++)
        x+=`&#${s.charCodeAt(i)};`
    return x
}
export default escape
