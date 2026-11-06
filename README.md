# Claude 101 — Mes fiches de révision

Site de révision personnel du cours **Claude 101** (DataCamp), publié avec GitHub Pages.
Site non officiel, sans lien avec DataCamp ni avec Anthropic.

## Structure

```
claude-101/
├── index.html                 ← Accueil : progression globale + les 4 modules
├── module-1.html … module-4.html  ← Une page par module (leçons + liens vers les fiches)
├── assets/
│   ├── css/style.css          ← Thème commun
│   ├── js/data.js             ← ⭐ LE fichier à modifier (modules, leçons, fiches)
│   ├── js/app.js              ← Affichage (ne pas toucher)
│   └── img/                   ← Logos DataCamp
└── fiches/
    └── module-1/
        └── your-first-conversation.html
```

## Ajouter une nouvelle fiche (3 étapes)

1. Déposer le fichier dans `fiches/module-X/` (ex. `fiches/module-1/the-headline-not-the-novel.html`).
2. Dans `assets/js/data.js`, sur la leçon concernée, ajouter :
   `fiche: "fiches/module-1/the-headline-not-the-novel.html"`
3. Passer `done: true` quand la leçon est terminée sur DataCamp.

La progression et les boutons « Voir la fiche » se mettent à jour automatiquement.

## Statuts affichés

| Statut | Signification |
|---|---|
| 📇 Voir la fiche | Fiche disponible |
| Fiche à faire | Leçon terminée, fiche pas encore créée |
| À venir | Leçon pas encore suivie |
