<template>
  <div class="container">
    <div class="issue-container">
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
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.issue-list {
  flex: 2;
}

.container {
  display: flex;
  width: 100%;
}

.issue-container {
  overflow-y: auto;
}
</style>
