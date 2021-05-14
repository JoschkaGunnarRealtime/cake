<template>
    <div>
      <v-progress-circular indeterminate v-if="isLoading"/>
      <div v-else>
        <h1>Hallo ich bin ein Anlass gebundenes Freigebäck!</h1>
        <div
            v-for="(anlassgebundenesfreigebaeckbedarfsanteil, index) in anlassgebundenesfreigebaeckbedarfsanteile"
            :key="index"
            class="d-inline-flex">
          <Anlassgebundenesfreigebaeckbedarfsanteil
            v-if="anlassgebundenesfreigebaeckbedarfsanteil.type.includes('anlassgebundenesfreigebaeckbedarfsanteil')"
            :anlassgebundenesfreigebaeckidentifikationsnummer="anlassgebundenesfreigebaekidentifikationsnummer"
            :anlassgebundenesfreigebaeckbedarfsanteilsidentifikationsnummer="anlassgebundenesfreigebaeckbedarfsanteil._id"
            :bedienungsanleitung="anlassgebundenesfreigebaeckbedarfsanteil.content.bedienungsanleitung"
            :url="anlassgebundenesfreigebaeckbedarfsanteil.content.url"
            :zumVerzehrVorgemerkt="anlassgebundenesfreigebaeckbedarfsanteil.type.includes('zumverzehrvorgemerkt')"/>
          <Kommentarzettel 
            v-if="anlassgebundenesfreigebaeckbedarfsanteil.type.includes('zettel')"
            :kommentarzettel="anlassgebundenesfreigebaeckbedarfsanteil.content.feedbackZettel" />
        </div>
      </div>
    </div>
</template>

<script>
import Anlassgebundenesfreigebaeckbedarfsanteil from './Anlassgebundenesfreigebaeckbedarfsanteil';
import Kommentarzettel from './Kommentarzettel.vue';
import zusammenbroeseln from '../helper/BackwarenZerUndNeuVerbroeselungsSystem';

export default {
  name: 'Anlassgebundenesfreigebaeck',
  components: {
    Anlassgebundenesfreigebaeckbedarfsanteil,
    Kommentarzettel,
  },
  data() {
    return {
      anlassgebundenesfreigebaeckbedarfsanteile: [],
      anlassgebundenesfreigebaekidentifikationsnummer: null,
      isLoading: true,
    };
  },
  beforeMount() {
    const zusammengebroeselteAnlassgebundenesfreigebaeckbedarfsanteilsidentifikationsnummer = zusammenbroeseln('1');
    this.axios.get(`/anlassgebundenesfreigebaeck/${zusammengebroeselteAnlassgebundenesfreigebaeckbedarfsanteilsidentifikationsnummer}`).then((response) => {
      this.anlassgebundenesfreigebaeckbedarfsanteile = response.data.anlassgebundenesfreigebaeckbedarfsanteile;
      this.anlassgebundenesfreigebaekidentifikationsnummer = response.data._id;
      this.isLoading = false;
    });
  },
};
</script>

<style lang="scss" scoped>
  .kuchentrennschneider{ 
    @extend .d-flex !optional; 
  } 
</style>