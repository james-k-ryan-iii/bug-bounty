<template>
  <div class="issue-card">
    <md-avatar>
      <img src="../assets/githublogo.png">
    </md-avatar>

    <div class="md-list-text-container">
      <span class="md-title">New code causes segfault when I do something stupid</span>
      <span class="md-body-2">Why does this code not work?  THis is very bad wrong and I would like it 
        if one of you nice people would come and fix my issue for free, no $$$$
      </span>
      <md-chips md-static=true>
        <md-chip v-for="chip in getChipList()" :key="chip.label">
          {{chip.label}}
        </md-chip>
      </md-chips>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IssueCard',
  data() {
    return {
      getChipList() {
        return [
          {
            label: 'Javascript',
            type: 'language',
          },
          {
            label: 'Front End',
            type: 'codeType',
          },
          {
            label: 'Beginner',
            type: 'difficulty',
          },
        ];
      },
    };
  },
};
</script>

<style scoped>

.issue-card {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin: 5px;
}

</style>
