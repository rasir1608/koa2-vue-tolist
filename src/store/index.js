import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const files = require.context('.', true, /\.js$/);
const modules = {};
files.keys().forEach((key) => {
  console.log(key);
  if (key !== './index.js') modules[key.replace(/(\.\/)|(\.js$)/g, '')] = files(key).default;
});
console.log(10, modules);
export default new Vuex.Store({
  modules,
});