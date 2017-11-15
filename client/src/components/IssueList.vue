<template>
  <div class="container">
    <div>
      <md-theme md-name="inverse">
        <md-button v-for="tab in tabs" 
                 :key="tab"
                 @click="populateIssueList(tab)">
          {{tab}}
        </md-button>
      </md-theme>
      <md-list class="issue-list md-triple-line">
        <md-list-item v-for="issue in issues" :key="issue.title">
          <issue-card data="issue"></issue-card>
          <md-divider class="md-inset"></md-divider>
        </md-list-item>
      </md-list>
    </div>
    <filter-control></filter-control>
  </div>
</template>

<script>
import IssueCard from './IssueCard';
import FilterControl from './FilterControl';
import DataService from '../services/data.service';

export default {
  name: 'IssueList',
  components: {
    IssueCard,
    FilterControl,
  },
  data() {
    return {
      issues: [],
      msg: 'Welcome to Your Vue.js App',
      tabs: ['Issues', 'In Progress', 'Completed'],
    };
  },
  methods: {
    populateIssueList() {
      DataService.getIssueList().then((resp) => {
        this.$data.issues = resp;
        console.log(this.$data.issues.length);
      });
    },
  },
  mounted() {
    DataService.addIssue('https://github.com/kazuhiro4949/PagingKit/issues/17');
    DataService.addIssue('https://github.com/kazuhiro4949/PagingKit/issues/8');
    DataService.addIssue('https://github.com/kazuhiro4949/PagingKit/issues/7');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.issue-list {
  flex: 2;
  height: 100%;
  overflow-y: auto;
}

.container {
  display: flex;
  width: 100%;
}
</style>
