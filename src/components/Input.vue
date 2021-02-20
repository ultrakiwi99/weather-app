<template>
  <section class="search-form">
    <input type="text" v-model="city" placeholder="City" class="search" />
    <button @click="updateCity" class="search-button">O</button>
    <p>or</p>
    <p>use my current <a href="#">position</a></p>
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

<style lang="scss">
.search-form {
  color: gray;
  font-size: 1.5rem;
  width: 100%;

  .search {
    width: 80%;
    border: 0;
    border-bottom: 2px solid gray;
    outline: 0;
    font-size: 2rem;
    color: black;
    padding: 1rem 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      text-align: center;
      font-size: 3rem;
    }

    &:focus {
      ~ .search-button {
        transition: 0.2s;
      }
    }
  }
  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .search-button {
    border: 0;
    background-color: transparent;
    font-size: 2rem;
    margin-left: -2rem;
  }
}
</style>
