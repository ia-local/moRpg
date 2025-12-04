// time_manager.js

const START_DATE = new Date('2025-11-19'); // Date de début du défi 647 (basé sur votre mémoire)
const CYCLE_LENGTH = 28;

/**
 * Calcule le jour actuel du défi (1 à 28).
 * @returns {{day: number, progress: number}}
 */
function getCurrentChallengeDay() {
    const now = new Date();
    // Calculer la différence en jours
    const diffTime = now.getTime() - START_DATE.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Assurer que le jour est dans la plage 1-28
    const day = Math.max(1, Math.min(CYCLE_LENGTH, diffDays + 1)); // +1 car on compte le jour de départ
    const progress = day / CYCLE_LENGTH;
    
    return { day, progress };
}

module.exports = { getCurrentChallengeDay };