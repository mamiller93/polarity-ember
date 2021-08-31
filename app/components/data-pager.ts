import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface DataPagerArgs {
  data: Array<{ [key: string]: string | boolean | number }>;
  title: string;
  pageSize: number;
}

export default class DataPager extends Component<DataPagerArgs> {
  @tracked _currentPage = 1;

  cachedPageSize: number | undefined = undefined;
  get currentPage() {
    if (this.args.pageSize !== this.cachedPageSize) {
      // eslint-disable-next-line ember/no-side-effects
      this._currentPage = 1;
      // eslint-disable-next-line ember/no-side-effects
      this.cachedPageSize = this.args.pageSize;
    }
    return this._currentPage;
  }
  set currentPage(pageNum: number) {
    this._currentPage = pageNum;
  }

  get currentPageObjects() {
    const start = (this.currentPage - 1) * this.args.pageSize;
    const end = start + this.args.pageSize;
    return this.args.data.slice(start, end);
  }

  get maximumPage() {
    return Math.ceil(this.args.data.length / this.args.pageSize);
  }

  @action
  incrementPage(byHowMuch: number) {
    this.currentPage += byHowMuch;
  }
}
