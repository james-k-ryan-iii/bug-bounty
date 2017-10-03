import Vue from 'vue';
import Router from 'vue-router';
import IssueList from '@/components/IssueList';
import Users from '@/components/Users';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IssueList',
      component: IssueList,
    },
    {
      path: '/foo',
      name: 'Users',
      component: Users,
    },
  ],
});
