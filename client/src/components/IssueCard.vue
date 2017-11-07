<template>
  <md-list-item @click="toggleCard()">
    <md-avatar>
      <img src="../assets/githublogo.png">
    </md-avatar>

    <div class="md-list-text-container" v-bind:class="{open: isOpen}">
      <span class="md-title">New code causes segfault when I do something stupid</span>
      <span class="md-body-2">Why does this code not work?  THis is very bad wrong and I would like it 
        if one of you nice people would come and fix my issue for free, no $$$$
      </span>
      <md-chips>
        <md-chip v-for="chip in getChipList()" :key="chip.label">
          {{chip.label}}
        </md-chip>
      </md-chips>
    </div>
  </md-list-item>
</template>

<script>
export default {
  name: 'IssueCard',
  data() {
    return {
      isOpen: false,
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
      toggleCard() {
        this.isOpen = !this.isOpen;
      },
    };
  },
};
</script>

<style scoped>
.open {
  height: 500px;
}
</style>
