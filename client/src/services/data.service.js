import axios from 'axios';
// import _ from 'lodash';

class DataService {
  constructor() {
    this.issueList = [
      {
        title: 'test',
      },
      {
        title: 'foo',
      },
    ];
    this.completedList = [
      {
        title: 'test',
      },
      {
        title: 'foo',
      },
      {
        title: 'test',
      },
    ];
    this.inProgressList = [
      {
        title: 'test',
      },
      {
        title: 'foo',
      },
      {
        title: 'test',
      },
      {
        title: 'foo',
      },
    ];
  }

  static getIssueList() {
    const requestObj = {
      url: '/api/v1/bounties',
    };
    return DataService.http(requestObj);
  }

  static addIssue(issue) {
    const requestObj = {
      method: 'post',
      url: '/api/v1/bounties',
      data: {
        gitHubIssueUrl: issue,
      },
    };
    return DataService.http(requestObj);
  }

  static http(requestObj) {
    return axios(requestObj).then(resp => resp.data);
  }
}

export default DataService;
