<template>
  <div class="container">
    <div>
      <md-theme md-name="inverse">
        <md-tabs>
          <md-tab id="issues" md-label="Issues"></md-tab>
          <md-tab id="claimed" md-label="In Progress"></md-tab>
          <md-tab id="completed" md-label="Completed"></md-tab>
        </md-tabs>
      </md-theme>
      <md-list class="issue-list md-triple-line">
        <md-list-item v-for="issue in issues" :key="issue.title">
          <issue-card></issue-card>
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
import ds from '../services/data.service';

export default {
  name: 'IssueList',
  components: {
    IssueCard,
    FilterControl,
  },
  data() {
    return {
      issues: ds.getIssueList(),
      msg: 'Welcome to Your Vue.js App',
    };
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
