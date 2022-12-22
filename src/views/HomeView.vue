<template>
  <div class="home">
    <TextContainer>Lorem Ipsum</TextContainer>
  </div>
</template>

<script>
// @ is an alias to /src
import TextContainer from "@/components/TextContainer.vue";

export default {
  name: "HomeView",
  components: {
    TextContainer,
  },
};
</script>
