# REACT-STARTER-2020

- [x] typescript

- [x] prettier

- [x] tslint

- [x] husky

- [x] commitlint

- [x] sass

- [x] react-router-dom

-  [x] redux

- [x] redux-thunk

- [x] redux-logger

- [x] storybook

- [x] router example

- [x] redux example - typicode

- [x] test example

- [x] tailwind

- [ ] vscode config

- [ ] bootstrap?

## How was this repo setup

1. Create the project

`npm init react-app react-starter-2020 --template typescript`

2. Setup tslint and prettier

`npm i -D tslint prettier tslint-config-prettier tslint-plugin-prettier tslint-react`

Add prettier configs to `package.json`

```json
  "prettier": {
    "printWidth": 120,
    "parser": "typescript",
    "trailingComma": "es5",
    "singleQuote": true
  },
```

Add `tslint.json` to the root folder of project

3. Add husky and commitlint

Install husky and commitlint

`npm i npm install -D @commitlint/{config-conventional,cli} husky`

Add husky config to `package.json`

```json
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "pre-commit": "npm run lint"
    }
  },
```

Add `commitlint.config.js` to the root of project folder.

Note: at this point I had to `npm run lint:fix` because husky won't let me commit without fixing lint errors.

4. Add sass

`npm i node-sass`

5. Add react-router-dom

`npm i react-router-dom @types/react-router-dom`

And then add a file Routes.tsx and move your home component to a route

6. Add redux and redux-thunk

We will also add redux-logger

`npm i redux react-redux @types/react-redux redux-thunk redux-logger @types/redux-logger`

Then add a directory store with index and rootReducer. Also wrap the `App.tsx` in redux `Provider`.

7. Add storybook

`npx -p @storybook/cli sb init`

8. TODO: add how tailwind was added to the repo

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
