<template>
  <section>
    <input type="text" placeholder="Input city here..." v-model="city" />
    <button @click="updateCity">Search</button>
  </section>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      city: ""
    };
  },
  methods: {
    updateCity() {
      this.$emit("search", this.city);
    }
  }
};
</script>
