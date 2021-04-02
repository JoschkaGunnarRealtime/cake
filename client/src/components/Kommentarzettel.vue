<template>
  <div>
    {{ kommentarzettel }}
  </div>
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
}
</script>