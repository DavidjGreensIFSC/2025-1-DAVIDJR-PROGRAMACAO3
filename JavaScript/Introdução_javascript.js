    //introdução a linguagem de programação JavaScript

    /*Comentário de bloco*/

//Comentário de linha

//Para executar código JavaScript mp cpmspçe dp VS Code, digite: node arquivo.js
console.log("Boa tarde Programação III.");

//O prompt de comando deve estar na pasta onde o arquivo já está armazenado

/*1. Tipo de dado "Number": representa tando números inteiros quanto de ponto flutuante.*/
let idade = 30;
let preco = 99.99;

/*A função 'console.log()' é usada para exibir mensagens ou valores no console do navegador ou do ambiente de execução do JavaScript (Node)*/
console.log("Tipo de dado - Número inteiro:", idade);
console.log(typeof(idade));
console.log("Tipo de dado - Número ponto flutuante:", preco);
console.log(typeof(preco));

/*2. Tipo de dado "String": representa sequências de caracteres.*/
let nome = "Idones";
let saudacao = "Boa tarde turma da Programação III - IFSC Câmpus Chapecó!";

console.log("Tipo de dado - String:", nome);
console.log("Tipo de dado - String:", saudacao);

/*3. Tipo de dado - "Boolean": representa valores verdadeiros (true) ou falsos (false).*/
let estalogado = true;
let maiorDeIdade = false;

console.log("Tipo de dado - Boolean verdadeiro: ", estalogado);
console.log("Tipo de dado - Boolean falso: ", maiorDeIdade);

/*4. Tipo de dado - Undefined: indica uma variável que foi declarada mas não teve um valor atribuído, ou seja, não foi inicializada.*/
let endereco;

console.log("Tipo de dado - Undefined: ", endereco);

/*5. Tipo de dado - Null: representa a ausência intencional de um valor de objeto.*/
let salario = null;

console.log("Tipo de dado - Null: ", salario);

/*6. Tipo de dado - Symbol: usado para criar propriedades únicas de objeto. Symbols são sempre únicos, mesmo que tenham a mesma descrição*/
let id = Symbol("Identificador único da nota fiscal");

console.log("Tipo de dado - Symbol: ", id.toString());

/*7. Tipo de dado - BigInt: representa números inteiros muito grandes que não podem ser representados pelo tipo Number.
São escritos com um 'n' no final para diferenciá-los dos números do tipo 'Number' .*/
let numeroGrande = 1234567890123456789012345678901234567890n;

console.log("Tipo de dado Bigint:", numeroGrande); 