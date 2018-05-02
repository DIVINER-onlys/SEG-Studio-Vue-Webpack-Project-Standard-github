import HelloWorld from './index.vue'

export default {
  install(Vue) {
    Vue.component('hello-world',HelloWorld)
  }
}
