# Change Log

## 1.4.0 - 2017-12-21

- First (experimental) React example.
- Update and lock dependency versions.

## 1.3.3 - 2017-11-29

- Bug fixes in Gladiators example.

## 1.3.2 - 2017-11-18

- Troubleshoot "TypeError: Cannot read property 'used' of null".

## 1.3.1 - 2017-11-18

- Gladiators - Aurelia.

## 1.3.0 - 2017-11-16

- New real world example - Gladiators.

## 1.2.3 - 2017-11-7

- Fix time-travel in Angular todo example.
  - **Details:** In Angular it is important to instantiate ReduxApp inside an
    Angular [zone][whats-a-zone] so that Angular will be able to monitor changes
    even when actions are not dispatched from within it - as in the case of time
    travel debugging where the actions and states are assigned by the Redux
    DevTool browser extension. The most simple way to achieve that is to
    instantiate ReduxApp inside an Angular Component.

## 1.2.2 - 2017-11-6

- Add Angular examples.

## 1.1.3 - 2017-11-5

- Update package-lock.json file.

## 1.1.2 - 2017-11-4

- Update todo example.

[whats-a-zone]: https://github.com/angular/zone.js/#whats-a-zone