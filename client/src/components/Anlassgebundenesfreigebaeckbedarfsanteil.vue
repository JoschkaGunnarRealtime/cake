<template>
  <v-card @click="toggleAnlassgebundenesfreigebaeckbedarfsanteil">
    <v-card-title>tortenstueckenstück</v-card-title>
    <v-dialog
        v-model="zuckerschriftbereich"
        transition="dialog-bottom-transition"
        max-width="600">
        <v-card>
          <v-card-title>{{ bedienungsanleitung }}</v-card-title>
          <v-card-text>
            <p> {{ url }} </p>
          </v-card-text>
        </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: 'Anlassgebundenesfreigebaeckbedarfsanteil',
  props: {
    anlassgebundenesfreigebaeckidentifikationsnummer: {
      type: String,
      required: true,
    },
    anlassgebundenesfreigebaeckbedarfsanteilsidentifikationsnummer: {
      type: String,
      required: true,
    },
    bedienungsanleitung: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      zuckerschriftbereich: false,
    };
  },
  methods: {
    toggleAnlassgebundenesfreigebaeckbedarfsanteil() {
      this.zuckerschriftbereich = true;
      this.axios.delete(`/anlassgebundenesfreigebaeck/${this.anlassgebundenesfreigebaeckidentifikationsnummer}/${this.anlassgebundenesfreigebaeckbedarfsanteilsidentifikationsnummer}`)
      .then(() => {
        console.log('pew pew! Nudelsuppe');
      });
    }
  },
}
</script>

<style>

</style>