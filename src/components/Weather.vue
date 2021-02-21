<template>
  <section class="weather-wrapper">
    <nav class="controls">
      <section class="go-back" @click="$emit(`closeWeather`)">
        <span class="material-icons icon-back">west</span> Tallin
      </section>
      <section>
        <span class="material-icons switch">toggle_off</span>
      </section>
    </nav>
    <p class="time">Tuesday, December 6th 2016</p>
    <p class="conditions">Light snow</p>
    <section class="info">
      <section class="temp">39F</section>
      <section class="icon"><i class="wi wi-day-sunny"></i></section>
      <section class="week">
        <table>
          <tbody>
            <tr>
              <td>Morning</td>
              <td>33F</td>
            </tr>
            <tr>
              <td>Day</td>
              <td>45F</td>
            </tr>
            <tr>
              <td>Evening</td>
              <td>45F</td>
            </tr>
            <tr>
              <td>Night</td>
              <td>45F</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
    <section class="next-days">
      <section class="day-weather">
        <p class="weekday">Tuesday</p>
        <p class="icon"><i class="wi wi-day-cloudy"></i></p>
        <p class="temp">34F</p>
      </section>
      <section class="day-weather">
        <p class="weekday">Tuesday</p>
        <p class="icon"><i class="wi wi-day-cloudy"></i></p>
        <p class="temp">34F</p>
      </section>
      <section class="day-weather">
        <p class="weekday">Tuesday</p>
        <p class="icon"><i class="wi wi-day-cloudy"></i></p>
        <p class="temp">34F</p>
      </section>
      <section class="day-weather">
        <p class="weekday">Tuesday</p>
        <p class="icon"><i class="wi wi-day-cloudy"></i></p>
        <p class="temp">34F</p>
      </section>
      <section class="day-weather">
        <p class="weekday">Tuesday</p>
        <p class="icon"><i class="wi wi-day-cloudy"></i></p>
        <p class="temp">34F</p>
      </section>
      <section class="day-weather">
        <p class="weekday">Tuesday</p>
        <p class="icon"><i class="wi wi-day-cloudy"></i></p>
        <p class="temp">34F</p>
      </section>
      <section class="day-weather">
        <p class="weekday">Tuesday</p>
        <p class="icon"><i class="wi wi-day-cloudy"></i></p>
        <p class="temp">34F</p>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    weather: Object
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
    .week {
      font-size: 1.6rem;
      margin-left: 2rem;

      table td {
        text-align: left;
        padding-left: 2rem;

        @media screen and (max-width: 414px) {
          padding: 0;
        }
      }
    }
  }

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
}
</style>
