<template>
  <span class="unit"><i :class="iconClass"></i></span>
</template>

<script>
export default {
  name: "Unit",
  props: {
    units: String
  },
  computed: {
    iconClass() {
      return this.units === "metric" ? "wi wi-celsius" : "wi wi-fahrenheit";
    }
  }
};
</script>
