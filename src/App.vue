<template>
  <div id="app" class="flex flex-wrap justify-center">
    <modal name="edit" :adaptive="true" height="auto">
      <item-form mode="edit" :init="selected" @update="save($event)"/>
    </modal>
    <div class="w-2/4 text-left">
      <item-form @update="add($event)" class="mb-10"/>
      <div class="mb-4 text-white" v-if="items.length > 0">
        <div class="flex border-b border-grey font-semibold pb-2">
          <div class="w-1/3">Name</div>
          <div class="w-1/3">Quantity</div>
          <div class="w-1/3 text-center">Actions</div>
        </div>
        <div
          class="flex border-b border-grey-lightest py-2"
          v-for="(item, index) in items"
          :key="index"
        >
          <div class="w-1/3">{{item.name}}</div>
          <div class="w-1/3">{{item.quantity || 0}}</div>
          <div class="w-1/3 text-center">
            <i @click="remove(index)" class="fas fa-trash-alt text-red-dark cursor-pointer m-1"></i>
            <i @click="edit(item)" class="fas fa-pen-square cursor-pointer m-1"></i>
          </div>
        </div>
      </div>
      <div v-if="items.length == 0">
        <div
          class="flex justify-center items-center w-full bg-blue text-white text-sm font-bold px-4 py-3"
          role="alert"
        >
          <p>The list is empty</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemForm from "./components/ItemForm.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "app",
  components: {
    ItemForm
  },
  data() {
    return {
      items: [],
      selected: {}
    };
  },
  mounted(){
    this.items = this.getItems
  },
  computed:{
    ...mapGetters(['getItems'])
  },
  methods: {
    ...mapActions({ updateStore: "updateStore" }),
    add(item) {
      this.items.push(item);
      this.updateStore(this.items);
      this.selected = {};
    },
    save(item) {
      var index = this.items.indexOf(item);
      this.items[index] = item;
      this.updateStore(this.items);
      this.hide();
    },
    remove(index) {
      this.items.splice(index, 1);
      this.updateStore(this.items);
    },
    edit(item) {
      this.selected = item;
      this.$modal.show("edit");
    },
    hide() {
      this.$modal.hide("edit");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
