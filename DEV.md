# 🚀 Aide-mémoire développeur

## Localhost & environnements
- Angular (client) : http://localhost:4200
- API Express (server) : http://localhost:3000
- Swagger (API docs) : http://localhost:3000/api-docs

## Outils & commandes rapides
- Lancer le client : `npm start` (dans /client)
- Lancer le serveur : `npm run dev` (dans /server)
- Build Angular : `npm run build` (dans /client)
- Lint TypeScript : `npm run lint` (dans /client)
- Lint SCSS : `npm run lint:css` (dans /client)
- Fix SCSS auto : `npm run lint:css:fix`

## Fichiers de config utiles
- ESLint : `.eslintrc.cjs`
- Stylelint : `stylelint.config.cjs`
- Prettier : `.prettierrc` (ou section `prettier` dans package.json)
- Proxy Angular : `proxy.conf.json`

## Notes
- Utiliser **BEM** pour les classes CSS.
- Toujours passer les lints avant commit.
