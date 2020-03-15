import gdialog from './src/dialog.vue'

gdialog.install = function (Vue) {
  Vue.component(gdialog.name, gdialog)
}

export default gdialog
