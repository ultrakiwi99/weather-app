<template>
  <section class="next-days">
    <section class="day-weather" v-for="(day, idx) in forecast" :key="idx">
      <Weekday :timestamp="day.date" />
      <WeatherIcon :description="day.condition" />
      <p class="temp">{{ day.daytemp.day }}</p>
    </section>
  </section>
</template>

<script>
import WeatherIcon from "./WeatherIcon";
import Weekday from "./WeekDay";

export default {
  components: { WeatherIcon, Weekday },
  name: "Forecast",
  props: {
    forecast: Array
  },
  methods: {
    weekday(timestamp) {
      console.log(new Date(timestamp).getDate());
      return this.weekdays[new Date(timestamp).getDay()];
    }
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
