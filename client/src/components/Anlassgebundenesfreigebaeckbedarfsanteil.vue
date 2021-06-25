<template>
  <v-card @click="toggleAnlassgebundenesfreigebaeckbedarfsanteil" elevation="0">
    <v-card-title>
      <v-img 
        class="cake"
        :src="`/assets/anlassgebundenesfreigebaeckanteile/${visuellesgeschmacksmuster}.png`"/>
    </v-card-title>
    <v-dialog
        v-model="zuckerschriftbereich"
        transition="dialog-bottom-transition"
        max-width="1000">
        <v-card>
          <v-card-title>{{ bedienungsanleitung }}</v-card-title>
          <v-card-text>
            <kuchen-inhalts-darsteller :url="url" />
            <v-textarea 
            v-model="feedbackZettel"
            auto-grow />
            <v-btn @click="essen">ESSEN</v-btn>
          </v-card-text>
        </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import zusammenbroeseln from '../helper/BackwarenZerUndNeuVerbroeselungsSystem';
import { getIdFromURL } from 'vue-youtube-embed';
import KuchenInhaltsDarsteller from './KuchenInhaltsDarsteller.vue';

export default {
  components: { KuchenInhaltsDarsteller },
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
    visuellesgeschmacksmuster: {
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
    zumVerzehrVorgemerkt: {
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
      zuckerschriftbereich: false,
      feedbackZettel: '',
    };
  },
  computed: {
    zusammengebroeselteAnlassgebundenesfreigebaeckidentifikationsnummer() {
      return zusammenbroeseln(this.anlassgebundenesfreigebaeckidentifikationsnummer);
    },
    zusammengebroeselteAnlassgebundenesfreigebaeckbedarfsanteilsidentifikationsnummer() {
      return zusammenbroeseln(this.anlassgebundenesfreigebaeckbedarfsanteilsidentifikationsnummer);
    },
    videoId() {
      return getIdFromURL(this.url);
    },
  },
  methods: {
    essen() {
      const data = {
        feedbackZettel: this.feedbackZettel,
      }
      this.axios.post(`/anlassgebundenesfreigebaeck/${this.zusammengebroeselteAnlassgebundenesfreigebaeckidentifikationsnummer}/${this.zusammengebroeselteAnlassgebundenesfreigebaeckbedarfsanteilsidentifikationsnummer}`, data)
      .then(() => {
        console.log('pew pew! gegessen');
        this.zuckerschriftbereich = false; 
      });
    },
    toggleAnlassgebundenesfreigebaeckbedarfsanteil() {
      if (!this.zumVerzehrVorgemerkt) {
        this.zuckerschriftbereich = true; 
        this.axios.delete(`/anlassgebundenesfreigebaeck/${this.zusammengebroeselteAnlassgebundenesfreigebaeckidentifikationsnummer}/${this.zusammengebroeselteAnlassgebundenesfreigebaeckbedarfsanteilsidentifikationsnummer}`)
        .then(() => {
          console.log('pew pew! Nudelsuppe');
        });
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.cake {
  width: 20%;
  height: 20%;
}
</style>