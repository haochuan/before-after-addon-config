import Store from '@ember-data/store';

export default class CustomStore extends Store {
  getCustomStoreData() {
    return "getCustomStoreData called from i-should-run-after-ember-data";
  }
}