class Ksiazka {
    constructor(tytul, rokWydania, imieAutora, nazwiskoAutora) {
        this.tytul = tytul;
        this.rokWydania = rokWydania;
        this.imieAutora = imieAutora;
        this.nazwiskoAutora = nazwiskoAutora;
    }

    pelneImieINazwiskoAutora() {
        return `${this.imieAutora} ${this.nazwiskoAutora}`;
    }
}

const listaKsiazek = [
    new Ksiazka("Lalka", 1890, "Bolesław", "Prus"),
    new Ksiazka("Quo Vadis", 1896, "Henryk", "Sienkiewicz"),
    new Ksiazka("Pan Tadeusz", 1834, "Adam", "Mickiewicz"),
    new Ksiazka("Ferdydurke", 1937, "Witold", "Gombrowicz")
];

const wybranyRok = 1896;

console.log(`Książki wydane w roku ${wybranyRok}:`);
listaKsiazek.forEach(ksiazka => {
    if (ksiazka.rokWydania === wybranyRok) {
        console.log(`"${ksiazka.tytul}" - autor: ${ksiazka.pelneImieINazwiskoAutora()}`);
    }
});
