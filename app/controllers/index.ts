import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

export default class Index extends Controller {
  @tracked pageSize = 3;

  inputGuid = guidFor(this);

  title = 'Title of Component';

  @action
  increasePageSize(byHowMuch: number) {
    this.pageSize += byHowMuch;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    index: Index;
  }
}
