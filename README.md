# [vue-threejs-first-app](https://github.com/sctlcd/vue-threejs-first-app)

<br />
<img src="https://github.com/sctlcd/vue-threejs-first-app/blob/main/design/vue-threejs-first-app-preview.png" alt="vue-threejs-first-app" width="800">
<br />

---

# Table of Contents <a name="tableOfContents"></a>

1. [Introduction](#introduction)

2. [Run the project locally](#runLocally)

3. [Available Scripts](#availableScripts)

4. [Deployment](#deployment)

   - [Deployment – Run locally](#deploymentRunLocallydeploymentRunLocally)
   - [Deployment – Live website](#deploymentLiveWebsite)

5. [Credits](#credits)

   - [Media](#media)

---

## Introduction <a name="introduction"></a>

Back to [top](#tableOfContents)

---

## Run the project locally <a name="#runLocally"></a>

- Runs the app in the development mode.\
  Open http://localhost:8081 to view it in the browser.
  ```
  cd vue-threejs-first-app
  npm i
  npm run serve
  ```

Back to [top](#tableOfContents)

---

## Available Scripts

In the project directory, you can run:

#### `npm run serve`

Runs the app in the development mode.\
Open [http://localhost:8081](http://localhost:8081/) to view it in your browser.

The page will reload when you make changes in development (hot-reloads).\
You may also see any lint errors in the console.

#### `npm run build`

Compiles and minifies for production

#### `npm run lint`

Lints and fixes files

Back to [top](#tableOfContents)

---

## Deployment <a name="#deployment"></a>

### Deployment – Run locally <a name="#deploymentRunLocally"></a>

1. Prerequisite:
   - Make sure [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) are installed on your computer. You can download both at nodejs.org (NPM is included in your Node installation).
   - Please see `.nvmrc` file at the root of `vue-threejs-first-app` repo.
   - Using nvm, a Node Version Manager is recommended as it helps you manage and switch between different Node versions with ease. It provides a command-line interface where you can install different versions with a single command, set a default, switch between them, etc.
   - Installing the Vue CLI
     ```
     npm install -g @vue/cli
     ```
2. In GitHub click on the repository nammed [vue-threejs-first-app](https://github.com/sctlcd/vue-threejs-first-app)
3. Clone the repository locally. Run

   ```
   git clone https://github.com/sctlcd/vue-threejs-first-app.git
   ```

4. Install all modules listed as dependencies in package.json

   ```
   cd vue-threejs-first-app
   npm i
   ```

   note: in this app

   - [three](https://www.npmjs.com/package/three) - **JavaScript 3D library**

5. Runs the app in the development mode.
   Open http://localhost:8081 to view it in the browser.
   ```
   cd vue-threejs-first-app
   npm run serve
   ```

Back to [top](#tableOfContents)

---

### Deployment - Live Website <a name="#deploymentLiveWebsite"></a>

[vue-threejs-first-app](https://github.com/sctlcd/vue-threejs-first-app) live website is currently deployed on [Firebase](https://firebase.google.com/) using the `main` branch on GitHub. Once you have the project setup locally, you can proceed to deploy it remotely.

1. Install Firebase CLI Tools, [firebase-tools](https://www.npmjs.com/package/firebase-tools)

   ```
   npm install -g firebase-tools
   ```

2. Create `firebase.json` and `.firebaserc` at the root of your project with the following content:

   `firebase.json`:

   ```
   {
     "hosting": {
       "public": "build",
       "ignore": [],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

   `.firebaserc`:

   ```
   {
     "projects": {
       "default": "<YOUR_FIREBASE_ID>"
     }
   }
   ```

3. After running `npm run build`, deploy using the command `firebase deploy`.

=> live link:

Back to [top](#tableOfContents)

---

## Credits <a name="credits"></a>

### Media <a name="media"></a>

- []() - []() | copyright []()

Back to [top](#tableOfContents)

---
