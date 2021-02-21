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
import { getForecast } from "./../api/api";

export default {
  components: { Weather, Error, Input },
  name: "Home",
  data() {
    return {
      weather: null,
      forecast: [],
      error: null,
      date: new Date(),
      units: "metric"
    };
  },
  methods: {
    async searchWeather(payload) {      
      const result = await getForecast({
        name: payload,
        units: this.units
      });
      if (result.error) {
        this.error = result.error;
        return;
      }

      this.weather = result.weather;
      this.forecast = result.forecast;
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
