var arrayBanque = [
  {
    nom: "Grand Est",
    mail: "SG-GrandEst.Reclamations@socgen.com",
    adresse :"SG SOCIETE GENERALE<br> Service Relations Clientèle<br> TSA 62294<br> 75427 PARIS CEDEX 09"
  },
  {
    nom: "Crédit du Nord",
    mail: "SG-CreditduNord.Reclamations@socgen.com",
    adresse :"SG CREDIT DU NORD<br> Service Relation Clientèle<br> TSA 98064<br> 59049 LILLE CEDEX"
  },
  {
    nom: "Société Générale",
    mail: "SG-SocieteGenerale.Reclamations@socgen.com",
    adresse :"SG SOCIETE GENERALE<br> Service Relations Clientèle<br> TSA 62294<br> 75427 PARIS CEDEX 09"
  },
  {
    nom: "Grand Ouest",
    mail: "SG-GrandOuest.Reclamations@socgen.com",
    adresse :"SG GRAND OUEST<br> Service Relations Clientèle<br> TSA 41774<br> 35517 CESSON SEVIGNE CEDEX"
  },
  {
    nom: "Tarneaud",
    mail: "SG-Tarneaud.Reclamations@socgen.com",
    adresse :"SG TARNEAUD<br> Service Relation Clientèle<br> TSA 90001<br> 87011 LIMOGES CEDEX"
  },
  {
    nom: "Auvergne Rhône Alpes",
    mail: "SG-AuvergneRhoneAlpes.Reclamations@socgen.com",
    adresse :"SG AUVERGNE RHONE ALPES<br> Service Relation Clientèle<br> TSA 17050<br> 69307 LYON CEDEX 07"
  },
  {
    nom: "Laydernier",
    mail: "SG-Laydernier.Reclamations@socgen.com",
    adresse :"SG LAYDERNIER<br> Service Relation Clientèle<br> TSA 68000<br> 74059 ANNECY CEDEX",
  },
  {
    nom: "Sud Ouest",
    mail: "SG-SudOuest.Reclamations@socgen.com ",
    adresse :"SG SUD-OUEST<br> Service Relation Clientèle<br> TSA 30001<br> 33077 BORDEAUX CEDEX",
  },
  {
    nom: "Courtois",
    mail: "SG-Courtois.Reclamations@socgen.com",
    adresse :"SG COURTOIS<br> Service Relation Clientèle<br> TSA 80224<br> 31689 TOULOUSE CEDEX 6",
  },
  {
    nom: "SMC",
    mail: "SG-SMC.Reclamations@socgen.com",
    adresse :"SG SMC<br> Service Relation Clientèle<br> TSA 91353<br> 13281 MARSEILLE CEDEX 06",
  },
  {
    nom: "Société Générale Corse",
    mail: "SG-SocieteGenerale.Reclamations@socgen.com",
    adresse :"SG SOCIETE GENERALE<br> Service Relation Clientèle<br> TSA 50001<br> 20297 BASTIA CEDEX",
  }
  ]

//namespace shaker
var Shaker = (() => {
  var self = {};

    //Methode public car nous pouvons l'appeler de l'extérieur
  //Structure appeler le module parttern
  self.init = () => {
    var form = document.getElementById('formSelectRegion');
    var wrapperTxt = document.getElementById('wrapper-txt')

    console.log(form);
  }
  return self;

})(); //closure qui s'appelle elle même ()


Shaker.init();