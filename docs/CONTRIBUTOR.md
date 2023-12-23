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

## Couverture du code

Avant de pouvoir être fusionnée sur la branche `main`, votre branche doit passer tous les tests et le code back-end doit être couvert à **70% minimum**.

Voici comment obtenir la couverture de code!

## Formattage

Avant de pouvoir être fusionné sur la branche `main`, votre code doit respecter les standards du projet concernant le formattage. Ce formattage peut être effectué grâce à des commandes.

- Pour l'application web: le formattage du code peut être effectué avec l'extension Prettier ou la commande `npm run prettier:format`. Le formattage du code peut être simplement vérifié à l'aide de la commande `npm run prettier:check`.
- Pour le back-end: le formattage du code peut être effectué avec la commande `dotnet format`. Le formattage du code peut être simplement vérifié à l'aide de la commande `dotnet format --verify-no-changes`

## Qualité du code

Le repository contient des fichiers vous permettant de déployer votre instance Docker de SonarQube en local. Celle-ci vous permettra notamment de vérifier la **couverture de code**, mais aussi d'obtenir une vue sur les différents code smells.

Tout d'abord, instanciez un conteneur Docker pour Sonar `docker compose -f ./docker/sonar.yml up -d`

Si vous utilisez Windows, vous pouvez exécuter le script `SonarAnalysis.ps1`

Sinon, suivez les étapes suivantes:

1. Installez Sonar Scanner pour l'environnement .NET `dotnet tool install --global dotnet-sonarscanner`
2. Exécutez la commande ``dotnet sonarscanner begin /d:sonar.login=admin /d:sonar.password=admin /k:"PipelineTFM" /d:sonar.host.url="http://localhost:9001" /s:"`pwd`/SonarQube.Analysis.xml"``
3. Lancez un build de l'application `dotnet build`
4. Publiez les résultats sur Sonar `dotnet sonarscanner end /d:sonar.login=admin /d:sonar.password=admin`
5. Rendez-vous à l'adresse http://localhost:9001

## Releases
