<template>
  <img
    :src="src"
    :alt="alt"
    :class="className"
    loading="lazy"
    @load="$emit('load')"
    @error="$emit('error')"
  />
</template>

<script>
export default {
  name: 'LazyImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
img {
  transition: opacity 0.3s ease;
}

img[loading="lazy"] {
  opacity: 0;
}

img[loading="lazy"].loaded {
  opacity: 1;
}
</style>
