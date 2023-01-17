<template>
  <div class="project-showcase">
    <div>
      <button @click="prev">{{ "<" }}</button>
      <div>
        <img
          v-if="projects[index].img"
          :alt="projects[index].title + ' image'"
          :src="projects[index].img"
        />

        <div>
          <h3>{{ projects[index].title }}</h3>
          <h4>
            <span v-for="(tech, i) in projects[index].techs" :key="i">
              {{ tech }}{{ i === projects[index].techs.length - 1 ? "" : ", " }}
            </span>
          </h4>
          <p>
            {{ projects[index].desc }}
          </p>
          <a v-if="projects[index].url" :href="projects[index].url">{{
            projects[index].urlText
          }}</a>
          <span v-else>{{ projects[index].urlText }}</span>
        </div>
      </div>
      <button @click="next">{{ ">" }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "React Three.js Minecraft",
          desc: `Desktop Minecraft clone`,
          techs: [
            "React",
            "Three.js",
            "React Three Fiber",
            "React Three Drei",
            "React Three Cannon",
          ],
          urlText: "Github",
          url: "https://github.com/sctlcd/react-threejs-minecraft",
          img: "https://picsum.photos/id/19/400/500",
        },
        {
          title: "Three.js Moon",
          desc: `Animated 3D galaxy with Three.js`,
          techs: ["Three.js"],
          urlText: "Github",
          url: "https://github.com/sctlcd/threejs-moon",
          img: "https://picsum.photos/id/28/400/500",
        },
      ],
      index: 0,
    };
  },
  methods: {
    async next() {
      if (this.projects.length - 1 === this.index) {
        this.index = 0;
      } else {
        this.index++;
      }
    },
    async prev() {
      if (this.index === 0) {
        this.index = this.projects.length - 1;
      } else {
        this.index--;
      }
    },
  },
};
</script>

<style></style>
