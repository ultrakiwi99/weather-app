<template>
  <section class="next-days">
    <section class="day-weather" v-for="(day, idx) in forecast" :key="idx">
      <p class="weekday">{{ day.weekday }}</p>
      <WeatherIcon :description="day.condition" />
      <p class="temp">{{ day.temp }}</p>
    </section>
  </section>
</template>

<script>
import WeatherIcon from "./WeatherIcon";

export default {
  components: { WeatherIcon },
  name: "Forecast",
  props: {
    forecast: Array
  }
};
</script>

<style lang="scss" scoped>
.next-days {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 414px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  .day-weather {
    font-size: 1rem;
    line-height: 2.6rem;
    text-align: center;

    p {
      text-align: center;
    }

    @media screen and (max-width: 414px) {
      min-width: 8rem;
      margin-top: auto;
    }

    .icon {
      font-size: 3rem;
      text-align: center;
    }
    .temp {
      text-align: center;
    }
  }
}
</style>
