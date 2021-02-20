<template>
  <section>
    {{ error }} <button @click="$emit(`closeError`)">Back</button>
  </section>
</template>

<script>
export default {
  name: "Error",
  props: {
    error: String
  }
};
</script>
