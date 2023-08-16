<template>
  <v-app>
    <v-main>
      <WelcomeMessage/>
      <TabsContainer/>
      
    </v-main>
  </v-app>
  <FooterComponent />
</template>

<script>
import WelcomeMessage from './components/WelcomeMessage.vue'
import TabsContainer from './components/TabsContainer.vue';
import FooterComponent from "./components/FooterComponent.vue"; 


export default {
  name: 'App',

  components: {
    WelcomeMessage,
    TabsContainer,
    FooterComponent
  },

  data: () => ({
    //
    //
  }),
}
</script>
