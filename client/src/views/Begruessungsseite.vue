<template>
  <v-container>
    <h1>Die ganze Welt des Digitalen Kuchen</h1>
    <p>Beschreibung was hier abgeht</p>
    <p>
        Sie kennen das doch alle. Da ist so eine Pandemie und alle wollen Kuchen und jeder hat Geburtstag und alles ist doof <br/>
        Bis jetzt!<br /> 
        <b>Kuchen.Jetzt</b> bietet Ihnen die Lösung. <br />
        Nun mal Ernsthaft! Kuchen jetzt gibt euch die Möglichkeit einen virtuellen Geburtstagskuchen zu backen und diesen dann 
        mit allen lieben Menschen die ihr bedenken wollt zu teilen. In dem Kuchen sind kleine Medienschnippsel enthalten, die von 
        den geneigten Essern konsumiert werden können und wer mag, der kann nach dem Verzehr auch noch eine nette Botschaft an euch 
        hinterlassen. Also unten auf den Link klicken, Kuchen backen, Kuchen verteilen und Spass mit anderen haben - auch wenn da 
        draußen dieses Virus um  die Ecken schlecht.
    </p>
    <p>
      Aktuell arbeitet Kuchen.jetzt mit Youtube-Videos. Also 
      einfach den Link von Youtube aus dem Browser kopieren und einfügen.

    </p>
    <p>
        P.S.: Das Ganze funktioniert natürlich auch Super ohne Virus!
    </p>

    <v-btn @click="blaupausenLink">Jetzt deinen Kuchen erstellen!</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'Begruessungsseite',
  methods: {
      blaupausenLink() {
          this.$router.push({ name: 'Blaupause' });
      }
  }
};
</script>
