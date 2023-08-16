<template>
  <v-container fluid>
    <v-row class="d-flex align-center justify-center" style="height: 100vh;">
      <v-col cols="12" md="6" class="text-left">
        <div>
          <v-typography class="display-2 mb-3 headline" style="font-size: 3rem;">
            Hello there, my name is
          </v-typography>
          <h1 class="display-2 font-weight-bold mb-3 title" style="font-size: 7rem;">
            Michael Kobets
          </h1>
          <v-typography class="display-2 mb-3 subheading" style="font-size: 4rem;">
            and I am a <span class="font-weight-bold">Front-End developer</span>
          </v-typography>
        </div>
        <v-icon class="jumping-arrow" size="80">mdi-arrow-down</v-icon>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloTab',
  methods: {
    scrollDown() {
      // Implement scrolling logic here
    }
  }
};
</script>

<style>
.jumping-arrow {
  position: fixed;
  bottom: 20px;
  right: 20px;
  animation: jumpArrow 1.5s infinite;
}
.jumping-arrow:hover {
 cursor: pointer;
}

@keyframes jumpArrow {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
</style>
