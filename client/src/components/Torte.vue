<template>
    <div>
        <h1>Hallo ich bin ein Anlass gebundenes Freigebäck!</h1>
        <div
            v-for="stueck in tortenstuecke"
            :key="stueck.url"
        >
            <div v-if="stueck.kommentarzettel">
                <h2>Kommentarzettel</h2>
                <p>{{ stueck.kommentarzettel }}</p>
            </div>
            <div v-else>
                <h2>tortenstueckenstück</h2>
                <p> {{ stueck.url }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'tortenstuecke',
  data() {
    return {
      tortenstuecke: undefined,
    };
  },
  beforeMount() {
    this.axios.get('/anlassgebundenesfreigebaeck').then((response) => {
      this.tortenstuecke = response.data.Anlassgebundenesfreigebäck.stuecke;
      console.log(this.tortenstuecke);
    });
  },
};
</script>

<style>
</style>
