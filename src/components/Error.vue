<template>
  <section>
    <p>{{ error }}</p>
    <span class="material-icons done" @click="$emit(`closeError`)"
      >done</span
    >
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

<style lang="scss" scoped>
section {
  padding: 5rem;

  font-size: 2rem;

  .done {
    margin: 2rem;
    font-size: 3rem;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 46%;

    &:hover {
      font-size: 3.2rem;
    }
  }
}
</style>
