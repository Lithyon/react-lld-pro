# Location longue durée pro v2

Ce projet a été créé grâce avec [Create React App] et utilise le template [Macif App]

## Préambule

**_Présentation du produit !!!!_**

## Architecture

L'architecture utilisée s'inspire fortement du **M**odèle **V**ue **C**ontrôleur et du **M**odèle **V**ue **P**résenteur.\
Pour plus d'information [voir ici].

## Scripts disponibles

Dans ce projet, vous pouvez lancer les commandes suivantes :

### `npm start`

Lance l'application en mode développement.\
Ouvre [http://localhost:3000] dans le navigateur courant.

La page sera rechargée à chaque changement.\
Il y a aussi les erreurs de constructions dans la console.

### `npm test`

Lance les tests en mode observation.\
Voir aussi la [section sur les tests]

### `npm run build`

Construit l'application pour la production dans le répertoire `build` par défaut.\
Il construit correctement le paquet et applique les optimisations à la construction pour améliorer les performances.

Les fichiers sont minifiés et les noms des scripts ont une clé de hash.\
Cependant, dans le cadre de l'intégration des projets `REACT` dans `JAHIA`, un script vient modifier l'emplacement et le nom des artéfacts pour les rendre accessibles à `JAHIA`.

Pour plus d'information voir la [section déploiement].

### `npm run storybook`

Ouvre [http://localhost:6006] dans le navigateur courant pour accéder à l'interface de storybook.\
L'extension des fichiers pour créer une nouvelle story doit être `*.stories.mdx`.

#### Problèmes rencontrés

- Le livereload de storybook étant capricieux, il faut actualiser manuellement à chaque changement

## Les variables d'environnements

Afin de simplifier vos développements en fonction des contraintes d'environnement, vous pouvez utiliser des variables d'environnement.

Les variables d'environnement sont remplacées au moment du build, à l'exception des variables `NODE_ENV` et `PUBLIC_URL`, les variables doivent
être préfixées de `REACT_APP_`.

### Les fichiers d'ajout de variables d'environnement

`.env`: par défaut => à générer la première fois que vous récupérez le projet\
`.env.local`: variables locales. **Le fichier est utilisé dans tous les environnements sauf en tests**\
`.env.development`, `.env.test`, `.env.production`: Variables utilisés en fonction de l'environnement d'éxecution.\
`.env.development.local`, `.env.test.local`, `.env.production.local`: Variables utilisés en fonction de l'environnement d'éxecution.\

Ordre de priorité des fichiers, l'ordre de priorité se fait de **gauche** à **droite**:

`npm start`: `.env.development.local`, `.env.local`, `.env.development`, `.env`\
`npm run build`: `.env.production.local`, `.env.local`, `.env.production`, `.env`\
`npm test`: `.env.test.local`, `.env.test`, `.env`

Pour plus d'informations voir la [section variable d'environnement].

[Create React App]:<https://create-react-app.dev/>
[Macif App]:<http://gitlab.macif.fr:82/btoc-sites.libs.utils/fmw-react/-/blob/main/cra-template-macif-app/readme.md>
[http://localhost:6006]:<http://localhost:6006>
[http://localhost:3000]:<http://localhost:3000>
[section sur les tests]:<https://create-react-app.dev/docs/running-tests/>
[section déploiement]:<https://create-react-app.dev/docs/deployment/>
[voir ici]:<https://macif.atlassian.net/wiki/spaces/EC/pages/1305936307/Architecture+technique+socle+front>
[section variable d'environnement]:<https://create-react-app.dev/docs/adding-custom-environment-variables>
