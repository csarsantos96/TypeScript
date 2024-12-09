function multiplicar(a: number, b : number): number{
    return a * b;
}

function saudacao(name: string):string {
    return `Olá, ${name}!`;
}

const resultado =  multiplicar(8,4);
console.log(`Resultado da multiplicação: ${resultado}`);

const saudacaoResultado = saudacao('Cesar');
console.log(saudacaoResultado);