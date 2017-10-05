<template>
  <md-list class="issue-list md-triple-line">
     <md-list-item v-for="issue in issues" :key="issue.title" >
      <IssueCard></IssueCard>
      <md-divider class="md-inset"></md-divider>
    </md-list-item>
  </md-list>
</template>

<script>
import IssueCard from './IssueCard';

export default {
  name: 'IssueList',
  components: {
    IssueCard,
  },
  data() {
    return {
      issues: [
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
      ],
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
  width: 50%;
  overflow-y: auto;
}
</style>
