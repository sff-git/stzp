<template>
  <div id="app">
    <HelloWorldVue></HelloWorldVue>
  </div>
</template>

<script>
import HelloWorldVue from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorldVue: HelloWorldVue,
  },
  data() {
    return {
      a: {},
    };
  },
  beforeMount() {
    // this.$set(this.a, "b", 10);
    this.$data.a.b = 10;
  },
  methods: {
    changeA() {
      this.$data.a.b -= 1;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
