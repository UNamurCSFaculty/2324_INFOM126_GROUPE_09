[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/UNamurCSFaculty/2324_INFOM126_GROUPE_09/dotnet.yml)](https://github.com/UNamurCSFaculty/2324_INFOM126_GROUPE_09/actions)
[![Quality Gate Status](https://sonarqube.thibber.be/api/project_badges/measure?project=TFM&metric=alert_status&token=sqb_13579984a83999bd2bfbfa7fe8df90892c81fca0)](https://sonarqube.thibber.be)
[![Bugs](https://sonarqube.thibber.be/api/project_badges/measure?project=TFM&metric=bugs&token=sqb_13579984a83999bd2bfbfa7fe8df90892c81fca0)](https://sonarqube.thibber.be)
[![Coverage](https://sonarqube.thibber.be/api/project_badges/measure?project=TFM&metric=coverage&token=sqb_13579984a83999bd2bfbfa7fe8df90892c81fca0)](https://sonarqube.thibber.be)
[![Code Smells](https://sonarqube.thibber.be/api/project_badges/measure?project=TFM&metric=code_smells&token=sqb_13579984a83999bd2bfbfa7fe8df90892c81fca0)](https://sonarqube.thibber.be)
[![Maintainability Rating](https://sonarqube.thibber.be/api/project_badges/measure?project=TFM&metric=sqale_rating&token=sqb_13579984a83999bd2bfbfa7fe8df90892c81fca0)](https://sonarqube.thibber.be)

# PipelineTFM

![TFM demo](./docs/images/tfm_demo.gif)

## Introduction

PipelineTFM is a simple guest book application based on a template generated using JHipster 8.0.0 and JHipster .Net Core. You can find documentation and help at https://jhipsternet.readthedocs.io/en/latest/index.html and [https://www.jhipster.tech/documentation-archive/v8.0.0](https://www.jhipster.tech/documentation-archive/v8.0.0).

## Prerequisites

In order to run the project, make sure you have these tools installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [.NET 7.0](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)
- [Docker](https://www.docker.com/products/docker-desktop/)
- [Angular CLI](https://github.com/angular/angular-cli)
- Jetbrains Rider or Visual Studio

## Project setup

1. Clone the repository

```
git clone https://github.com/UNamurCSFaculty/2324_INFOM126_GROUPE_09.git
```

2. Install Node dependencies in the root folder and in `src/PipelineTFM/ClientApp`

```
npm install
cd src/PipelineTFM/ClientApp
npm install
```

3. Deploy the PostgreSQL database Docker container

```
docker compose -f docker/postgresql.yml -p pipelinetfm up -d
```

4. Open the solution in Jetbrains Rider or Visual Studio

5. Run the `PipelineTFM: PipelineTFM-LivreBronzeApp` configuration

![Project app configuration](./docs/images/run_app_profile.png)

## Testing

### Client tests

Unit tests are run by Jest. They're located in [src/PipelineTFM/ClientApp/test/](src/PipelineTFM/ClientApp/test/) and can be run with:

```
npm test
```

### .NET Backend tests

To launch application's tests, run:

```
dotnet test --verbosity normal
```

## Code style / formatting

To format the dotnet code, run

```
dotnet format
```

## Code quality

By Script :

1. Run Sonar in container : `docker compose -f ./docker/sonar.yml up -d`

2. Wait container was up Run `SonarAnalysis.ps1` and go to http://localhost:9001

Manually :

1. Run Sonar in container : `docker compose -f ./docker/sonar.yml up -d`

2. Install sonar scanner for .net :

`dotnet tool install --global dotnet-sonarscanner`

3. Run ``dotnet sonarscanner begin /d:sonar.login=admin /d:sonar.password=admin /k:"PipelineTFM" /d:sonar.host.url="http://localhost:9001" /s:"`pwd`/SonarQube.Analysis.xml"``

4. Build your application : `dotnet build`

5. Publish sonar results : `dotnet sonarscanner end /d:sonar.login=admin /d:sonar.password=admin`

6. Go to http://localhost:9001

## Building for production

### .NET Production builds

To build the artifacts and optimize the PipelineTFM application for production, run:

```
cd ./src/PipelineTFM
rm -rf ./src/PipelineTFM/wwwroot
dotnet publish --verbosity normal -c Release -o ./app/out ./PipelineTFM.csproj
```

The `./src/PipelineTFM/app/out` directory will contain your application dll and its depedencies.

### Build a Docker image

You can also fully dockerize the application and all the services that it depends on. To achieve this, first build a docker image of your app by running:

```bash
docker build -f ./Dockerfile-Back -t pipelinetfm .
```

Then run:

```bash
docker run -p 8080:80 pipelinetfm
```

Or you can simply run :

```bash
docker compose -f .\docker\app.yml build
```

And

```bash
docker compose -f .\docker\app.yml up
```

## Further Documentation and Resources

For more detailed documentation on our project, visit our [documentation page](https://unamurcsfaculty.github.io/2324_INFOM126_GROUPE_09/). Here, you'll find comprehensive guides, API references, and other resources to help you understand and work with our project effectively.
