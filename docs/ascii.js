// ascii_renderer.js

const TILE = {
    CVNU: '👤', // Le joueur (CVNU)
    RESOURCE: '📜', // Le Data Soup
    WORK_LOC: '💼', // Lieu d'emploi/recyclage
    PROGRESS: '█', // Barre de progression
    EMPTY: '░' // Espace vide
};

/**
 * Rend l'état actuel du jeu en ASCII pour un RPG 1D.
 * @param {CVNU} cvnu - L'instance du CVNU.
 * @param {number} day - Jour actuel du défi.
 * @returns {string} Le rendu ASCII.
 */
function render1DMap(cvnu, day) {
    const mapLength = 50;
    let map = Array(mapLength).fill(TILE.EMPTY);

    // Position du CVNU au centre
    const cvnuPos = Math.floor(mapLength / 2);
    map[cvnuPos] = TILE.CVNU;

    // Progression de l'objectif sur la carte
    const progress = cvnu.currentRevenue / cvnu.maxIncome;
    const progressLength = Math.min(Math.floor(progress * mapLength), mapLength);

    for (let i = 0; i < progressLength; i++) {
        map[i] = TILE.PROGRESS;
    }

    // Affichage de la ligne 1D
    const mapLine = map.join('');
    
    // Affichage des stats
    const stats = [
        `Jour D: ${day}/28`,
        `Niveau CVNU: ${cvnu.level}`,
        `Revenu Actuel: ${cvnu.currentRevenue.toFixed(2)} / Objectif: ${cvnu.calculateTargetIncome(day).toFixed(2)}`,
        `Valeur Travail (VT): ${cvnu.workValue.toFixed(2)}`
    ].join(' | ');
    
    return `\n${stats}\n${mapLine}\n`;
}

module.exports = { render1DMap };