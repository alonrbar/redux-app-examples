# redux-app-examples

Examples of [redux-app](https://github.com/alonrbar/redux-app) with [Angular](https://angular.io), [Aurelia](http://aurelia.io/) and [React](https://reactjs.org/). Pick whatever view framework you like (same BI code used across frameworks)...

[![npm version](https://img.shields.io/npm/v/redux-app-examples.svg)](https://www.npmjs.com/package/redux-app-examples)
[![npm license](https://img.shields.io/npm/l/redux-app-examples.svg)](https://www.npmjs.com/package/redux-app-examples)
[![dependencies](https://david-dm.org/alonrbar/redux-app-examples.svg)](https://github.com/alonrbar/redux-app-examples)
[![dependencies](https://david-dm.org/alonrbar/redux-app-examples/dev-status.svg)](https://github.com/alonrbar/redux-app-examples)

### Installtion

```shell
mkdir redux-app-examples
cd redux-app-examples
git init
git pull https://github.com/alonrbar/redux-app-examples
npm install
```

### Run the examples

After installation run `npm start` and open `localhost:3000` on your browser.

**TypeError: Cannot read property 'used' of null** - If you get this error when calling `npm start` run the following:

```shell
git checkout -- package-lock.json
npm prune
npm start
```

### Examples Source

| Example | Angular | Aurelia | React |
|---------|---------|---------|-------|
| **Counters** - a basic example | [<img src="https://raw.githubusercontent.com/alonrbar/redux-app-examples/HEAD/src/res/angular-icon-1.png" width="30" height="30" />][angular-counters] | [<img src="https://raw.githubusercontent.com/alonrbar/redux-app-examples/HEAD/src/res/aurelia-icon-512x512.png" width="30" height="30" />][aurelia-counters] | [<img src="https://raw.githubusercontent.com/alonrbar/redux-app-examples/HEAD/src/res/600px-React-icon.png" width="30" height="30" />][react-counters] |
| **Counters with Identity** - using the `withId` decorator, a "mini ORM" feature | [<img src="https://raw.githubusercontent.com/alonrbar/redux-app-examples/HEAD/src/res/angular-icon-1.png" width="30" height="30" />][angular-withId] | [<img src="https://raw.githubusercontent.com/alonrbar/redux-app-examples/HEAD/src/res/aurelia-icon-512x512.png" width="30" height="30" />][aurelia-withId] | [<img src="https://raw.githubusercontent.com/alonrbar/redux-app-examples/HEAD/src/res/600px-React-icon.png" width="30" height="30" />][react-withId] |
| **Async Dogs** - using the `sequence` decorator, an async pattern that does not require thunks | [<img src="https://raw.githubusercontent.com/alonrbar/redux-app-examples/HEAD/src/res/angular-icon-1.png" width="30" height="30" />][angular-sequence] | [<img src="https://raw.githubusercontent.com/alonrbar/redux-app-examples/HEAD/src/res/aurelia-icon-512x512.png" width="30" height="30" />][aurelia-sequence] | [<img src="https://raw.githubusercontent.com/alonrbar/redux-app-examples/HEAD/src/res/600px-React-icon.png" width="30" height="30" />][react-sequence] |
| **Todo List** - your familiar todo list example, this time with redux-app | [<img src="https://raw.githubusercontent.com/alonrbar/redux-app-examples/HEAD/src/res/angular-icon-1.png" width="30" height="30" />][angular-todo] | [<img src="https://raw.githubusercontent.com/alonrbar/redux-app-examples/HEAD/src/res/aurelia-icon-512x512.png" width="30" height="30" />][aurelia-todo] | [<img src="https://raw.githubusercontent.com/alonrbar/redux-app-examples/HEAD/src/res/600px-React-icon.png" width="30" height="30" />][react-todo] |
| **Gladiators** - a real world example | [<img src="https://raw.githubusercontent.com/alonrbar/redux-app-examples/HEAD/src/res/angular-icon-1.png" width="30" height="30" />][angular-gladiators] | [<img src="https://raw.githubusercontent.com/alonrbar/redux-app-examples/HEAD/src/res/aurelia-icon-512x512.png" width="30" height="30" />][aurelia-gladiators] | [<img src="https://raw.githubusercontent.com/alonrbar/redux-app-examples/HEAD/src/res/600px-React-icon.png" width="30" height="30" />][react-gladiators] |

[Change Log](https://github.com/alonrbar/redux-app-examples/blob/master/CHANGELOG.md)

[angular-logo]:  =30x30

[angular-counters]: https://github.com/alonrbar/redux-app-examples/tree/master/src/angular/counters
[aurelia-counters]: https://github.com/alonrbar/redux-app-examples/tree/master/src/aurelia/counters
[react-counters]: https://github.com/alonrbar/redux-app-examples/tree/master/src/react/counters
[angular-withId]: https://github.com/alonrbar/redux-app-examples/tree/master/src/angular/withId
[aurelia-withId]: https://github.com/alonrbar/redux-app-examples/tree/master/src/aurelia/withId
[react-withId]: https://github.com/alonrbar/redux-app-examples/tree/master/src/react/withId
[angular-sequence]: https://github.com/alonrbar/redux-app-examples/tree/master/src/angular/sequence
[aurelia-sequence]: https://github.com/alonrbar/redux-app-examples/tree/master/src/aurelia/sequence
[react-sequence]: https://github.com/alonrbar/redux-app-examples/tree/master/src/react/sequence
[angular-todo]: https://github.com/alonrbar/redux-app-examples/tree/master/src/angular/todo
[aurelia-todo]: https://github.com/alonrbar/redux-app-examples/tree/master/src/aurelia/todo
[react-todo]: https://github.com/alonrbar/redux-app-examples/tree/master/src/react/todo
[angular-gladiators]: https://github.com/alonrbar/redux-app-examples/tree/master/src/angular/gladiators
[aurelia-gladiators]: https://github.com/alonrbar/redux-app-examples/tree/master/src/aurelia/gladiators
[react-gladiators]: https://github.com/alonrbar/redux-app-examples/tree/master/src/react/gladiators