<template>
  <v-container fluid>
    <v-row class="d-flex align-center justify-center" style="height: 100vh;">
      <v-col cols="12" md="6" class="text-left">
        <div>
          <v-row class="mb-3">
            <v-col cols="12">
              <h2 class="display-2 mb-3 headline" style="font-size: 2rem;">
                Hello there, my name is
              </h2>
            </v-col>
            <v-col cols="12">
              <h1 class="display-2 font-weight-bold mb-3 title" style="font-size: 4rem;">
                Michael Kobets
              </h1>
            </v-col>
            <v-col cols="12">
              <h2 class="display-2 mb-3 subheading" style="font-size: 2.5rem;">
                and I am a <span class="font-weight-bold">Front-End developer</span>
              </h2>
            </v-col>
          </v-row>
        </div>
        <v-icon class="jumping-arrow" :class="{ 'clicked': isArrowClicked }" size="60" @click="scrollDown">mdi-arrow-down</v-icon>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloTab',

  data() {
    return {
      isArrowClicked: false,
    };
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

 

  methods: {
    scrollDown() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    },
    
    handleScroll() {
      console.log("handlescroll worked")
      if (window.scrollY) {
        this.isArrowClicked = true;
        window.removeEventListener('scroll', this.handleScroll);
      } 
    },
  }
};
</script>

<style>
@media (min-width: 993px) {
  .headline {
    font-size: 3rem !important;
  }

  .title {
    font-size: 5rem !important;
  }

  .subheading {
    font-size: 3rem !important;
  }
}

.jumping-arrow {
  position: fixed;
  bottom: 20px;
  right: 20px;
  animation: jumpArrow 1.5s infinite;
}

.jumping-arrow:hover {
  cursor: pointer;
}
.clicked {
  display: none;
}

@keyframes jumpArrow {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-20px);
  }

  60% {
    transform: translateY(-10px);
  }
}</style>
