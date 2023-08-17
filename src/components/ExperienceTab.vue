<template>
  <div class="project-carousel">
    <v-carousel
      height="400"
      show-arrows
      hide-delimiter-background
    >
      <template v-slot:prev="{ props }">
        <v-btn
          variant="elevated"
          @click="props.onClick"
        >
          <v-icon left>mdi-arrow-left</v-icon> 
        </v-btn>
      </template>
      <template v-slot:next="{ props }">
        <v-btn
          variant="elevated"
          @click="props.onClick"
        >
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </template>
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          height="100%"
        >
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              <img :src="slide.picture" :alt="slide.name" />
              {{ slide.name }}
              <p>{{ slide.description }}</p>
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'ProjectCarousel',
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        {
          picture: 'path_to_picture_1',
          name: 'First',
          description: 'Description for the first slide.',
        },
        {
          picture: 'path_to_picture_2',
          name: 'Second',
          description: 'Description for the second slide.',
        },
        {
          picture: 'path_to_picture_3',
          name: 'Third',
          description: 'Description for the third slide.',
        },
        {
          picture: 'path_to_picture_4',
          name: 'Fourth',
          description: 'Description for the fourth slide.',
        },
       
      ],
    };
  },
};
</script>

<style scoped>
.project-carousel {
  min-width: 50%;
  min-height: 100vh;
  margin: auto;
  display: flex;
  /* align-items: center; */
  margin-top: 3rem;
  justify-content: center;
}

.project-card {
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  min-height: 100%;
}

.project-title {
  font-size: 1.2rem;
  margin-top: 10px;
}

.project-description {
  margin-top: 5px;
}

/* Customize other styles as needed */
</style>
