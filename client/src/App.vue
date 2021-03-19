<template>
  <v-app>
    <v-container>
      <Torte />
    </v-container>
  </v-app>
</template>

<script>
import Torte from './components/Torte.vue';

export default {
  name: 'App',

  components: {
    Torte,
  },

  data: () => ({
    //
  }),
};
</script>
