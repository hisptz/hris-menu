# Hris Menu Module

Menu module for hris applications based on angular 8+

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

## installation

`npm install @iapps/hris-menu --save`

## Usage

If the module is to be imported in the app.module, then import as

import { HrisMenuModule } from '@iapps/ngx-hris-menu';

then add this in the imports

```typescript
imports: [
...
HrisMenuModule,
...
]
```

> Note: Menu component make a use of animations from angular, in this case you have to import BrowserAnimationsModule in app.module.ts

`import { BrowserAnimationsModule } from '@angular/platform-browser/animations'`;

```typescript
imports: [
...
BrowserAnimationsModule,
...
]
```

Once imported, menu can be called in as

`<hris-menu></hris-menu>`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
