# README

## Initial Project & Repo Configuration

1. Find & replace `@APP_NAME@` for the actual name of the app within the repo.
2. Run Apex Up locally to create the project on AWS.
3. Configure DNS for prod/staging domains (`up stack` to see CNAME targets)
4. Set all secrets referenced in [`.github/workflows/main.yml`](./.github/workflows/main.yml) on GitHub.
5. Link repo to Forestry.
6. Delete this section (Repo Configuration) in the README.

## Getting Started

First, make sure you have [Node.js](https://nodejs.org/en/) and [Apex Up](https://apex.sh/up/) installed and that you have AWS credentials with the appropriate credentials set up (profile name `apex-arturmuller`). After that, you can perform the following:

```sh
# Install projects dependencies
npm install

# Run the project in development mode
npm run dev

# Deploy to production
up deploy production

# Deploy to production
up deploy production
```

## Folder structure

- `src`: Flat list of TypeScript modules that make up this app.
- `src/content`: Flat list of JSON files that help all text content. Managed though Forestry.
- `public`: Static files that will be publicly accessible.
- `.forestry`: Configuration for Forestry (CMS)
- `.github`: Configuration for GitHub (used for CI/CD)
- `.vscode`: Configuration for VS Code (editor)
