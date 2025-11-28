# Politique de confidentialité - Search Bookmarks

**Dernière mise à jour : 28 novembre 2025**

## Introduction

Search Bookmarks (ci-après "l'Extension") est une extension de navigateur conçue pour vous aider à rechercher rapidement dans vos bookmarks. Nous prenons votre confidentialité très au sérieux.

## Collecte de données

**L'Extension ne collecte AUCUNE donnée personnelle.**

Spécifiquement :
- ❌ Aucune donnée n'est collectée
- ❌ Aucune donnée n'est transmise à des serveurs externes
- ❌ Aucune donnée n'est vendue ou partagée avec des tiers
- ❌ Aucun tracker ou système d'analyse n'est utilisé
- ❌ Aucun cookie n'est créé ou utilisé

## Permissions utilisées

L'Extension demande les permissions suivantes :

### Permission "bookmarks"
- **Pourquoi ?** Pour lire vos bookmarks et permettre la recherche
- **Comment ?** Lecture seule de la liste de vos favoris localement
- **Où ?** Toutes les données restent dans votre navigateur
- **Modification ?** L'Extension ne modifie jamais vos bookmarks

## Traitement des données

Toutes les opérations de l'Extension se font **localement dans votre navigateur** :

1. **Lecture des bookmarks** : Vos favoris sont lus directement depuis votre navigateur
2. **Recherche** : La recherche s'effectue localement en JavaScript
3. **Affichage** : Les résultats sont affichés uniquement dans la popup de l'Extension
4. **Navigation** : Cliquer sur un résultat ouvre simplement l'URL dans un nouvel onglet

**Aucune donnée ne quitte votre appareil.**

## Favicons

L'Extension affiche les favicons (icônes de sites) en utilisant le service public de Google :
`https://www.google.com/s2/favicons?domain=[domaine]`

Cette requête contient uniquement le nom de domaine du site (pas le titre du bookmark, ni l'URL complète). C'est une fonctionnalité standard utilisée par de nombreuses extensions.

Si vous préférez ne pas utiliser ce service, vous pouvez modifier le code source de l'Extension.

## Stockage local

L'Extension n'utilise aucun système de stockage (localStorage, chrome.storage, etc.). Toutes les données sont chargées à la demande depuis l'API Bookmarks du navigateur.

## Mises à jour

Cette politique de confidentialité peut être mise à jour occasionnellement. Toute modification sera reflétée dans la date "Dernière mise à jour" en haut de ce document.

## Code source

L'Extension est open-source et son code peut être inspecté à tout moment :
- Via les outils de développement de votre navigateur
- En consultant les fichiers de l'Extension dans `brave://extensions/`

## Conformité RGPD

L'Extension est conforme au RGPD (Règlement Général sur la Protection des Données) car :
- Aucune donnée personnelle n'est collectée
- Aucun traitement de données n'est effectué en dehors de votre appareil
- Vous gardez un contrôle total sur vos données

## Contact

Si vous avez des questions concernant cette politique de confidentialité, vous pouvez :
- Laisser un avis sur la page de l'Extension
- Ouvrir une issue sur le dépôt GitHub (si applicable)

## Résumé

**En bref :**
- ✅ Tout fonctionne localement
- ✅ Aucune collecte de données
- ✅ Aucune transmission réseau (sauf favicons)
- ✅ Code vérifiable
- ✅ Respecte votre vie privée

Vous pouvez utiliser Search Bookmarks en toute confiance.

---

**Version de cette politique :** 1.0
**Date :** 28 novembre 2025
