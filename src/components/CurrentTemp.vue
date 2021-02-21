<template>
  <section class="temp">{{ currentTemp }} <Unit :units="units" /></section>
</template>

<script>
import Unit from "./Unit";

export default {
  name: "CurrentTemp",
  components: { Unit },
  props: {
    daytemp: Object,
    units: String
  },
  computed: {
    currentTemp() {
      return this.daytemp[this.dayPart]
        ? this.daytemp[this.dayPart]
        : this.daytemp["day"];
    },
    dayPart() {
      const hour = new Date().getHours();
      switch (true) {
        case hour >= 0 && hour < 6:
          return "night";
        case hour >= 6 && hour < 12:
          return "morning";
        case hour >= 12 && hour < 6:
          return "day";
        default:
          return "evening";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.temp {
  font-size: 9rem;
}
</style>
