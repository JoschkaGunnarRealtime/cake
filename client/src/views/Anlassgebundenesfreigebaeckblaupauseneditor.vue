<template>
  <v-row>
    <v-col cols="2" />
    <v-col cols="8">
      <v-card class="mt-5">
        <v-card-title>Kuchen Blaupause</v-card-title>
        <v-card-content>
          <v-container>
            <v-text-field v-model="anlassgebundenesfreigebaeckName" placeholder="Tortenname"/>
          </v-container>
        </v-card-content>
      </v-card>
      <v-card 
        class="mt-5"
        v-for="(anlassgebundenesfreigebaeckbedarfsanteil, index) in anlassgebundenesfreigebaeckbedarfsanteile"
        :key="index">
        <v-card-title>Anteil {{ index + 1 }}</v-card-title>
        <v-card-content>
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-text-field 
                  label="Inhalt/Url" 
                  v-model="anlassgebundenesfreigebaeckbedarfsanteil.content.url"/>
                <v-textarea 
                  label="Kommentar vom Bäcker*in" 
                  v-model="anlassgebundenesfreigebaeckbedarfsanteil.content.bedienungsanleitung"/>
              </v-col>
              <v-col cols="6">
                <v-slider
                  label="Bild der Torte"
                  hint="Visuelles Geschmacksmuster"
                  max="13"
                  min="1"
                  v-model="anlassgebundenesfreigebaeckbedarfsanteil.content.visuellesgeschmacksmuster"
                ></v-slider>
                <v-img
                  class="cake" 
                  :src="`/assets/anlassgebundenesfreigebaeckanteile/${anlassgebundenesfreigebaeckbedarfsanteil.content.visuellesgeschmacksmuster}.png`" />
              </v-col>
            </v-row>
          </v-container>
      </v-card-content>
      </v-card>
      <v-card class="mt-5">
        <v-card-title>Aktionen</v-card-title>
        <v-card-content>
          <v-container>
            <v-btn @click="anlassgebundenesfreigebaeckbedarfsanteileHinzufuegen">+ Tortenstück</v-btn>
            <v-btn @click="anlassgebundenesfreigebaeckHerstellen" color="primary">Torte herstellen</v-btn>
          </v-container>
        </v-card-content>
      </v-card>
    </v-col>
    <v-col cols="2" />
  </v-row>
</template>

<script>
export default {
  name: 'Anlassgebundenesfreigebaeckblaupauseneditor',
  data() {
    return {
      anlassgebundenesfreigebaeckName: undefined,
      anlassgebundenesfreigebaeckbedarfsanteile: [],
    };
  },
  methods: {
    anlassgebundenesfreigebaeckbedarfsanteileHinzufuegen() {
      this.anlassgebundenesfreigebaeckbedarfsanteile.push({
        type: 'anlassgebundenesfreigebaeckbedarfsanteil',
        content: {
          url: '',
          bedienungsanleitung: '',
          visuellesgeschmacksmuster: 1,
        }
      });
    },
    anlassgebundenesfreigebaeckHerstellen() {
      const data = {
        anlassgebundenesfreigebaeck: this.anlassgebundenesfreigebaeckName,
        anlassgebundenesfreigebaeckbedarfsanteile: this.anlassgebundenesfreigebaeckbedarfsanteile,
      }
      this.axios.post(`/anlassgebundenesfreigebaeck`, data)
      .then(() => {
        console.log('pew pew! fertisch!');
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.cake {
  width: 50%;
  height: 50%;
}
</style>