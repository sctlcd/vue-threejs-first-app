<template>
  <div class="text-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "TextContainer",
  props: {
    msg: String,
  },
};
</script>
