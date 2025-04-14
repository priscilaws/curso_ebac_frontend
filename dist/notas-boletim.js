const estudantes = [{
  nome: "Debora",
  nota: 7.5
}, {
  nome: "Joao",
  nota: 5.0
}, {
  nome: "Maria",
  nota: 8.0
}, {
  nome: "Carolina",
  nota: 6.5
}, {
  nome: "Lucas",
  nota: 3.0
}];
const filtraAprovados = lista => lista.filter(estudantes => estudantes.nota >= 6);
const alunosAprovados = filtraAprovados(estudantes);
console.log("Alunos provados:");
console.log(alunosAprovados);