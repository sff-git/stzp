<template>
  <div class="hello">
    <AMinView v-slot="{games}"> 
      <item-vue :games="games"></item-vue>
    </AMinView>
    <Table></Table>
  </div>
</template>

<script>
import mainVue from "./List/main.vue";
import ItemVue from "./List/Item.vue";
import Table from "./table/Table.vue"
import Table from "./table/Table.vue";
export default {
  name: "HelloWorld",
  components: {
    AMinView: mainVue,
    ItemVue: ItemVue,
    Table: Table,
    Table
},
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
