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
| **Counters** - a basic example | [Angular][angular-counters] | [Aurelia][aurelia-counters] | - |
| **Counters with Identity** - using the `withId` decorator, a "mini ORM" feature | [Angular][angular-withId] | [Aurelia][aurelia-withId] | - |
| **Async Dogs** - using the `sequence` decorator, an async pattern that does not require thunks | [Angular][angular-sequence] | [Aurelia][aurelia-sequence] | - |
| **Todo List** - your familiar todo list example, this time with redux-app | [Angular][angular-todo] | [Aurelia][aurelia-todo] | [React][react-todo] (Experimental) |
| **Gladiators** - a real world example | [Angular][angular-gladiators] | [Aurelia][aurelia-gladiators] | - |

[Change Log](https://github.com/alonrbar/redux-app-examples/blob/master/CHANGELOG.md)

  [angular-counters]: https://github.com/alonrbar/redux-app-examples/tree/master/src/angular/counters
  [aurelia-counters]: https://github.com/alonrbar/redux-app-examples/tree/master/src/aurelia/counters
  [angular-withId]: https://github.com/alonrbar/redux-app-examples/tree/master/src/angular/withId
  [aurelia-withId]: https://github.com/alonrbar/redux-app-examples/tree/master/src/aurelia/withId
  [angular-sequence]: https://github.com/alonrbar/redux-app-examples/tree/master/src/angular/sequence
  [aurelia-sequence]: https://github.com/alonrbar/redux-app-examples/tree/master/src/aurelia/sequence
  [angular-todo]: https://github.com/alonrbar/redux-app-examples/tree/master/src/angular/todo
  [aurelia-todo]: https://github.com/alonrbar/redux-app-examples/tree/master/src/aurelia/todo
  [react-todo]: https://github.com/alonrbar/redux-app-examples/tree/master/src/react/todo
  [angular-gladiators]: https://github.com/alonrbar/redux-app-examples/tree/master/src/angular/gladiators
  [aurelia-gladiators]: https://github.com/alonrbar/redux-app-examples/tree/master/src/aurelia/gladiators