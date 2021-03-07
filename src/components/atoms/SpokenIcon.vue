<template lang="pug">
  .spoken-icon
    img(:src="iconPath")
</template>

<script>
export default {
  props: {
    iconPath: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
  .spoken-icon > img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 10px;
  }
</style>
