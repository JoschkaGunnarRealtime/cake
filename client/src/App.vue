<template>
  <v-app>
    <v-app-bar color="primary" app>
      <v-app-bar-title>
        <v-app-bar-nav-icon @click="zurBegruessungsseite">
          <v-icon>fa-birthday-cake</v-icon>
        </v-app-bar-nav-icon>
      </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  methods: {
    zurBegruessungsseite() {
      this.$router.push('/');
    }
  }
};
</script>
