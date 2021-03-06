<template>
  <section class="wrapper">
    <Weather
      v-if="weather !== null"
      :weather="weather"
      :date="date"
      :forecast="forecast"
      :units="units"
      @closeWeather="removeWeather"
      @toggleUnits="toggleUnits"
    />
    <Error
      v-else-if="error !== null"
      :error="error"
      @closeError="error = null"
    />
    <Input v-else @search="setCity" @updateLoc="setLoc" @locError="setError" />
  </section>
</template>

<script>
import Input from "./Input.vue";
import Error from "./Error.vue";
import Weather from "./Weather.vue";
import { getForecast } from "./../api/api";
import {
  storageExists,
  getFromStorage,
  saveToStorage
} from "./../storage/storage";

export default {
  components: { Weather, Error, Input },
  name: "Home",
  data() {
    return {
      weather: null,
      forecast: [],
      error: null,
      date: new Date(),
      units: "metric",
      city: null,
      lat: null,
      long: null
    };
  },
  created() {
    if (storageExists()) {
      const stateData = getFromStorage();      
      if (stateData !== null) {
        this.weather = stateData.weather;
        this.forecast = stateData.forecast;
        this.error = stateData.error;
        this.units = stateData.units;
        this.city = stateData.city;
        this.lat = stateData.lat;
        this.long = stateData.long;
        this.searchWeather();
      }
    }
  },
  methods: {
    setCity(city) {
      this.city = city;
      this.lat = null;
      this.long = null;
      this.searchWeather();
    },
    setLoc(lat, long) {
      this.lat = lat;
      this.long = long;
      this.city = null;
      this.searchWeather();
    },
    setError(error) {
      this.city = null;
      this.lat = null;
      this.long = null;
      this.error = error;
    },
    async searchWeather() {
      const result = await getForecast({
        city: this.city,
        lat: this.lat,
        long: this.long,
        units: this.units
      });
      if (result.error) {
        this.error = result.error;
        return;
      }

      this.weather = result.weather;
      this.forecast = result.forecast;
      this.setStorage();
    },
    removeWeather() {
      this.weather = null;
      this.forecast = [];
    },
    toggleUnits() {
      this.units === "metric"
        ? (this.units = "imperial")
        : (this.units = "metric");
      const city = this.weather.city;
      this.searchWeather(city);
    },
    setStorage() {
      if (storageExists()) {
        saveToStorage({
          weather: this.weather,
          forecast: this.forecast,
          error: this.error,
          units: this.units,
          city: this.city,
          lat: this.lat,
          long: this.long
        });
      }
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
