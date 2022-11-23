function palindromo(str){
    const strRever = str.split("").reverse().join("")

    return strRever === str ? "ES PALINDROMO" : "NO ES PALINDROMO"
}

console.log(palindromo("RECONOCER"));