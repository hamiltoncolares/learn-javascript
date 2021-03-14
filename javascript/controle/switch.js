const imprimirResutlado = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResutlado(10)
imprimirResutlado(9)
imprimirResutlado(8.9)
imprimirResutlado(6.6)
imprimirResutlado(4)
imprimirResutlado(0)