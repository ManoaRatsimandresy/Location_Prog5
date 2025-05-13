# location_app.py

class Location:
    increment_id = 1

    def __init__(self, client, objet, date_debut, date_fin):
        self.id = Location.increment_id
        Location.increment_id += 1
        self.client = client
        self.objet = objet
        self.date_debut = date_debut
        self.date_fin = date_fin
        self.etat = "disponible"  # état par défaut

    def __str__(self):
        return f"#{self.id} - {self.client} a loué {self.objet} du {self.date_debut} au {self.date_fin} [{self.etat}]"


class LocationApp:
    def __init__(self):
        self.locations = []

    def ajouter_location(self, client, objet, date_debut, date_fin):
        location = Location(client, objet, date_debut, date_fin)
        self.locations.append(location)
        print("✅ Location ajoutée :", location)

    def afficher_locations(self):
        if not self.locations:
            print("Aucune location enregistrée.")
        else:
            print("📋 Liste des locations :")
            for loc in self.locations:
                print(loc)

    def changer_etat(self, id, nouvel_etat):
        for loc in self.locations:
            if loc.id == id:
                print(f"🔄 État de la location #{id} changé de '{loc.etat}' à '{nouvel_etat}'")
                loc.etat = nouvel_etat
                return
        print(f"❌ Aucune location trouvée avec l'ID {id}")


# Exemple d'utilisation
if __name__ == "__main__":
    app = LocationApp()

    app.ajouter_location("Alice", "Voiture", "2025-05-10", "2025-05-15")
    app.ajouter_location("Bob", "Vélo", "2025-05-12", "2025-05-13")

    app.afficher_locations()

    app.changer_etat(1, "réservé")
    app.changer_etat(2, "en cours")

    app.afficher_locations()
