// cvnu_model.js

/**
 * @class CVNU
 * Représente l'unité de jeu principale (CV Numérique Universel).
 */
class CVNU {
    constructor(dataSoupPath = 'data/soup.js') {
        this.level = 1; // Niveau initial du CVNU
        this.baseIncome = 750; // Objectif MVP de revenu de base (jour 1)
        this.maxIncome = 7500; // Objectif max de revenu (jour 28)
        this.currentRevenue = 0;
        this.workValue = 0; // Valeur Travail accumulée (lié au niveau et à la ressource)
        this.resourceSoup = this.loadResource(dataSoupPath);
        this.tvaRate = 0.20; // Taux de TVA pour l'économie circulaire (20% standard France)
    }

    /**
     * Charge la "ressource" (historique de conversation)
     * @param {string} path - Chemin vers data/soup.js
     * @returns {string} Le contenu simulé de la ressource.
     */
    loadResource(path) {
        // En production, ce serait un appel FS. Ici, c'est une simulation.
        console.log(`[INFO] Chargement de la ressource initiale depuis ${path}...`);
        return `// Contenu simulé de l'historique de conversation: "J'ai besoin de /defi_28, /slider_phone, /meta_style, etc..."`;
    }

    /**
     * Calcule le revenu progressif basé sur le niveau et le cycle de 28 jours.
     * @param {number} day - Jour actuel du cycle (1 à 28).
     * @returns {number} Le revenu cible pour le jour D.
     */
    calculateTargetIncome(day) {
        if (day < 1 || day > 28) return this.baseIncome;
        const incomeRange = this.maxIncome - this.baseIncome;
        // Croissance linéaire simplifiée pour l'exemple
        const target = this.baseIncome + (incomeRange * (day / 28));
        return parseFloat(target.toFixed(2));
    }

    /**
     * Met à jour la Valeur Travail (VT) basée sur le niveau et l'utilisation de la ressource.
     * @param {number} resourceConsumed - Quantité de "soupe" consommée/recyclée.
     */
    updateWorkValue(resourceConsumed) {
        // Logique : VT augmente avec le niveau et l'effort de recyclage de la ressource.
        const levelMultiplier = 1 + (this.level * 0.1);
        this.workValue += resourceConsumed * levelMultiplier;
    }

    /**
     * Calcule le montant de la location d'emploi/service (avec TVA et Valeur Travail intégrée).
     * @param {number} baseRental - Montant de base du service ou de l'emploi généré.
     * @returns {{total: number, tva: number, cashValue: number}} Détails de la transaction.
     */
    calculateRental(baseRental) {
        // Intégration de la Valeur Travail (VT) comme un bonus/réduction sur la base.
        // La "Valeur Travail" est ici utilisée pour justifier une partie de la valeur sans TVA.
        const vtApplied = Math.min(baseRental * 0.1, this.workValue * 0.05); // Max 10% de base, 5% de VT
        const rentalAfterVT = baseRental - vtApplied;

        const tvaAmount = rentalAfterVT * this.tvaRate;
        const totalAmount = rentalAfterVT + tvaAmount;

        // Le "cash" est la partie sans TVA (travail direct/cash) + la partie VT recyclée.
        const cashValue = baseRental - tvaAmount; // Simplification pour le concept "Héros de la Taxe"

        this.currentRevenue += totalAmount;
        return {
            total: parseFloat(totalAmount.toFixed(2)),
            tva: parseFloat(tvaAmount.toFixed(2)),
            cashValue: parseFloat(cashValue.toFixed(2)),
            vtApplied: parseFloat(vtApplied.toFixed(2))
        };
    }

    // Méthodes pour monter de niveau, etc.
    // ...
}

module.exports = { CVNU };