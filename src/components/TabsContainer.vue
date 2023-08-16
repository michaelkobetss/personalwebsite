<template>
  <div>
    <v-tabs v-model="activeTab">
      <v-tab to="/home">Home</v-tab>
      <v-tab to="/about">About</v-tab>
      <v-tab to="/contact">Contact</v-tab>
      <v-tab to="/experience">Experience</v-tab>
    </v-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'TabsContainer',
  data() {
    return {
      activeTab: null, // This will be managed by Vuex store
    };
  },
};
</script>

<style>
/* Add your styles here */
</style>
