# Portfolio de Jaonina Arlandot Ramanarintsoa

Site personnel statique publié sur GitHub Pages : [arlandot2.github.io](https://arlandot2.github.io/).

## Objectif

Ce portfolio présente un profil de développeur full stack et coordinateur de projet web, avec une orientation claire : création, amélioration et maintenance de solutions web sur mesure pour accompagner l'évolution des entreprises.

Le contenu public est volontairement sélectif. Le site ne reprend pas tout le CV : il met en avant le positionnement, les services, les réalisations principales, le parcours, les compétences, le CV PDF et les moyens de contact.

## Structure publique

- `index.html` : contenu, structure de la page et métadonnées.
- `assets/css/style.css` : mise en page, responsive, thèmes clair/sombre et animations.
- `assets/script/script.js` : menu mobile, thème, année dynamique et interactions légères.
- `assets/images/Arlandot.png` : photo principale.
- `assets/images/portfolio/portfolioDash.PNG` : capture liée au projet data.
- `assets/images/portfolio/portfolioFacture.PNG` : capture liée au projet e-Pharma.
- `assets/doc/cv-jaonina-arlandot.pdf` : CV public téléchargeable.

## Documents de travail

- `doc/` contient les notes, wireframes, validations et sources de travail.
- `doc/` est ignoré par Git et ne doit pas être publié.
- Les documents sources du CV restent dans `doc/`.

## Parcours utilisateur

Le site guide le visiteur dans cet ordre :

1. Comprendre qui est Arlandot et ce qu'il propose.
2. Identifier les services utiles pour une entreprise.
3. Voir les réalisations principales.
4. Consulter les projets complémentaires.
5. Comprendre le parcours professionnel.
6. Scanner les compétences par familles.
7. Télécharger le CV si besoin.
8. Contacter Arlandot.

## Lancer le site localement

Ouvrir `index.html` dans un navigateur suffit. Pour reproduire les conditions de publication avec un serveur local :

```sh
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Mise à jour

1. Modifier les textes principaux dans `index.html`.
2. Garder les sections courtes et orientées visiteur : besoin, solution, valeur, preuves.
3. Ajouter les nouvelles images publiques dans `assets/images/`.
4. Remplacer le CV public dans `assets/doc/cv-jaonina-arlandot.pdf`.
5. Garder les brouillons, sources et documents non publics dans `doc/`.

## Publication

Le dépôt correspond à un site utilisateur GitHub Pages. Après validation, commit et push sur la branche configurée pour Pages, GitHub publie les fichiers statiques.

