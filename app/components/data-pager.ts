import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface DataPagerArgs {
  data: Array<{ [key: string]: string | boolean | number }>;
  title: string;
  pageSize: number;
}

export default class DataPager extends Component<DataPagerArgs> {
  @tracked currentPage = 1;

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
