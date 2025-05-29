var idade = 71
if (idade >= 18 && idade < 70) {
    console.log('Vota.')
} else {
    if (idade >= 16 && idade < 18) {
        console.log('Voto opcional.')
    } else if (idade >= 70) {
        console.log('Voto Opcional.')
    } else {
        console.log('Não vota.')
    }
}