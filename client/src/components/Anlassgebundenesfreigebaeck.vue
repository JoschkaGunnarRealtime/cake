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
            :anlassgebundenesfreigebaeckbedarfsanteilsidentifikationsnummer="anlassgebundenesfreigebaeckbedarfsanteil.content.anlassgebundenesfreigebaeckbedarfsanteilsidentifikationsnummer"
            :bedienungsanleitung="anlassgebundenesfreigebaeckbedarfsanteil.content.bedienungsanleitung"
            :url="anlassgebundenesfreigebaeckbedarfsanteil.content.url"/>
          <Kommentarzettel 
            v-if="anlassgebundenesfreigebaeckbedarfsanteil.type.includes('zettel')"
            :kommentarzettel="anlassgebundenesfreigebaeckbedarfsanteil.content.kommentarzettel"/>
        </div>
      </div>
    </div>
</template>

<script>
import Anlassgebundenesfreigebaeckbedarfsanteil from './Anlassgebundenesfreigebaeckbedarfsanteil';
import Kommentarzettel from './Kommentarzettel.vue';

export default {
  name: 'Anlassgebundenesfreigebaeck',
  components: {
    Anlassgebundenesfreigebaeckbedarfsanteil,
    Kommentarzettel,
  },
  data() {
    return {
      anlassgebundenesfreigebaeckbedarfsanteile: [],
      isLoading: true,
    };
  },
  beforeMount() {
    this.axios.get('/anlassgebundenesfreigebaeck/1').then((response) => {
      this.anlassgebundenesfreigebaeckbedarfsanteile = response.data.Anlassgebundenesfreigebaeck.anlassgebundenesfreigebaeckbedarfsanteile;
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