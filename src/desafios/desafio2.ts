// Como podemos melhorar o esse código usando TS? 

interface pessoa {
    nome: string;
    idade: number;
    profissao: 'atriz' | 'padeiro';
}

let pessoa1: pessoa = {
    nome: 'maria',
    idade: 29,
    profissao: 'atriz'
}

let pessoa2: pessoa = {
    nome: 'roberto',
    idade: 19,
    profissao: 'padeiro'
}
let pessoa3: pessoa = {
    nome: 'laura',
    idade: 32,
    profissao: 'atriz'
}

let pessoa4: pessoa = {
    nome: 'carlos',
    idade: 19,
    profissao: 'padeiro'
}
