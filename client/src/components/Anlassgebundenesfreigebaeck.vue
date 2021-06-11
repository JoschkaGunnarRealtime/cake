<template>
    <div>
      <v-progress-circular indeterminate v-if="isLoading"/>
      <div v-else>
        <h1>Hallo ich bin ein Anlass gebundenes Freigebäck!</h1>
          <v-row>
            <v-col
              v-for="(anlassgebundenesfreigebaeckbedarfsanteil, index) in anlassgebundenesfreigebaeckbedarfsanteile"
              :key="index"
              class="d-flex child-flex"
              cols="4"
            >
              <Anlassgebundenesfreigebaeckbedarfsanteil
                v-if="anlassgebundenesfreigebaeckbedarfsanteil.type.includes('anlassgebundenesfreigebaeckbedarfsanteil')"
                :anlassgebundenesfreigebaeckidentifikationsnummer="anlassgebundenesfreigebaekidentifikationsnummer"
                :anlassgebundenesfreigebaeckbedarfsanteilsidentifikationsnummer="anlassgebundenesfreigebaeckbedarfsanteil._id"
                :visuellesgeschmacksmuster="anlassgebundenesfreigebaeckbedarfsanteil.content.visuellesgeschmacksmuster"
                :bedienungsanleitung="anlassgebundenesfreigebaeckbedarfsanteil.content.bedienungsanleitung"
                :url="anlassgebundenesfreigebaeckbedarfsanteil.content.url"
                :zumVerzehrVorgemerkt="anlassgebundenesfreigebaeckbedarfsanteil.type.includes('zumverzehrvorgemerkt')"/>
              <ZumVerzehrVorgemerkterTeller
                v-if="anlassgebundenesfreigebaeckbedarfsanteil.type.includes('zumverzehrvorgemerkt')"/>
              <Kommentarzettel 
                v-if="anlassgebundenesfreigebaeckbedarfsanteil.type.includes('zettel')"
                :kommentarzettel="anlassgebundenesfreigebaeckbedarfsanteil.content.feedbackZettel" />
            </v-col>
          </v-row>
      </div>
    </div>
</template>

<script>
import Anlassgebundenesfreigebaeckbedarfsanteil from './Anlassgebundenesfreigebaeckbedarfsanteil';
import Kommentarzettel from './Kommentarzettel.vue';
import ZumVerzehrVorgemerkterTeller from './ZumVerzehrVorgemerkterTeller';
import zusammenbroeseln from '../helper/BackwarenZerUndNeuVerbroeselungsSystem';

export default {
  name: 'Anlassgebundenesfreigebaeck',
  components: {
    Anlassgebundenesfreigebaeckbedarfsanteil,
    ZumVerzehrVorgemerkterTeller,
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
    const zusammengebroeselteAnlassgebundenesfreigebaeckbedarfsanteilsidentifikationsnummer = zusammenbroeseln(this.$route.params.anlassgebundenesfreigebaeckidentifikationsnummer);
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