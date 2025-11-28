# Guide de publication sur le Chrome Web Store

## Étape 1 : Créer un compte développeur

1. Allez sur [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
2. Connectez-vous avec votre compte Google
3. Acceptez les conditions d'utilisation
4. Payez les frais d'inscription unique de 5 USD
5. Remplissez les informations de votre compte développeur

## Étape 2 : Préparer le package

1. **Créer un fichier ZIP** de l'extension contenant :
   - `manifest.json`
   - `popup.html`
   - `popup.css`
   - `popup.js`
   - `icon16.png`
   - `icon48.png`
   - `icon128.png`

   ⚠️ **Important** : NE PAS inclure :
   - `README.md`
   - `STORE_DESCRIPTION.md`
   - `PRIVACY_POLICY.md`
   - `PUBLICATION_GUIDE.md`
   - Dossiers `.git` ou `node_modules`

2. **Créer le ZIP sous Windows** :
   - Sélectionnez les 7 fichiers nécessaires
   - Clic droit → Envoyer vers → Dossier compressé
   - Nommez-le `search-bookmarks.zip`

## Étape 3 : Préparer les images promotionnelles

Le Chrome Web Store demande des captures d'écran :

### Screenshots (OBLIGATOIRE)
- **Taille** : 1280x800 ou 640x400 pixels
- **Format** : PNG ou JPEG
- **Nombre** : Au moins 1, maximum 5
- **Contenu** : Montrer l'extension en action

**À faire** :
1. Installez l'extension en mode développeur
2. Ouvrez la popup de l'extension
3. Faites une capture d'écran
4. Redimensionnez à 1280x800 avec un outil comme Paint, GIMP ou Photoshop

### Image promotionnelle (OPTIONNEL mais recommandé)
- **Small promo tile** : 440x280 pixels
- Permet de mettre en avant l'extension

## Étape 4 : Publier l'extension

1. **Aller sur le Developer Dashboard**
   - [https://chrome.google.com/webstore/devconsole/](https://chrome.google.com/webstore/devconsole/)

2. **Cliquer sur "New Item"**

3. **Upload du ZIP**
   - Glissez-déposez `search-bookmarks.zip`
   - Attendez la validation (quelques secondes)

4. **Remplir les informations**

   **Product details** :
   - **Name** : `Search Bookmarks - Recherche rapide dans vos favoris`
   - **Summary** : Copier le résumé court de `STORE_DESCRIPTION.md`
   - **Description** : Copier la description détaillée de `STORE_DESCRIPTION.md`
   - **Category** : `Productivity`
   - **Language** : `French (Français)`

   **Store listing** :
   - **Icon** : Utiliser `icon128.png`
   - **Screenshots** : Upload vos captures d'écran
   - **Small promo tile** : (optionnel)

   **Privacy practices** :
   - **Privacy Policy** :
     - Soit héberger `PRIVACY_POLICY.md` en ligne (GitHub Pages, site perso)
     - Soit créer une page web simple avec le contenu
     - Coller l'URL dans le champ

   **Distribution** :
   - **Visibility** : `Public` ou `Unlisted` (selon votre préférence)
   - **Regions** : Tous les pays ou sélection spécifique

5. **Submit for review**
   - Cliquez sur "Submit for review"
   - Le processus de validation prend généralement quelques heures à quelques jours

## Étape 5 : Attendre la validation

- Google va examiner votre extension
- Vous recevrez un email quand elle sera approuvée ou refusée
- En cas de refus, des explications seront fournies

## Étape 6 : Publication

Une fois approuvée :
- L'extension sera visible sur le Chrome Web Store
- Vous obtiendrez une URL permanente : `https://chrome.google.com/webstore/detail/[ID]`
- Les utilisateurs pourront l'installer normalement

## Conseils supplémentaires

### Pour héberger la politique de confidentialité gratuitement :

**Option 1 : GitHub Pages**
1. Créez un repo GitHub public
2. Ajoutez `PRIVACY_POLICY.md`
3. Activez GitHub Pages dans les settings
4. URL : `https://[votre-username].github.io/[repo-name]/PRIVACY_POLICY.html`

**Option 2 : GitHub Gist**
1. Créez un Gist public avec `PRIVACY_POLICY.md`
2. URL : `https://gist.github.com/[username]/[gist-id]`

**Option 3 : Copier-coller simple**
- Créez une page HTML basique
- Hébergez-la sur un service gratuit (Netlify, Vercel, etc.)

### Mises à jour futures

Pour mettre à jour l'extension :
1. Incrémentez la version dans `manifest.json` (ex: 1.0.0 → 1.0.1)
2. Créez un nouveau ZIP
3. Uploadez-le dans le Dashboard
4. Submit for review

### Statistiques

Le Dashboard vous permet de voir :
- Nombre d'installations
- Nombre d'utilisateurs actifs
- Notes et avis
- Rapports de crash (s'il y en a)

## Checklist finale

Avant de soumettre, vérifiez :

- ✅ Compte développeur créé et payé
- ✅ ZIP créé avec les 7 fichiers nécessaires uniquement
- ✅ Screenshots préparés (1280x800)
- ✅ Description copiée depuis `STORE_DESCRIPTION.md`
- ✅ Politique de confidentialité hébergée en ligne
- ✅ Catégorie et langue définies
- ✅ Extension testée en local

Bonne chance pour la publication ! 🚀
