<template>
  <i :class="iconClass"></i>
</template>

<script>
export default {
  name: "WeatherIcon",
  props: {
    description: String
  },
  computed: {
    iconClass() {
      if (!this.description) {
        return "wi wi-na";
      }

      switch (true) {
        case this.description.includes("sun"):
          return "wi wi-day-sunny";
        case this.description.includes("clear"):
          return "wi wi-day-sunny";
        case this.description.includes("rain"):
          return "wi wi-day-rain";
        case this.description.includes("fog"):
          return "wi wi-day-fog";
        case this.description.includes("snow"):
          return "wi wi-day-snow";
        case this.description.includes("cloud"):
          return "wi wi-day-cloudy";
        default:
          return "wi wi-na";
      }
    }
  }
};
</script>
