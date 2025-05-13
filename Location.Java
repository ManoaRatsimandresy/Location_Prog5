import java.util.ArrayList;

public class LocationApp {

    static class Location {
        static int nextId = 1;
        int id;
        String client, objet, debut, fin, etat;

        Location(String client, String objet, String debut, String fin) {
            this.id = nextId++;
            this.client = client;
            this.objet = objet;
            this.debut = debut;
            this.fin = fin;
            this.etat = "disponible";
        }

        public String toString() {
            return "#" + id + " - " + client + " a loué " + objet + " du " + debut + " au " + fin + " [" + etat + "]";
        }
    }

    static ArrayList<Location> locations = new ArrayList<>();

    static void ajouter(String client, String objet, String debut, String fin) {
        Location loc = new Location(client, objet, debut, fin);
        locations.add(loc);
        System.out.println("✅ Ajout : " + loc);
    }

    static void afficher() {
        if (locations.isEmpty()) {
            System.out.println("Aucune location.");
        } else {
            System.out.println("📋 Locations :");
            for (Location l : locations) System.out.println(l);
        }
    }

    static void changerEtat(int id, String nouvelEtat) {
        for (Location l : locations) {
            if (l.id == id) {
                System.out.println("🔄 #" + id + " : " + l.etat + " → " + nouvelEtat);
                l.etat = nouvelEtat;
                return;
            }
        }
        System.out.println("❌ ID introuvable : " + id);
    }

    public static void main(String[] args) {
        ajouter("Alice", "Voiture", "2025-05-10", "2025-05-15");
        ajouter("Bob", "Vélo", "2025-05-12", "2025-05-13");

        afficher();

        changerEtat(1, "réservé");
        changerEtat(2, "en cours");

        afficher();
    }
}
