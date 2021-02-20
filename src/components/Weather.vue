<template>
  <section>
    Weather
    {{ weather }}
    <button @click="$emit(`closeWeather`)">Close</button>
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
