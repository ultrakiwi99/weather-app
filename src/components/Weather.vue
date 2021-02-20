<template>
  <section>
    Weather<button @click="$emit(`closeWeather`)">Close</button>
  </section>
</template>

<script>
export default {
  name: "Weather"
};
</script>
