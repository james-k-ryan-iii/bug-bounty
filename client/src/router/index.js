import Vue from 'vue';
import Router from 'vue-router';
import IssueList from '@/components/IssueList';
import User from '@/components/Users';
import Contact from '@/components/Contact';
import Community from '@/components/Community';
import AddNewBug from '@/components/AddNewBug';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IssueList',
      component: IssueList,
    },
    {
      path: '/u',
      name: 'User',
      component: User,
    },
    {
      path: '/new_issue',
      name: 'AddNewBug',
      component: AddNewBug,
    },
    {
      path: '/community',
      name: 'Community',
      component: Community,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ],
});
