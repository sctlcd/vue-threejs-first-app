<template>
  <div class="projects-section">
    <ShowcaseContainer></ShowcaseContainer>
  </div>
</template>

<script>
import ShowcaseContainer from "@/components/ShowcaseContainer.vue";

export default { components: { ShowcaseContainer } };
</script>

<style lang="scss" scoped>
.projects-section {
  color: lightskyblue;
}
</style>
