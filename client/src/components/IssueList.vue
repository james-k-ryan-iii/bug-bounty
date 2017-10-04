<template>
  <div id="issue-container">
    <div v-for="issue in issues" :key="issue.title" class="issue-tag">
      {{ issue.title }}
    </div>
  </div>

</template>

<script>
export default {
  name: 'IssueList',
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

#issue-container {
  display: flex;
  flex: 1 1 0;
  overflow-y: auto;
  height: 0px;
  flex-direction: column;
  width: 75%;
  justify-content: center;
  align-items: center;
}

.issue-tag {
  flex: 0 0 auto;
  width: 75%;
  margin: 50px;
  height: 100px;
  border: 1px solid gray;
}
</style>
