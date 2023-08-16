<template>
  <v-app>
    <v-main>
      <HelloTab/>
      <TabsContainer/>
    </v-main>
  </v-app>
</template>

<script>
import HelloTab from './components/HelloTab.vue'
import TabsContainer from './components/TabsContainer.vue';

export default {
  name: 'App',

  components: {
    HelloTab,
    TabsContainer
  },

  data: () => ({
    //
    //
  }),
}
</script>
