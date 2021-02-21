<template>
  <section class="temp">{{ currentTemp }}</section>
</template>

<script>
export default {
  name: "CurrentTemp",
  props: {
    daytemp: Object
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
