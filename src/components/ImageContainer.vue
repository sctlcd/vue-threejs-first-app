<template>
  <div class="image-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ImageContainer",
  props: {
    title: String,
  },
};
</script>
