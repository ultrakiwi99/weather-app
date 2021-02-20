<template>
  <section class="wrapper">
    <Weather
      v-if="weather !== null"
      :weather="weather"
      @closeWeather="weather = null"
    />
    <Error
      v-else-if="error !== null"
      :error="error"
      @closeError="error = null"
    />
    <Input v-else @search="searchWeather" />
  </section>
</template>

<script>
import Input from "./Input.vue";
import Error from "./Error.vue";
import Weather from "./Weather.vue";
import currentWeather from "./../stubs/currentWeather";

export default {
  components: { Weather, Error, Input },
  name: "Home",
  data() {
    return {
      weather: null,
      error: null
    };
  },
  methods: {
    searchWeather(payload) {
      const res = this.getWeatherFromApi(payload);
      switch (res.cod) {
        case "404":
          this.error = res.message;
          break;
        default:
          this.weather = res;
      }
    },
    getWeatherFromApi(payload) {
      if (payload === "Moscow") {
        return currentWeather;
      }

      return { cod: "404", message: "Not found" };
    }
  }
};
</script>

<style lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
