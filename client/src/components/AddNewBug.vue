<template>
  <div>
    <h2>Please enter the github issue url to import:</h2>
    <md-input-container>
        <label>GitHub Url</label>
        <md-input v-model="githubUrl"></md-input>
    </md-input-container>
  </div>

</template>

<script>
export default {
  name: 'AddNewBug',
  data() {
    return {
      msg: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
