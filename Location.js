

class Location {
  constructor(client, objet, dateDebut, dateFin) {
    this.id = Location.incrementId++;
    this.client = client;
    this.objet = objet;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.etat = 'disponible'; 
  }
}
Location.incrementId = 1;

class LocationApp {
  constructor() {
    this.locations = [];
  }

  ajouterLocation(client, objet, dateDebut, dateFin) {
    const nouvelleLocation = new Location(client, objet, dateDebut, dateFin);
    this.locations.push(nouvelleLocation);
    console.log(" Location ajoutée :", nouvelleLocation);
  }

  afficherLocations() {
    if (this.locations.length === 0) {
      console.log("Aucune location enregistrée.");
    } else {
      console.log(" Liste des locations :");
      this.locations.forEach(loc => {
        console.log(`#${loc.id} - ${loc.client} a loué ${loc.objet} du ${loc.dateDebut} au ${loc.dateFin} [${loc.etat}]`);
      });
    }
  }

  changerEtat(id, nouvelEtat) {
    const location = this.locations.find(loc => loc.id === id);
    if (location) {
      console.log(` État de la location #${id} changé de "${location.etat}" à "${nouvelEtat}"`);
      location.etat = nouvelEtat;
    } else {
      console.log(` Aucune location trouvée avec l'ID ${id}`);
    }
  }
}


const app = new LocationApp();

app.ajouterLocation("Manoa", "Voiture", "2025-05-10", "2025-05-15");
app.ajouterLocation("Ratsimandresy", "Vélo", "2025-05-12", "2025-05-13");

app.afficherLocations();

app.changerEtat(1, "réservé");
app.changerEtat(2, "en cours");

app.afficherLocations();
