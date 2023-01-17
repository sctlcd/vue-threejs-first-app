<template>
  <div class="about">
    <TextContainer class="text-container">
      <h2>About me</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem minus
        at, nobis ut beatae incidunt quos a rerum et odit esse ullam sit aliquam
        vel! Doloribus provident magnam accusamus architecto velit a dolores
        explicabo rerum aperiam unde quas sunt magni corrupti, quis vitae vero.
        Explicabo adipisci perferendis pariatur dolores illum!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem minus
        at, nobis ut beatae incidunt quos a rerum et odit esse ullam sit aliquam
        vel! Doloribus provident magnam accusamus architecto velit a dolores
        explicabo rerum aperiam unde quas sunt magni corrupti, quis vitae vero.
        Explicabo adipisci perferendis pariatur dolores illum!
      </p>
    </TextContainer>
    <TextContainer>
      <h2>My Skills</h2>
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
    </TextContainer>
    <TextContainer>
      <h2>Contact me!</h2>
      <p>johndoe@gmail.com</p>
    </TextContainer>
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

<style lang="scss" scoped>
.about {
  display: flex;
  gap: 1.5rem;
  flex-flow: row wrap;
  .text-container {
    flex: 1 1 0px;
    min-width: 45%;
    background-color: $burgundy;
    text-align: justify;
    padding: 1rem;
  }
}
</style>
