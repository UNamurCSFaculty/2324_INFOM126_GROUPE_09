# Contribute to PipelineTFM

## Branch managing

### Creation

Each branch must correspond to a **Github issue**. For every issue created, you must add **at least one label** and a description of the work to be done. Some issue **templates** are provided to help you.

### Naming

Every branch must match the following format: `TFM-{ID}`. `{ID}` corresponds to the **issue identifier**.

## Commits

### Message naming

For each commit, the message must match the following format: `{BRANCHE}: {MESSAGE}` (e.g `TFM-1: Added user login page`).

## Pull request

Once the development is completed, the code has to go through a **pull request** and be approved by at least one reviewer before being merged on the `main` branch.

You can add one of these **reviewers** for the code review of your branch:

- [mderycke22](https://github.com/mderycke22)
- [ThibBer](https://github.com/mderycke22)
- [flipflop133](https://github.com/flipflop133)

## Formatting

In order to pass the quality check of your **pull request**, the code has to be compliant regarding the project formatting standards.

You can automatically format the code using these commands:

- For the web application:
  - Format using prettier or the following command: `npm run prettier:format`.
  - You can simply check if the code is compliant by using this command: `npm run prettier:check`.
- For the back-end:
  - Format using the following command: `dotnet format`.
  - You can simply check if the code is compliant by using this command: `dotnet format --verify-no-changes`

## Code quality

On every commit on the `main` branch, a SonarQube instance will be updated with some informations about the code quality (coverage, code smells, quality gate status, bugs, vulnerabilities, etc.)

You can access the project's SonarQube instance [here](https://sonarqube.thibber.be):

- Username: `user`
- Password: `user`

In order to pass the quality gates, you have to meet the following thresholds:

- **Issues**: max. 1
- **Security Hotspot Reviewed**: min. 95%
- **Coverage**: min. 60% (C# back-end only)
- **Duplicated Lines**: max. 3%

## Releases

Every time the `main` branch is updated, the app is deployed [here](https://tfm-ase.thibber.be/). The code documentation is also deployed [here](https://unamurcsfaculty.github.io/2324_INFOM126_GROUPE_09/). A daily build is also triggered on the main branch.
