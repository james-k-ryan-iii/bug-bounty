<template>
  <md-list-item @click="toggleCard()">
    <md-avatar>
      <img src="../assets/githublogo.png">
    </md-avatar>

    <div class="md-list-text-container" v-bind:class="{open: isOpen}">
      <span class="md-title">{{data.title}}</span>
      <span class="md-body-2">
        Here be the title: {{data.title}}
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
  props: ['data'],
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
  width: 100%;
  height: 500px;
}
</style>
