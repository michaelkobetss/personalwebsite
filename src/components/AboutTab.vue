<template>
  <div class="about-container">
    <v-container fluid fill-height>
      <v-row align="center" justify="center">
        <v-column cols="12">
          <h2 class="about-heading">About me</h2>
          <p class="headline text-xl mb-4 line-height-lg">
            Hello, I'm <b>Michael</b>, and I'm <b>21 years old</b>. I currently
            reside in <b>Kyiv, Ukraine</b>. Initially, programming started as a
            hobby, but it has now grown into a
            <b>genuine career aspiration</b> for me. For the past year, I have
            been working on completing various freelance tasks and have also
            created a website for a local shop.
          </p>
          <p class="body-1 text-lg mb-4 line-height-lg">
            Besides my expertise in <font-awesome-icon icon="vuejs" /><b
              >React</b
            >, I also have experience with <font-awesome-icon icon="react" /><b
              >Vue</b
            >, <b>Quasar</b>, <b>JavaScript</b>, <b>Node.js</b>, <b>CSS</b>,
            <b>HTML</b>, and various UI frameworks like <b>MaterialUI</b>,
            <b>Vuetify</b> and <b>Bootstrap</b>. I have worked with state
            management solutions like <b>Vuex</b>, <b>Redux</b>,
            <b>Pinia</b> and have used tools like
            <font-awesome-icon icon="github" /><b>GitHub</b>,
            <font-awesome-icon icon="jira" /><b>Jira</b>
            to enhance my development process.
          </p>
          <div class="hobbies">
            <h2 class="hobbies-heading">Hobbies and Skills</h2>
            <ul class="hobbies-list">
              <li>
                <v-icon left>mdi-chess-queen</v-icon>
                <b>Chess</b> - I'm a Class A player | 1st Category chess player.
                It's a game that constantly challenges my mind and improves my
                decision-making abilities.
              </li>
              <li>
                <v-icon left>mdi-music-note</v-icon>
                <b>Piano</b> - I've recently embarked on a musical journey by
                learning the piano.
              </li>
              <li>
                <v-icon left>mdi-guitar-electric</v-icon>
                <b>Guitar</b> - My guitar skills have reached a point where I
                feel confident performing in front of people.
              </li>
              <li>
                <v-icon left>mdi-bike</v-icon>
                <b>Cycling</b> - Cycling is a hobby for me. It's also a way to
                stay active and explore the world around me.
              </li>
            </ul>
          </div>
          <div class="download-cv-container">
            <a
              href="../assets/Michael Kobets CV.pdf"
              target="_blank"
              class="download-cv-button"
              >Download my CV</a
            >
          </div>
        </v-column>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AboutTab",
  // Your component options here
};
</script>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
}

.about-heading {
  font-size: 5rem;
  margin: 0 auto;
  text-align: center;
}

.text-xl {
  font-size: 1.8rem;
}

.text-lg {
  font-size: 1.4rem;
}

/* Add line-height to increase vertical spacing between lines */
.line-height-lg {
  line-height: 1.6;
}

/* Set the width to 70% of the screen */
.v-container {
  max-width: 70%;
}

.hobbies {
  text-align: center;
  margin-top: 20px;
}

.hobbies-heading {
  font-size: 2rem;
  margin-bottom: 10px;
}

.hobbies-list {
  list-style-type: none;
  padding: 0;
  text-align: left;
}

.hobbies-list li {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.download-cv-container {
  text-align: center;
  margin-top: 20px;
}

.download-cv-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
}

.download-cv-button:hover {
  background-color: #555;
}
</style>
