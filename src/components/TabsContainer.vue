<template>
  <v-container fluid class="main-container">
    <v-tabs centered grow>
      <!-- Tab Items -->
      <v-tab to="/about">About</v-tab>
      <!-- <v-tab to="/experience">Experience</v-tab> -->
      <v-tab to="/contact">Contact</v-tab>
    </v-tabs>
    <router-view></router-view>
  </v-container>
</template>

<script>
export default {
  name: 'TabsContainer',
  data() {
    return {
      activeTab: "/about", 
    };
  },
};
</script>

<style>
/* Additional styling for the centered tabs */
.v-tabs__wrapper {
  justify-content: center;
}
.v-tabs__item {
  min-width: 200px; /* Adjust the width as needed */
  min-height: 100vh;
}

/* Add the background gradient style to the main container */
.main-container {
  background: linear-gradient(to bottom right, #e0e7ff, #c2c9d6);
  display: flex;
  flex-direction: column;
}

/* Style the tab content */
.router-view {
  flex-grow: 1;
  padding: 20px;
}
</style>
