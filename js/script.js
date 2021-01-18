// Creo un oggetto che decrive uno studente e ne stampo le proprietà:
var studenteDaCiclare = {
  'nome': 'Alessandro',
  'cognome': 'Liggieri',
  'eta': 25,
}

console.log('Ciclo lo studente:')
for(var key in studenteDaCiclare)  {
  console.log(studenteDaCiclare[key])
}
// Creo un array di oggetti di studenti, poi ciclo ogni studente stampando per ognuno il nome e il cognome:
var listaStudenti = [
  {'nome': 'Tommaso', 'cognome': 'Zorzi', 'eta': 25,},
  {'nome': 'Stefania', 'cognome': 'Orlando', 'eta': 54,},
  {'nome': 'Andrea', 'cognome': 'Zenga', 'eta': 28,},
]

for(var x = 0; x < listaStudenti.length; x++) {

  console.log('Questo è lo studente numero: ' + (x + 1));

  var studente = listaStudenti[x];

  console.log(studente.nome + ' ' + studente.cognome);

}
// Attraverso 3 prompt, do all'utente la possibilità di aggiungere all'array un nuovo oggetto di studente:
while (listaStudenti.length < 4) {

  var nuovoStudente = {}

  nuovoStudente.nome = prompt('Qual è il tuo nome?')

  nuovoStudente.cognome = prompt('Qual è il tuo cognome?')

  nuovoStudente.eta = parseInt(prompt('Quanti anni hai?'))
  if (isNaN(nuovoStudente.nome) && isNaN(nuovoStudente.cognome) && !isNaN(nuovoStudente.eta)) {
    listaStudenti.push(nuovoStudente);
  } else {
    alert('Uno o più valori non sono validi')
  }
}

nuovoStudente.nome = nuovoStudente.nome[0].toUpperCase() + nuovoStudente.nome.slice(1).toLowerCase();
nuovoStudente.cognome = nuovoStudente.cognome[0].toUpperCase() + nuovoStudente.cognome.slice(1).toLowerCase();

console.log(listaStudenti);
