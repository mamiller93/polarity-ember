import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    const dataa = [
      {
        key: 'value',
      },
      {
        name: 'Object2',
        key: 'value',
        key2: 'value2',
      },
      {
        key: 'value',
      },
      {
        name: 'Object2',
        key: 'value',
        key2: 'value2',
      },
      {
        title: 'Object3',
        data1: 'value1',
        data2: 'value2',
        data3: 'value3',
      },
    ];
    return [...dataa, ...dataa, ...dataa, ...dataa];
  }
}
