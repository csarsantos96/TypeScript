function multiplicar(a, b) {
    return a * b;
}
function saudacao(name) {
    return "Ol\u00E1, ".concat(name, "!");
}
var resultado = multiplicar(8, 4);
console.log("Resultado da multiplica\u00E7\u00E3o: ".concat(resultado));
var saudacaoResultado = saudacao('Cesar');
console.log(saudacaoResultado);
