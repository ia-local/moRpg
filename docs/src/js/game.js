// game_logic.js

const { CVNU } = require('./cvnu_model');
// Moteur d'IA simulé
const groqAI = {
    // Le "System" IA qui donne des directives économiques et métier.
    // Simule la boucle de modèle pour développer la logique de classe métier.
    systemModel: (cvnu) => {
        const prompt = `Le CVNU est niveau ${cvnu.level} avec une VT de ${cvnu.workValue}. Le revenu actuel est de ${cvnu.currentRevenue}. Propose un plan de recyclage de <meta> pour générer un emploi à $${cvnu.calculateTargetIncome(1) / 5} et améliorer le score SEO.`;
        // En réalité, une requête à l'API GROQ/Llama-3.1-8b-instant
        const action = `[SYSTEM]: Le Niveau ${cvnu.level} nécessite le recyclage de 50 lignes de Data Soup. L'emploi généré est 'Optimisation de la Taxonomie <meta> sur 30 pages GitHub Pages'. Base loc: 150.`;
        return { action, baseRental: 150, resourceConsumption: 50 };
    }
};

/**
 * Exécute le cycle de jeu quotidien.
 * @param {CVNU} cvnu - L'instance CVNU.
 * @param {number} day - Jour actuel.
 */
function dailyCycle(cvnu, day) {
    console.log(`\n--- ☀️ Jour ${day}/28 : Début du Cycle ---`);

    // 1. L'IA Système définit l'emploi
    const systemOutput = groqAI.systemModel(cvnu);
    console.log(systemOutput.action);

    // 2. Le CVNU exécute l'emploi (Recyclage des <meta>)
    cvnu.updateWorkValue(systemOutput.resourceConsumption);
    
    // 3. Calcul de la Rémunération (Location)
    const rental = cvnu.calculateRental(systemOutput.baseRental);
    
    console.log(`\n### 💰 Transaction Emploi - Héros de la Taxe (Recyclage <meta>)`);
    console.log(`* Location de base: ${systemOutput.baseRental.toFixed(2)}`);
    console.log(`* Valeur Travail (VT) appliquée: -${rental.vtApplied.toFixed(2)}`);
    console.log(`* Montant Hors Taxe (MHT): ${(systemOutput.baseRental - rental.vtApplied).toFixed(2)}`);
    console.log(`* TVA (${cvnu.tvaRate * 100}%): +${rental.tva.toFixed(2)}`);
    console.log(`* **Revenu Total: ${rental.total.toFixed(2)}**`);
    console.log(`* **Valeur CASH (SEO/Référencement): ${rental.cashValue.toFixed(2)}** (Les "Héros de la Taxe" travaillent en cash sur le référencement)`);

    console.log(`\n--- 🌙 Jour ${day}/28 : Fin du Cycle ---`);
}

module.exports = { dailyCycle };