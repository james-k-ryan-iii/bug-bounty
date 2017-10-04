<template>
  <div id="app">
    <md-tabs md-centered @change="goToRoute">
      <md-tab v-for="tab in tabs"
              :key="tab.label"
              :md-label="tab.label"
              :md-active="isPath(tab.path)">
      </md-tab>
    </md-tabs>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      tabs: [
        {
          label: 'Issues',
          path: '/',
        },
        {
          label: 'Foo',
          path: '/foo',
        },
        {
          label: 'Bar',
          path: '/bar',
        },
        {
          label: 'Baz',
          path: '/baz',
        },
      ],
      isPath: path => this.$route.path === path,
      goToRoute: (index) => {
        this.$router.replace(this.tabs[index].path);
      },
    };
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  widows: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<style scoped>
#tab-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1px solid black;

  width: 50%;
  height: 20px;
}

.tab {
  flex: 1 1 0;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
}

.tab:hover {
  background-color: gray;
}
</style>
