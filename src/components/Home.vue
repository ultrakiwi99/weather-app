<template>
  <section class="wrapper">
    <Weather
      v-if="weather !== null"
      :weather="weather"
      :date="date"
      :forecast="forecast"
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
import currentWeather from "./../stubs/weather";
import forecast from "./../stubs/forecast";

export default {
  components: { Weather, Error, Input },
  name: "Home",
  data() {
    return {
      weather: null,
      forecast: [],
      error: null,
      date: new Date()
    };
  },
  methods: {
    searchWeather(payload) {
      const res = this.getWeatherFromApi(payload);
      const forecast = this.getForecast();

      switch (res.cod) {
        case "404":
          this.error = res.message;
          break;
        default:
          this.weather = res;
          this.forecast = forecast;
      }
    },
    getWeatherFromApi(payload) {
      if (payload === "Moscow") {
        return currentWeather;
      }

      return { cod: "404", message: "Not found" };
    },
    getForecast() {
      return forecast;
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
