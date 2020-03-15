import gbutton from './src/button.vue'

gbutton.install = function (Vue) {
  Vue.component(gbutton.name, gbutton)
}

export default gbutton
