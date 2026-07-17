// Array bidimensional (matriz)
// Cada posição do array principal contém outro array

const alunos = [
    ["João", 8.5],
    ["Maria", 9.0],
    ["Pedro", 6.5],
    ["Ana", 7.8]
];

// Exibindo a matriz completa
console.log(alunos);

// Acessando elementos específicos
console.log(alunos[0]);      // ["João", 8.5]
console.log(alunos[0][0]);   // João
console.log(alunos[0][1]);   // 8.5

// Percorrendo a matriz com for
for (let i = 0; i < alunos.length; i++) {

    // alunos[i] representa uma linha da matriz
    let nome = alunos[i][0];
    let nota = alunos[i][1];

    console.log(`Aluno: ${nome} | Nota: ${nota}`);
}