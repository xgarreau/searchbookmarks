# Search Bookmarks - Extension Brave/Chrome

Extension pour rechercher rapidement dans tous vos bookmarks avec une interface intuitive.

## Fonctionnalités

- 🔍 Recherche instantanée dans tous vos bookmarks
- 📝 Recherche dans les titres, URLs et chemins de dossiers
- ✨ Surlignage des termes recherchés
- 🎯 Navigation rapide en un clic
- 📊 Compteur de résultats
- 🎨 Interface moderne et épurée

## Installation

### Méthode 1 : Mode développeur (recommandé)

1. Ouvrez Brave (ou Chrome)
2. Allez dans `brave://extensions/` (ou `chrome://extensions/`)
3. Activez le "Mode développeur" en haut à droite
4. Cliquez sur "Charger l'extension non empaquetée"
5. Sélectionnez le dossier `searchbookmarks`
6. L'extension est maintenant installée !

### Méthode 2 : Empaqueter l'extension

1. Allez dans `brave://extensions/`
2. Activez le "Mode développeur"
3. Cliquez sur "Empaqueter l'extension"
4. Sélectionnez le dossier `searchbookmarks`
5. Un fichier `.crx` sera créé que vous pourrez installer

## Utilisation

1. Cliquez sur l'icône de l'extension dans la barre d'outils
2. Tapez votre recherche dans le champ de texte
3. Les résultats s'affichent en temps réel
4. Cliquez sur un bookmark pour l'ouvrir dans un nouvel onglet
5. Appuyez sur Échap pour effacer la recherche

## Structure du projet

```
searchbookmarks/
├── manifest.json       # Configuration de l'extension
├── popup.html         # Interface utilisateur
├── popup.css          # Styles
├── popup.js           # Logique de recherche
├── icon16.png         # Icône 16x16
├── icon48.png         # Icône 48x48
├── icon128.png        # Icône 128x128
└── README.md          # Ce fichier
```

## Technologies utilisées

- HTML5
- CSS3
- JavaScript (ES6+)
- Chrome Extensions API (Bookmarks API)

## Permissions requises

- `bookmarks` : Pour accéder à vos bookmarks et les rechercher

## Compatibilité

- Brave Browser
- Google Chrome
- Microsoft Edge
- Tous les navigateurs basés sur Chromium

## Licence

Libre d'utilisation et de modification.
