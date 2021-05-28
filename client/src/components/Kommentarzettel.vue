<template>
  <v-card 
    @click="zettel ? zettel = false : zettel = true" 
    elevation="0">
    <v-card-title>
      <v-img 
        src="/assets/anlassgebundenesfreigebaeck/plate-used.png"/>
    </v-card-title>
    <v-dialog
        v-model="zettel"
        transition="dialog-bottom-transition"
        max-width="300"
        content-class="elevation-0 rounded-0">
        <v-card class="postit elevation-0">
          <v-card-title>Kommentar vom Esser</v-card-title>
          <v-card-text>
            <p> {{ kommentarzettel }} </p>
          </v-card-text>
        </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: 'Kommentarzettel',
  props: {
    kommentarzettel: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      zettel: undefined,
    }
  }
}
</script>

<style lang="scss" scoped>
.postit {
  background: yellow;
  border-radius: 0;
  border-top-right-radius: 25px;
}
</style>