class Ksiazka {
    constructor(tytul, rokWydania, imieAutora, nazwiskoAutora) {
      this.tytul = tytul;
      this.rokWydania = rokWydania;
      this.imieAutora = imieAutora;
      this.nazwiskoAutora = nazwiskoAutora;
      this.iloscWypozyczen = 0; 
    }
  
    pelneImieINazwiskoAutora() {
      return `${this.imieAutora} ${this.nazwiskoAutora}`;
    }
  
    ustawIloscWypozyczen(ilosc) {
      this.iloscWypozyczen = ilosc;
    }
  
    zwiekszIloscWypozyczen() {
      this.iloscWypozyczen += 1;
    }
  }
  
  const ksiazki = [
    new Ksiazka("Lalka", 1890, "Bolesław", "Prus"),
    new Ksiazka("Pan Tadeusz", 1834, "Adam", "Mickiewicz"),
    new Ksiazka("Ferdydurke", 1937, "Witold", "Gombrowicz"),
    new Ksiazka("Quo Vadis", 1896, "Henryk", "Sienkiewicz"),
  ];
  
  const wybranyRok = 1896;
  
  console.log(`Książki wydane w roku ${wybranyRok}:`);
  ksiazki.forEach(ksiazka => {
    if (ksiazka.rokWydania === wybranyRok) {
      console.log(`Tytuł: "${ksiazka.tytul}", Autor: ${ksiazka.pelneImieINazwiskoAutora()}`);
    }
  });
  
  ksiazki[0].ustawIloscWypozyczen(71425);
  
  let najstarszaKsiazka = ksiazki[0];
  ksiazki.forEach(ksiazka => {
    if (ksiazka.rokWydania < najstarszaKsiazka.rokWydania) {
      najstarszaKsiazka = ksiazka;
    }
  });
  
  console.log(`\nNajstarsza książka: "${najstarszaKsiazka.tytul}" (rok: ${najstarszaKsiazka.rokWydania})`);
  
  const sumaWypozyczen = ksiazki.reduce((suma, ksiazka) => suma + ksiazka.iloscWypozyczen, 0);
  
  console.log(`\nŁączna liczba wypożyczeń wszystkich książek: ${sumaWypozyczen}`);
  
