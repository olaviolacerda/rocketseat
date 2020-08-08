// Exercicio 1
function imprimeEndereco(endereco) {
  return `O usuário mora em ${endereco.cidade}/${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com n ${endereco.numero}`
}

//Exercício 2
function pares(x, y) {
  const pares = []
  for (let number = x; number < y; number++) {
    if (number % 2 === 0) pares.push(number)
  }
  return pares
}

//Exercício 3
function temHabilidade(skills) {
  return skills.includes('Javascript')
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false

//Exercício 4
function experiencia(anos) {
  if (anos <= 1) {
    return "Iniciante";
  } else if (anos <= 3) {
    return "Intermediário";
  } else if (anos <= 6) {
    return "Avançado";
  } else {
    return "Jedi Master";
  }
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

//Exercício 5
var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

function citeHabilidades(usuarios) {
  const citacoes = []
  usuarios.forEach(usuario => {
    citacoes.push(`O ${usuario.nome} possui as habilidiades: ${usuario.habilidades.join(', ')}`)
  })

  return citacoes
}