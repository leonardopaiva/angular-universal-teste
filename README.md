`ng run angular-universal-site:server` cria o dist/server arquivos do cliente que foram buildados para
o servidor

"scripts": {
  // These will be your common scripts
  "build:ssr": "npm run build:client-and-server-bundles && npm run webpack:server",
  "serve:ssr": "node dist/server.js",

  // Helpers for the above scripts
  "build:client-and-server-bundles": "ng build --prod && ng run your-project-name:server",
  "webpack:server": "webpack --config webpack.server.config.js --progress --colors"
}

`npm run build:ssr && npm run serve:ssr`

docs:
[doc](https://github.com/angular/angular-cli/wiki/stories-universal-rendering)

# AngularUniversalSite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.6.

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
