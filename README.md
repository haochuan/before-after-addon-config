# before-after-addon-config

This is an sample ember app with an in-repo addon, to reproduce an error related to addon's before/after config with embroider build.

## App Structure

- There is an in-repo addon `i-should-run-after-ember-data` used in this app, and it is defined to run after `ember-data`.
- In-repo addon `i-should-run-after-ember-data` extends store from ember-data, with a new function `getCustomStoreData`</li>
- The current route `foo` calls `this.store.getCustomStoreData` as the return value of `model`, which should be rendered in route `/foo`.</li>

## Reproduce steps
* clone the repo
* `cd before-after-addon-config`
* `yarn install`
* `EMBROIDER=1 ember s`
* Go to route `/foo`, you should see the text `getCustomStoreData called from i-should-run-after-ember-data` at the bottom of the page.