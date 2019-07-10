const pessoa = {
    nome: 'Ana',
    idade: 5,
    enderco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {enderco: {logradouro: l, numero: num, cep}} = pessoa
console.log(l, num, cep)

const {enderco: {logradouro: l2, numero: num2, cep2 = '70673-304'}} = pessoa
console.log(l2, num2, cep2)