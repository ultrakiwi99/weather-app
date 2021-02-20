<template>
  <section>
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
    <Input v-else :city="city" @search="searchWeather" />
  </section>
</template>

<script>
import Input from "./Input.vue";
import Error from "./Error.vue";
import Weather from "./Weather.vue";

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
          this.weather = res.weather;
      }
    },
    getWeatherFromApi(payload) {
      if (payload === "Moscow") {
        return { weather: "good", cod: "200" };
      }

      return { cod: "404", message: "Not found" };
    }
  }
};
</script>
