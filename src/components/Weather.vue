<template>
  <section class="weather-wrapper">
    <nav class="controls">
      <section class="go-back" @click="$emit(`closeWeather`)">
        <span class="material-icons icon-back">west</span> {{ weather.city }}
      </section>
      <section>
        <span class="material-icons switch">toggle_off</span>
      </section>
    </nav>
    <p class="time">{{ formattedDate }}</p>
    <p class="conditions">{{ weather.condition }}</p>
    <section class="info">
      <section class="temp">{{ weather.temp }}</section>
      <section class="icon">
        <WeatherIcon :description="weather.condition" />
      </section>
      <section class="daytemp">
        <DayTemp :daytemp="weather.daytemp" />
      </section>
    </section>
    <Forecast :forecast="forecast" />
  </section>
</template>

<script>
import DayTemp from "./DayTemp";
import Forecast from "./Forecast";
import WeatherIcon from "./WeatherIcon";

export default {
  components: { DayTemp, Forecast, WeatherIcon },
  props: {
    weather: Object,
    forecast: Array,
    date: Date
  },
  computed: {
    formattedDate() {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      return new Intl.DateTimeFormat("en-US", options).format(this.date);
    }
  },
  name: "Weather"
};
</script>

<style lang="scss" scoped>
.weather-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  font-size: 2.5rem;
  padding: 2rem;

  @media screen and (max-width: 414px) {
    align-items: stretch;
    justify-content: flex-start;
    gap: 2rem;
    padding: 1rem;
  }

  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .go-back {
      font-weight: bolder;
      display: flex;
      cursor: pointer;

      .icon-back {
        font-size: 2.5rem;
        margin-right: 1rem;
      }
    }

    .switch {
      cursor: pointer;
      font-size: 5rem;
    }
  }

  p {
    text-align: left;
    font-weight: 300;
  }

  .conditions {
    text-transform: capitalize;
  }

  .info {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: nowrap;
    color: lightsalmon;

    @media screen and (max-width: 414px) {
      flex-wrap: wrap;
      align-items: stretch;
      justify-content: center;
      flex: 2;
    }

    .temp {
      font-size: 9rem;
    }
    .icon {
      font-size: 9rem;
      margin-left: 2rem;
    }
    .daytemp {
      font-size: 1.6rem;
      margin-left: 2rem;
    }
  }
}
</style>
