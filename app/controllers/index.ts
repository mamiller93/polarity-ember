import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

export default class Index extends Controller {
  @tracked pageSize = 3;
  @tracked useBlock = false;

  inputGuid = guidFor(this);

  title = 'Title of Component';

  @action
  increasePageSize(byHowMuch: number) {
    this.pageSize += byHowMuch;
  }

  countOfEaster = 0;

  @action
  triggerOnAlphaNumeric(e: KeyboardEvent) {
    if (/^a/.test(e.key)) {
      this.countOfEaster++;

      if (this.countOfEaster === 3) {
        this.useBlock = !this.useBlock;
        this.countOfEaster = 0;
      }
    } else {
      this.countOfEaster = 0;
    }
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    index: Index;
  }
}
