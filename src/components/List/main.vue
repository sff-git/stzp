<template>
  <div>
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      games: "三蹦子sss",
    };
  },
};
</script>

<style lang="scss" scoped></style>
