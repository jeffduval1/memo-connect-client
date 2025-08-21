# 🧠 Memo-Connect – Client Angular

> Application de révision collaborative construite avec Angular & Express.js  
> Interface web moderne, API REST, architecture modulaire, évolution en cours.

---

## 🚀 Présentation

**Memo-Connect** est une application de gestion de cartes de révision, pensée pour l’apprentissage actif en solo ou en collaboration.  
Ce dépôt contient le **frontend Angular** de l’application. Le backend Express se trouve dans le dossier `/server`.

L’interface est conçue pour être rapide, responsive et extensible, avec une API REST maison, des filtres dynamiques, une UX adaptée mobile/desktop, et des composants modulaires.

> 🛠️ Ce projet est en développement continu. Des fonctionnalités sont encore en cours d’implémentation, et l’architecture peut évoluer. N’hésitez pas à suivre son avancement ou proposer des contributions !

---

## 🧱 Stack technique

- **Frontend :** Angular 17+ (CLI), TypeScript, SCSS, architecture modulaire
- **Backend :** Express.js (Node.js), API REST
- **Stockage :** MongoDB (à venir), JSON temporaire, IndexedDB côté client
- **Tests :** Karma (unitaires), framework e2e à définir
- **Outils :** Angular CLI, Git, Postman, ESLint, Stylelint

---

## 🛠️ Installation

# 🚀 Démarrage rapide

## 1. **Cloner le projet**

```bash
git clone https://github.com/ton-utilisateur/memo-connect.git
cd memo-connect
```

## 2. **Installer les dépendances**

Installer les dépendances du projet (client et serveur) :

```bash
npm install
cd client
npm install
cd ..
```

## 3. **Lancer le backend (Express)**

Depuis la racine du projet :

```bash
node server/server.js
```

Le serveur Express sera accessible à l’adresse :  
`http://localhost:3000`

## 4. **Lancer le frontend (Angular)**

Dans un autre terminal :

```bash
cd client
ng serve
```

L’application Angular sera accessible à l’adresse :  
`http://localhost:4200`

## 5. **Structure du projet**

Voici l’arborescence générale du projet :

```
memo-connect/
├── client/         → Application Angular
│   └── src/        → Composants, services, pages, etc.
├── server/         → Backend Express
│   ├── routes/     → Fichiers de routage API (ex: cards.routes.js)
│   └── server.js   → Point d'entrée du serveur
├── README.md
└── package.json
```

## 6. **API Express (Backend)**

L’API Express fournit des routes pour manipuler les données des cartes.  
Exemple :

- `GET /api/cards` → Retourne un message de bienvenue ou la liste des cartes (selon implémentation).
- D’autres routes (POST, PUT, DELETE) sont à ajouter selon les besoins.

## 7. **Tests et développement**

Le projet est en cours de construction. Des tests unitaires et end-to-end pourront être ajoutés avec :

```bash
# Tests unitaires Angular
cd client
ng test

# Tests end-to-end (si implémentés)
ng e2e
```
## 🎨 Lint CSS / SCSS

Le projet utilise [Stylelint](https://stylelint.io/) avec la config `stylelint-config-standard-scss`
pour assurer la cohérence et la qualité du SCSS.

### Commandes

- Vérifier le code SCSS :
  ```bash
  npm run lint:css