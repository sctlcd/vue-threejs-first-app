<template>
  <div class="home">
    <ImageContainer class="image-container">
      <p>Hi. My name is Lucinda, I'm a Frontend developer.</p>
      <p>Welcome to my portfolio!</p>
      <img :alt="image" :src="image" />
    </ImageContainer>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageContainer from "@/components/ImageContainer.vue";

export default {
  name: "HomeView",
  components: {
    ImageContainer,
  },
  mounted: function () {
    if (this.source) {
      //is it empty
      this.image = this.source; //replace placeholder
    }
    this.loading = false;
  },
  data() {
    return {
      image: "https://picsum.photos/id/237/400/600", //url for placeholder image
      loading: true,
    };
  },
  props: ["source"],
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  gap: 1.5rem;
  flex-flow: row wrap;
  .image-container {
    background-color: $burgundy;
    text-align: center;
    padding: 0 1rem 1rem;
    margin: 0 auto;
  }
}
</style>
