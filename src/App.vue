<template lang="pug">
  .app
    | hello vue
</template>
<script>
export default {
  mounted () {
    console.log(this.$store.state)
  }
}
</script>
