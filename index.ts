function formatString (input : string,toUppier?: boolean) : string {
    if(toUppier == true){
        const res : string = input.toUpperCase()
        return res;
    }
    else{
        return input
    }
}
const result = formatString('mehedi',true)
console.log(result)

