// server.js

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Utilisation du middleware express.static
// Ceci sert tous les fichiers du répertoire 'docs/' directement.
// Ex: docs/index.html est accessible via http://localhost:3000/index.html
app.use(express.static(path.join(__dirname, 'docs')));

// Route d'accueil (optionnel, mais assure que l'index.html est bien servi)
app.get('/', (req, res) => {
    // Si express.static est configuré, Express servira automatiquement index.html
    // s'il existe dans le répertoire statique.
    res.sendFile(path.join(__dirname, 'docs', 'index.html'));
});

app.listen(port, () => {
    console.log(`🚀 Serveur CVNU RPG 1D démarré.`);
    console.log(`Le répertoire statique 'docs/' est servi.`);
    console.log(`Accès: http://localhost:${port}/`);
});