<template>
  <v-app>
    <v-app-bar color="primary" app>
      <v-app-bar-title>Der digitale Kuchen "Hier könnte ihre Werbung stehen"</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>
