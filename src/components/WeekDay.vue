<template>
  <p class="weekday">{{ weekday }}</p>
</template>

<script>
export default {
  name: "Weekday",
  props: {
    timestamp: Number
  },
  data() {
    return {
      weekdays: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ]
    };
  },
  computed: {
    weekday() {
      return this.weekdays[new Date(this.timestamp * 1000).getDay()];
    }
  }
};
</script>
