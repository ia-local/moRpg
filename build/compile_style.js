// compile_styles.js

const sass = require('node-sass');
const fs = require('fs');
const path = require('path');
const { getCurrentChallengeDay } = require('../time_manager');

const { day, progress } = getCurrentChallengeDay();

console.log(`[SCSS BUILD] Jour du Défi: ${day}/28 | Progression: ${(progress * 100).toFixed(2)}%`);

// Injecter la variable SCSS via data
const scssData = `$cvnu-day: ${day}; @import 'style.scss';`;

sass.render({
    data: scssData,
    includePaths: [__dirname], // Permet l'import des autres fichiers
    outputStyle: 'compressed' // Pour un fichier CSS léger
}, (err, result) => {
    if (err) {
        console.error("Erreur de compilation SCSS:", err);
        return;
    }

    // Écrire le fichier final dans le répertoire statique
    fs.writeFileSync(path.join(__dirname, 'docs', 'style.css'), result.css.toString());
    console.log(`[SUCCESS] docs/style.css mis à jour pour le Jour ${day}.`);
});