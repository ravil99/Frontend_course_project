# "MindHelp" application

This SvelteKit app was developed as a course project for **Frontend Web Development** course in Innopolis University. Fall 2022.

## Desctiption

This Single Page Application fetches free ML-APIs for text (text sentiment analysis, question answerer) and image (image blurring, object detection) processing. Only authorized user can get access for the application. Authentification was implemented via Firebase.

## How to run

### Development version

`git clone * `

`npm install`

`npm run dev`

### Production version

Unfortunately, we experienced certain problems during Github Pages deployment: conflict of API fetching part and **adapter-static**.Development version works with **adapter-node/auto**, but such version can't be hosted on Pages. This might be fixed in the future.

Right now, Pages link leads to an early version of this web application.

## Team and contributions

- **Ravil Akhmetzhanov** (https://github.com/ravil99) - Infrastructure (SvelteKit, Github Actions, ESLint, Prettier), Layout and Home page.
- **Aigerim Gilmanova** (https://github.com/aigerimu) - Image blurring and detection pages, Husky, Authentification using Firebase.
- **Guzel Safiullina** (https://github.com/guzelsafiullina) - Testing, text analysis, question answerer, about pages.
