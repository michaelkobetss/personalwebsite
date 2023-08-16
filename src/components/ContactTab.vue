<template>
  <v-container fill-height fluid style="height:100vh">
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-card class="card">
          <v-card-title class="card-title">Let's Connect</v-card-title>
          <v-card-text>
            <v-avatar class="avatar">
              <img :src="PhotoCV" alt="PhotoCV" />
            </v-avatar>

            <v-typography>
              <p class="text">
                Thanks for visiting! Send a connection request on
                <a
                  href="https://www.linkedin.com/in/michaelkobetss/"
                  target="_blank"
                  title="Michael Kobets LinkedIn"
                >LinkedIn</a>,
                contact me on
                <a
                  href="https://t.me/michaelkobetss"
                  target="_blank"
                  title="Michael Kobets Telegram"
                >Telegram</a>, or
                <a
                  href="mailto:michaelkobetss@gmail.com"
                  title="michaelkobetss@gmail.com"
                >send me an email</a>.
              </p>
            </v-typography>

            <v-row>
              <v-col cols="12">
                <v-btn
                  href="https://www.linkedin.com/in/michaelkobetss/"
                  target="_blank"
                  title="Michael Kobets LinkedIn"
                  class="connect-button"
                  rounded
                >
                  <v-icon left>mdi-linkedin</v-icon>Connect on LinkedIn
                </v-btn>
              </v-col>
              <v-col cols="12">
                <v-btn
                  href="https://t.me/michaelkobetss"
                  target="_blank"
                  title="Michael Kobets Telegram"
                  class="connect-button telegram-button"
                  rounded
                >
                  <v-icon left>mdi-telegram</v-icon>Contact on Telegram
                </v-btn>
              </v-col>
              <v-col cols="12" >
                <v-btn
                  href="mailto:michaelkobetss@gmail.com"
                  title="michaelkobetss@gmail.com"
                  class="connect-button email-button"
                  rounded
                >
                  <v-icon left>mdi-email</v-icon>Contact via Email
                </v-btn>
              </v-col>
            </v-row>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ContactTab",
  data() {
    return {
      PhotoCV: require("../assets/PhotoCV.jpg"),
    };
  },
};
</script>

<style scoped>
/* Your component styles here */
.avatar {
  width: 200px;
  height: 200px;
  overflow: hidden;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card {
  max-width: 800px;
  padding: 40px;
  text-align: center;
  
}

.card-title {
  font-size: 2rem; /* Adjust font size using Vuetify typography classes */
  margin-bottom: 0; /* Use Vuetify margin class */
}
.text {
  font-size: 1.2rem;
  margin: 16px 0; /* Use Vuetify margin class */
}
.connect-button {
  max-width: 300px; /* Set the maximum width for the buttons */
  width: 100%;
  margin:  auto;
}
.telegram-button {
  background-color: #26a5e4; /* Telegram Blue Color */
  color: white;
}
.email-button {
  background-color: #D14836; /* Gmail Red Color */
  color: white;
}
</style>
