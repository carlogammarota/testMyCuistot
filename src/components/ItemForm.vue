<template>
  <form class="bg-white shadow-md rounded text-left px-8 pt-6 pb-8" v-if="item">
    <div class="flex">
      <div class="w-4/5">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="cook">Cook</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          id="cook"
          v-model="item.name"
          type="text"
          placeholder="Cook"
        >
      </div>
      <div class="w-1/5">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="quantity">Quantity</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          id="quantity"
          type="number"
          v-model="item.quantity"
          placeholder="1"
        >
      </div>
    </div>
    <div class="flex justify-end mt-2">
      <button
        v-if="mode=='add'"
        @click="update()"
        class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >Add</button>
      <button
        v-if="mode!='add'"
        @click="update()"
        class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >Save</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "ItemForm",
  props: {
    mode: {
      type: String,
      default: "add"
    },
    init: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      item: {}
    };
  },
  mounted() {
    this.item = this.init || {};
  },
  watch: {
    init(newValue) {
      this.item = newValue;
    }
  },
  methods: {
    update() {
      this.$emit("update", this.item);
      this.item = {};
    }
  }
};
</script>
<style scoped>
</style>
