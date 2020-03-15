import radio from './radio'
import gdialog from './dialog'
import gButton from './button'
// 存储组件列表
const components = [
  radio,
  gdialog,
  gButton
]
// 定义install方法，接受vue做参数，使用use注册插件
const install = function (Vue) {
  // components.forEach(component => {
  //   Vue.component(component.name, component)
  // })
  // 判断是否安装
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}
// 判断是否引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default{
  install,
  gdialog,
  radio,
  gButton
}
