import axios from 'axios';
// import _ from 'lodash';

class DataService {
  constructor() {
    this.issueList = [];
    this.completedList = [];
    this.inProgressList = [];
  }

  static getIssueList() {
    const requestObj = {
      url: '/api/v1/bounties',
    };
    return DataService.http(requestObj);
  }

  // TODO WARNING DON'T PUT INTO PRODUCTION
  static deleteIssues() {
    const requestObj = {
      method: 'delete',
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
