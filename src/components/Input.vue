<template>
  <section class="search-form">
    <input type="text" v-model="city" placeholder="City" class="search" />
    <span class="material-icons icon-search" @click="updateCity">search</span>
    <section>
      <p>or</p>
      <p>use my current <a href="#" @click="updateLoc">position</a></p>
    </section>
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
      if (this.city.length > 0) {
        this.$emit("search", this.city);
      }
    },
    updateLoc() {
      navigator.geolocation.getCurrentPosition(
        position =>
          this.$emit(
            "updateLoc",
            position.coords.latitude,
            position.coords.longitude
          ),
        error => this.$emit("locError", error.message)
      );
    }
  },
  computed: {
    hasGeoLoc() {
      return !!navigator.geolocation;
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
    text-align: center;

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

  .icon-search {
    background-color: transparent;
    font-size: 3rem;
    margin-left: -3rem;
    position: relative;
    top: 1rem;
    cursor: pointer;
  }
}
</style>
