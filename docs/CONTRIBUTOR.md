# Contribuer au projet PipelineTFM

## Gestion des branches

### Création

Chaque branche doit correspondre à un **issue** GitHub. Pour chaque issue créé, il est demandé d'ajouter **au moins un label** correspondant ainsi qu'une **description** précise. Des templates sont mis à disposition pour vous aider à compléter votre issue.

### Nommage

Chaque branche créée doit suivre le format suivant: `TFM-{ID}`, `{ID}` étant un nombre représentant l'identifiant de **l'issue**.

## Commits

### Nommage des messages

Pour chaque commit, le message doit suivre le format suivant: `{BRANCHE}: {MESSAGE}`. Par exemple: `TFM-1: Added user login page`.

## Pull request

Une fois le développement terminé, le code doit passer par une **pull request** et être validée par au moins 1 reviewer avant d'être merge sur la branche principale `main`.

Pour effectuer la **code review**, vous pouvez ajouter l'un des reviewers suivants:

- [mderycke22](https://github.com/mderycke22)
- [ThibBer](https://github.com/mderycke22)
- [flipflop133](https://github.com/flipflop133)

## Formattage

Avant de pouvoir être fusionné sur la branche `main`, votre code doit respecter les standards du projet concernant le formattage. Ce formattage peut être effectué grâce à des commandes.

- Pour l'application web: le formattage du code peut être effectué avec l'extension Prettier ou la commande `npm run prettier:format`. Le formattage du code peut être simplement vérifié à l'aide de la commande `npm run prettier:check`.
- Pour le back-end: le formattage du code peut être effectué avec la commande `dotnet format`. Le formattage du code peut être simplement vérifié à l'aide de la commande `dotnet format --verify-no-changes`

## Qualité du code

À chaque commit sur master, une instance SonarQube sera mise à jour avec diverses informations (coverage, code smells, statut de la quality gate, bugs, vulnérabilités, etc.)

Vous pouvez accéder à SonarQube depuis le lien suivant http://thibber.duckdns.org:3456

- Nom d'utilisateur: `user`
- Mot de passe: `user`

Afin de passer les quality gates, les seuils suivants sont définis:

- **Issues**: pas plus de 0
- **Problème de sécurités revus (Security Hotspot Reviewed)**: 100%
- **Couverture du code (Coverage)**: minimum 60%
- **Lignes dipliquées (Duplicated Lines)**: maximum 3%

## Releases

À chaque push sur la branche `main`, l'application est déployée et [rendue accessible](http://thibber.duckdns.org).

La documentation est également déployée et [mise à disposition](https://unamurcsfaculty.github.io/2324_INFOM126_GROUPE_09/).
