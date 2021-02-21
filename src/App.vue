<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (max-width: 414px) {
    font-size: 10px;
  }
}

body {
  background: pink;
  padding: 5rem;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
}

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: white;
  width: clamp(340px 60rem 80rem);
  height: 80vh;

  @media screen and (max-width: 414px) {
    height: 100vh;
  }
}
</style>
