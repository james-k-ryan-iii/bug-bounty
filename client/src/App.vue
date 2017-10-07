<template>
  <div id="app">
    <div class="sidenav">
      <md-button v-for="tab in tabs" 
                 :key="tab.label"
                 @click="goToRoute(tab.path)">
        {{tab.label}}
      </md-button>
    </div>  
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
          label: 'Profile',
          path: '/foo',
        },
        {
          label: 'Issues',
          path: '/',
        },
        {
          label: 'Create Issue',
          path: '/bar',
        },
        {
          label: 'Community',
          path: '/baz',
        },
        {
          label: 'Contact us',
          path: '/baz',
        },
      ],
      goToRoute: (path) => {
        this.$router.replace(path);
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
  overflow: hidden;
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
  flex-direction: row;
}
</style>

<style scoped>
.sidenav{
  background-color: black;
  color: white;
  width: 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
