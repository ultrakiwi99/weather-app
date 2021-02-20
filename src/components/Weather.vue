<template>
  <section class="weather-wrapper">
    <nav class="controls">
      <section class="go-back" @click="$emit(`closeWeather`)">
        -- Tallin
      </section>
      <section class="switch">
        OO
      </section>
    </nav>
    <p class="time">Tuesday, December 6th 2016</p>
    <p class="conditions">Light snow</p>
    <section class="info">
      <section class="temp">39F</section>
      <section class="icon">FF</section>
      <section class="week">
        <table>
          <tbody>
            <tr>
              <td>Morning</td>
              <td>45F</td>
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
        <p class="icon">FF</p>
        <p class="temp">34F</p>
      </section>
      <section class="day-weather">
        <p class="weekday">Tuesday</p>
        <p class="icon">FF</p>
        <p class="temp">34F</p>
      </section>
      <section class="day-weather">
        <p class="weekday">Tuesday</p>
        <p class="icon">FF</p>
        <p class="temp">34F</p>
      </section>
      <section class="day-weather">
        <p class="weekday">Tuesday</p>
        <p class="icon">FF</p>
        <p class="temp">34F</p>
      </section>
      <section class="day-weather">
        <p class="weekday">Tuesday</p>
        <p class="icon">FF</p>
        <p class="temp">34F</p>
      </section>
      <section class="day-weather">
        <p class="weekday">Tuesday</p>
        <p class="icon">FF</p>
        <p class="temp">34F</p>
      </section>
      <section class="day-weather">
        <p class="weekday">Tuesday</p>
        <p class="icon">FF</p>
        <p class="temp">34F</p>
      </section>
      <section class="day-weather">
        <p class="weekday">Tuesday</p>
        <p class="icon">FF</p>
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
  padding: 3rem;

  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .go-back {
      font-weight: bolder;
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
    color: lightsalmon;

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
    }
  }

  .next-days {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .day-weather {
      font-size: 1rem;
      line-height: 2.6rem;
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
