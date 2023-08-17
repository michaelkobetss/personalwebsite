<template>
    <!-- <v-footer
      class="footer"
      app
    >
      <v-container>
        <v-layout align-center justify-center row wrap>
          <v-flex xs12>
            <div class="text-center white--text">
              <div>&copy; {{ currentYear }} Your Name. All Rights Reserved.</div>
              <div>Contact: your.email@example.com | Phone: (123) 456-7890</div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-footer> -->
    <div></div>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
    computed: {
      currentYear() {
        return new Date().getFullYear();
      },
    },
  };
  </script>
  
  <style scoped>
  .footer {
    padding: 20px 0;
    background-color: #333;
    color: white;
    text-align: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 100;
  }

  /* Override Vuetify default styles */
  .v-application footer {
    margin-top: auto;
  }
</style>