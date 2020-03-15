<template>
   <div class="dialog-border" v-show="visible" @click="close">
    <div class="dialog-warper" @click.stop>
      <div class="dialog-header">提示</div>
      <div class="dialog-content"><slot></slot></div>
      <div class="dialog-footer"><slot name="footer"></slot></div>
    </div>

   </div>
</template>
<script>
export default {
  name: "gdialog",
  data() {
    return {
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  compute: {
  },
  methods: {
    close () {
      this.$emit('update:visible', false);
    }
  },
  mounted () {
    // eslint-disable-next-line no-console
    console.log('ssss')
  }
};
</script>
<style scoped lang="less">
.dialog-border{
  height:100%;
  width: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  background: #ccc;
    .dialog-warper {
    height: 204px;
    width: 30%;
    position: absolute;
    background: #ffffff;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;

    div {
      padding: 0 16px;
      align-items: center;
      
    }
     .dialog-header{
      height: 54px;
      display: flex;
      
     }
     .dialog-content {
      height: calc(100% - 124px);
     }
     .dialog-footer{
       height: 70px;
       display: flex;
      align-items: center;
       justify-content: center;
     }

   }
}

</style>