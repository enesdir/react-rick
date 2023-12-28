# React-MultiSelect

This is a project bootstrapped with [`@vitejs/app`](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) (`react-ts`), added [TypeScript][TS-url] setup.

<p align="center">
  <a href="https://github.com/enesdir/react-rick/blob/master/LICENSE.md">
    <img alt="licence-badge" src="https://img.shields.io/badge/license-MIT-brightgreen?color=blue" />
  </a>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/enesdir/react-rick"/>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/enesdir/react-rick"/>
  <a href="https://github.com/enesdir/react-rick/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/enesdir/react-rick?color=blue"/>
  </a>
</p>

<p align="center">
  <a target="_blank" href="https://reactjs.org/">
    <img alt="ReactJS" src="https://img.shields.io/static/v1?color=blue&label=React&message=JS&?style=plastic&logo=React">
  </a>
  <a target="_blank" href="https://vitejs.dev/">
    <img alt="Vite" src="https://img.shields.io/static/v1?color=blue&label=Vite&message=JS&?style=plastic&logo=Vite">
  </a>
  <a target="_blank" href="https://prettier.io/">
    <img alt="prettier-badge" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" />
  </a>
    <a target="_blank" href="http://commitizen.github.io/cz-cli/">
    <img alt="Commitizen friendly-badge" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square" />
  </a>
</p>

<details>
<summary>Table of Contents</summary>

- [React-Multiselect](#react-multiselect)
  - [Features](#features)
  - [Built With](#built-with)
    - [Dependencies](#dependencies)
    - [Dev Dependencies](#dev-dependencies)
  - [Installation \& Usage](#installation--usage)
    - [Prerequisites](#prerequisites)
    - [Install](#install)
    - [Commands](#commands)
  - [License](#license)

</details>

## Features

This project setup will include following features.

- ⚡ Blazing fast dev server and build
- 🔗 Route management added (`react-router-dom` configured)
- 🧙‍♂️ Developer experience improved with ESLint, Prettier and Husky
- 📈 Absolute Import and Path Alias — Import components using `@/` and `~/` prefix
- 🤖 Conventional Commit Lint — Make sure you & your teammates follow conventional commit
- ▲ Netlify and Vercel deployment configurations

## Built With

[![Vite][Vite]][Vite-url] [![React][React.js]][React-url]

### Dependencies

| Package            | Description                                    |
| ------------------ | :--------------------------------------------- |
| [React][React-url] | The library for web and native user interfaces |

### Dev Dependencies

| Package                                        | Description                                                                                                                 |
| ---------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| [Vite][Vite-url]                               | Next generation frontend tooling. It's fast!                                                                                |
| [Typescript][TS-url]                           | TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.                                             |
| [Husky][Husky-url]                             | Git hook management                                                                                                         |
| [Conventional Commit][Conventional-Commit-url] | A specification for adding human and machine readable meaning to commit messages.                                           |
| [Commitlint][Commitlint-url]                   | Lint commit messages                                                                                                        |
| [Commitizen][Commitizen-url]                   | Using a standardized set of rules to write commits, makes commits easier to read, and enforces writing descriptive commits. |
| [Lint Staged][Lint-Staged-url]                 | Run linters against staged git files and don't let 💩 slip into your code base!                                             |
| [ESLint][ESLint-url]                           | A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.                                       |
| [Prettier][Prettier-url]                       | An opinionated code formatter                                                                                               |
| [million][million-url]                         | The Virtual DOM Replacement for React. Gain big performance wins for UI and data heavy React apps.                          |
| [vite-plugin-pwa][vite-pwa-url]                | Zero-config PWA Framework-agnostic Plugin for Vite                                                                          |

## Installation & Usage

### Prerequisites

- node >=18.4.0
- npm >=9.x.x

### Install

Create the project.

```bash
git clone https://github.com/enesdir/react-rick.git
```

Access the project directory.

```bash
cd react-multiselect
```

Install dependencies.

```bash
npm install
```

Serve with hot reload at <http://localhost:3000>.

```bash
npm run dev # start development server
```

### Commands

| Command                   | Description                                     |
| ------------------------- | :---------------------------------------------- |
| `npm run dev`             | Starts the server in dev mode                   |
| `npm run lint`            | Runs ESLint on the project                      |
| `npm run lint:fix`        | Runs Prettier on entire src folder              |
| `npm run prettier:verify` | Runs Prettier-check and throws error if fails   |
| `npm run lint-staged`     | Runs Prettier on only staged (changed) files    |
| `npm run type-check`      | Runs TSC                                        |
| `npm run build`           | Runs build production bundle to 'dist' directly |
| `npm run preview`         | Runs start production server                    |

## License

This project uses MIT license: [License](https://github.com/enesdir/react-rick/blob/master/LICENSE.md)

<!-- MARKDOWN LINKS & IMAGES -->

[Vite]: https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TS-url]: https://www.typescriptlang.org/
[Husky-url]: https://typicode.github.io/husky/
[Conventional-Commit-url]: https://www.conventionalcommits.org/
[Commitlint-url]: https://commitlint.js.org/#/
[ESLint-url]: https://eslint.org/
[Prettier-url]: https://prettier.io/
[Commitizen-url]: https://commitizen-tools.github.io/commitizen/
[Lint-Staged-url]: https://github.com/okonet/lint-staged#readme
[million-url]: https://github.com/aidenybai/million
[vite-pwa-url]: https://github.com/vite-pwa/vite-plugin-pwa
