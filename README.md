# Portfolio de Jaonina Arlandot Ramanarintsoa

Site personnel statique publié sur GitHub Pages : [arlandot2.github.io](https://arlandot2.github.io/).

## Contenu

Le site présente le profil, les compétences, deux captures de projets, le parcours et un moyen de contact. Il est rédigé en français et fonctionne sans étape de compilation. Le menu mobile et le choix de thème utilisent un petit script JavaScript local.

## Lancer le site localement

Ouvrir `index.html` dans un navigateur suffit. Pour reproduire les conditions de publication avec un serveur local :

```sh
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Structure

- `index.html` : contenu, métadonnées et structure de la page.
- `style.css` : mise en page, adaptation mobile, thèmes clair et sombre.
- `script/script.js` : menu mobile, thème enregistré localement et année du pied de page.
- `images/ville.png` : portrait.
- `images/portfolio/portfolioDash.PNG` et `portfolioFacture.PNG` : captures de projets.

Les autres feuilles de style, images et scripts hérités du premier portfolio restent dans le dépôt mais ne sont pas chargés par la page actuelle.

## Mettre à jour le portfolio

1. Modifier les textes et les dates dans `index.html`. Les informations de formation et d'expérience reprennent l'ancienne version et doivent être confirmées avant une publication professionnelle.
2. Pour ajouter un projet, dupliquer une carte dans la section `#projets` et renseigner un titre, une description précise, une capture avec texte alternatif et, si disponible, un lien vers le code ou une démonstration.
3. Remplacer les captures dans `images/portfolio/` si une version plus récente existe. Les liens actuels ouvrent seulement les images, aucune démonstration en ligne n'est annoncée.
4. Modifier l'adresse e-mail dans les deux liens `mailto:` de `index.html` si nécessaire.
5. Si un CV à jour est ajouté au dépôt, créer ensuite un lien de téléchargement vers ce fichier.

## Publication

Le dépôt est celui d'un site utilisateur GitHub Pages. Une fois les changements validés et envoyés sur la branche configurée pour Pages, GitHub publie les fichiers statiques. Aucune clé API ni service de formulaire n'est nécessaire : le bouton de contact ouvre le logiciel de messagerie du visiteur.
