var spisakPutnikaiPrtljaga = [];
var piloti = [];
var validniPutnici = [];
var validniPiloti = [];


class Let {
	constructor(naziv, kapacitet, spisakPutnika){
		this.naziv = naziv,
		this.kapacitet = kapacitet,
		this.spisakPutnika = spisakPutnika
		
    }
}


class Putnik {
	constructor(ime, prezime, kilaza, prtljag="pilot moze koliko zeli", noFly="pilot nema noFly zabranu"){
		this.ime = ime,
		this.prezime = prezime,
		this.kilaza = kilaza,
		this.noFly = noFly,
		this.prtljag = prtljag
  }
  
	proveraPrtljaga(){
		if ( this.prtljag < 2 ){
			return "Rucni";
		}else{
		  return "Predat";
		}
  }
  
 static noFlyZabrana = () => {
    if ((Math.floor(Math.random() * 3) + 1) == 1) {
      return this.noFly = false;
    }else {
      return  this.noFly = true;
    }
  }
}

class Pilot extends Putnik{
	constructor(ime, prezime, kilaza, licenca){
		super(ime, prezime, kilaza);
		this.licenca = licenca
  }

  static noFlyLicenca = () => {
    if ((Math.floor(Math.random() * 20) + 1) == 10) {
      return this.licenca = false;
    }else {
      return  this.licenca = true;
    }
  }
  
}


var putnik1 = new Putnik("Jvvan", "Zikic", 105, 1, Putnik.noFlyZabrana());
var putnik2 = new Putnik("Ivana", "Milovanovic", 70, 1, Putnik.noFlyZabrana());
var putnik3 = new Putnik("Pera", "Stefanovic", 90, 4, Putnik.noFlyZabrana());
var putnik4 = new Putnik("Mihajlo", "Mitic", 80, 1, Putnik.noFlyZabrana());
var putnik5 = new Putnik("Dragana", "Velickovic", 77, 5, Putnik.noFlyZabrana());
var putnik6 = new Putnik("Ivana", "Ivic", 55, 3, Putnik.noFlyZabrana());
var putnik7 = new Putnik("Darko", "Mitrovic", 93, 1, Putnik.noFlyZabrana());
var putnik8 = new Putnik("Goran", "Stojanovic", 67, 5, Putnik.noFlyZabrana());
var putnik9 = new Putnik("Petar", "Dobrnjac", 105, 5, Putnik.noFlyZabrana());
var putnik10 = new Putnik("Milica", "Markovic", 54, 5, Putnik.noFlyZabrana());

var pilot1 = new Pilot("Slobodan", "Stosic", 80, Pilot.noFlyLicenca());
var pilot2 = new Pilot("Miroslav", "Bojic", 93, Pilot.noFlyLicenca());



spisakPutnikaiPrtljaga .push(putnik1, putnik2, putnik3, putnik4, putnik5, putnik6, putnik7, putnik8, putnik9, putnik10);
piloti.push(pilot1, pilot2);



proveraNoFLy = () => {
  for ( var i=0; i<spisakPutnikaiPrtljaga.length; i++ ){
    if ( spisakPutnikaiPrtljaga[i].noFly == false ){
      validniPutnici.push(spisakPutnikaiPrtljaga[i]);
    }
  }
  
  // ispisivanje liste putnika
  for ( var i=0; i<validniPutnici.length; i++ ){
    console.log(validniPutnici[i].ime, validniPutnici[i].prezime, validniPutnici[i].kilaza, validniPutnici[i].proveraPrtljaga(), validniPutnici[i].noFly);
    console.log("-----------------------------");
  }

  
}
proveraNoFLy();

izgubljenostPrtljaga = () => {
  var putniciKojiSuIzgubiliPredatiPrtljag = [];
  var imeiPrezime = [];
  var sum = 0;
  validniPutnici.forEach(putnik => {
    if ( putnik.proveraPrtljaga() == "Predat" && (Math.floor(Math.random() * 3) + 1) == 1  ){
      console.log("Putnik "+ putnik.prezime + " je izgubio prtljag koji je " + putnik.proveraPrtljaga() );
      putniciKojiSuIzgubiliPredatiPrtljag.push(putnik);
      imeiPrezime.push(putnik.ime.concat(putnik.prezime)); 
    } else if (putnik.proveraPrtljaga() == "Rucni" && (Math.floor(Math.random() * 10) + 1) == 10 ){
      console.log("Putnik "+ putnik.prezime + " je izgubio prtljag koji je " + putnik.proveraPrtljaga() );
    }
  });
  
  putniciKojiSuIzgubiliPredatiPrtljag.forEach(predatPrtljag => {
    sum += predatPrtljag.kilaza;
  });

  console.log("Tezina izgubljenog predatog prtljaga je " + sum);
  imeiPrezime.forEach(ime => {
    console.log("Ime putnika koji je izgubio predati prtljag je " + ime)
  });
}
izgubljenostPrtljaga();


proveraPilota = () => {
  for ( var i=0; i<piloti.length; i++ ){
    try {
      if ( piloti[i].licenca == true ){
        
        validniPiloti.push(piloti[i]);
      }else {
        throw 'zatvor' ;
      }
      
    }
    catch(err) {
      console.log("Pilot ide u zatvor")
    }
  
  }
  
}
proveraPilota();

var let1 = new Let("Rim - Dubai", 350, validniPutnici  );


proveraKapaciteta = () => {
  if(validniPutnici.length < let1.kapacitet ) {
      console.log("Kapaciteti na letu " + let1.naziv + " su zadovoljavajuci , izvrsite poletanje!");
  }else {
    console.log("Kapaciteti na letu " + let1.naziv + " su zadovoljavajuci, zabranjeno poletanje!");
  }
}
proveraKapaciteta();

