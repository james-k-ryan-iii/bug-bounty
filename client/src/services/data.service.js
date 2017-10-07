// import axios from 'axios';
// import _ from 'lodash';

class DataService {
  constructor() {
    this.dataList = [
      {
        title: 'test',
      },
      {
        title: 'foo',
      },
      {
        title: 'bar',
      },
      {
        title: 'baz',
      },
      {
        title: 'bar',
      },
      {
        title: 'baz',
      },
      {
        title: 'test',
      },
      {
        title: 'foo',
      },
      {
        title: 'bar',
      },
      {
        title: 'baz',
      },
      {
        title: 'bar',
      },
      {
        title: 'baz',
      },
      {
        title: 'test',
      },
      {
        title: 'foo',
      },
      {
        title: 'bar',
      },
      {
        title: 'baz',
      },
      {
        title: 'bar',
      },
      {
        title: 'baz',
      },
      {
        title: 'test',
      },
      {
        title: 'foo',
      },
      {
        title: 'bar',
      },
      {
        title: 'baz',
      },
      {
        title: 'bar',
      },
      {
        title: 'baz',
      },
    ];
  }

  getIssueList() {
    return this.dataList;
  }

  // _http(requestObj) {
  //   return axios(requestObj)
  //     .then(resp => {
  //       return resp.data;
  //     }).catch(err => {
  //       console.log(err);
  //     });
  // }
}

export default new DataService();
