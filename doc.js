const domandeAnimali = [
  {
    domanda: "Qual è il mammifero più grande del mondo?",
    risposte: ["Balenottera azzurra", "Elefante", "Orso polare", "Rinoceronte"],
    corretta: "Balenottera azzurra"
  },
  {
    domanda: "Qual è l'animale terrestre più veloce?",
    risposte: ["Ghepardo", "Leone", "Antilope", "Cavallo da corsa"],
    corretta: "Ghepardo"
  },
  {
    domanda: "Qual è l'animale più longevo?",
    risposte: ["Tartaruga delle Galápagos", "Elefante", "Balena", "Aquila reale"],
    corretta: "Tartaruga delle Galápagos"
  },
  {
    domanda: "Qual è l'animale più intelligente?",
    risposte: ["Delfino", "Cane", "Scimpanzé", "Polpo"],
    corretta: "Delfino"
  },
  {
    domanda: "Qual è l'animale più velenoso?",
    risposte: ["Rana dorata", "Vedova nera", "Cobra reale", "Scorpione"],
    corretta: "Rana dorata"
  },
  {
    domanda: "Quanti nasi hanno le lumache?",
    risposte: ["Quattro", "Due", "Uno", "Sei"],
    corretta: "Quattro"
  },
  {
    domanda: "Perché i fenicotteri sono rosa?",
    risposte: ["Perché mangiano crostacei", "Per l'acqua salata", "Per il sole", "Perché nascono così"],
    corretta: "Perché mangiano crostacei"
  },
  {
    domanda: "Qual è l'animale terrestre più grande?",
    risposte: ["Elefante africano", "Giraffa", "Rinoceronte bianco", "Ippopotamo"],
    corretta: "Elefante africano"
  },
  {
    domanda: "Dove vive l’ornitorinco?",
    risposte: ["In Australia e Tasmania", "In Canada", "In Sudafrica", "In Brasile"],
    corretta: "In Australia e Tasmania"
  },
  {
    domanda: "Di cosa si nutre principalmente il panda?",
    risposte: ["Bambù", "Insetti", "Frutta", "Foglie di tè"],
    corretta: "Bambù"
  }
];


/* Selezione degli elementi */
const btnAnimali = document.querySelector('.b_category.animal');
const h2Domanda = document.querySelector('#quiz > h2');
const bottoniRisposta = document.querySelectorAll('#risposte > button.solution');



/* Funzione per generare quiz casuale */
function mostraQuiz(categoria) {
    let listaDomande = [];

    if (categoria === 'animali') {
        listaDomande = domandeAnimali;
    }

    const indice = Math.floor(Math.random() * listaDomande.length);
    const domandaCorrente = listaDomande[indice];

    // Aggiorna testo domanda
    h2Domanda.textContent = domandaCorrente.domanda;

    // Mescola risposte
    const risposteMescolate = [...domandaCorrente.risposte].sort(() => Math.random() - 0.5);

    // Assegna testo ai bottoni
    bottoniRisposta.forEach((btn, index) => {
        btn.textContent = risposteMescolate[index];
        btn.dataset.corretta = risposteMescolate[index] === domandaCorrente.corretta; // true/false
        btn.classList.remove('corretta', 'sbagliata'); // reset classi visive
    });
}

/* Click su "Animali" */
btnAnimali.addEventListener("click", () => {
    mostraQuiz('animali');
});

/* Click su una risposta */
bottoniRisposta.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.dataset.corretta === "true") {
            btn.classList.add("corretta");
        } else {
            btn.classList.add("sbagliata");
        }
    });
});
