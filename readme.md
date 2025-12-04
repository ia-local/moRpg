╔════════════════════════════════════════════════════════════════════════════════════════╗
║[📗 📕 📒]:/┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈{[┈┈┈┈/cmd-ia┈┈┈┈┈]}┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈>║ 
╠════════════════════════════════════════════════════════════════════════════════════════╣
║                   🤖 TUI - RÉFÉRENTIEL COMPLET DES COMMANDES (B-QPV) 🤖                 ║
║                                                                                        ║
║ Ce document liste chaque commande,                                                     ║ 
║                                                                                        ║
║  incluant le Rôle, la Description, et un Schéma ASCII                                  ║
║  représentant son Plan de Développement (Croissance Future).                           ║
║                                                                                        ║
║                                                                                        ║
╠════════════════════════════════════════════════════════════════════════════════════════╣
║                         **GEMINI - DESCRIPTION CONTEXTUELLE INITIALE**                 ║
╠════════════════════════════════════════════════════════════════════════════════════════╣
║[💻.📡]<: ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 🛰️ >║
╚════════════════════════════════════════════════════════════════════════════════════════╝

# 🛠️ I. COMMANDES DE MÉTA-STRUCTURE & SYSTÈME

## 1. Commande: `/ia_role`

* **Titre (Rôle):** Sélecteur de Rôle AI & Mappeur de Classe Métier.
* **Description:**
    * **Style:** Méthodique et Structural.
    * **Contexte:** Activation d'un mode de comportement de haut niveau (classe IA) pour modifier la logique, les contraintes et le style de réponse.
    * **Tâches:** Analyser le besoin ou la classe métier désirée, Mettre en correspondance avec une classe IA prédéfinie, Confirmer le changement et Lister les 3 principales modifications comportementales associées.
* **Plan de Développement:** Intégrer une commande `/log_history` pour tracer et analyser les 10 dernières activations de rôle, ainsi qu'une option `--debug_role` pour afficher les contraintes internes activées.

### 📊 Schéma de Développement ASCII

╔════════════════════════════════════════════════════════════════════════════════════════╗
║[📗 📕 📒]:/┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈{[┈┈┈┈role-ia┈┈┈┈┈]}┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈>║ 
╠════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                        ║ 
║              ◆ Rôle Actif /ia_role                                                     ║
║              │                                                                         ║
║              ▼                                                                         ║
║            ╔═╣ Validation du Schéma/Classe métier                                      ║
║            ║ │                                                                         ║
║            ║ ├───▶ 📚 /log_history (Analyse Trace)                                     ║
║            ║ │                                                                         ║
║            ╚═▶ ⚙️ --debug_role (Contraintes ON)                                        ║
║                                                                                        ║ 
╠════════════════════════════════════════════════════════════════════════════════════════╣
║[💻.📡]<: ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 🛰️ >║
╚════════════════════════════════════════════════════════════════════════════════════════╝

---