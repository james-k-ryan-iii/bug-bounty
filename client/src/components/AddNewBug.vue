<template>
  <div>
    <h2>Please enter the github issue url to import:</h2>
    <md-input-container>
        <label>GitHub Url</label>
        <md-input v-model="githubUrl"
                  @keyup.enter.native="submit()">
        </md-input>
    </md-input-container>
  </div>

</template>

<script>

import DataService from '../services/data.service';

export default {
  name: 'AddNewBug',
  data() {
    return {
      githubUrl: '',
      submit: () => {
        DataService.addIssue(this.githubUrl);
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
