<template>
  <button :style="style" class="gbutton" @click="handleClick"><slot>按钮</slot></button>
</template>
<script>
export default {
  name: "gButton",
  props: {
      width: String,
      type: String,
      round: {
          type: Boolean, 
          default: false
      },
      disabled: {
         type: Boolean, 
         default: false
      },
  },
  data() {
    return {
    };
  },
  computed: {
    style: function() {
        let style = {}
        style.width = this.width
        if(this.round)
        style.borderRadius = '4px'
        return style;
      }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt);
    }
  },
  mounted () {
  }
};
</script>
<style scoped>
  .gbutton{
    height: 32px;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    text-align: center;
    color: #409eff;
    font-size: 14px;
    outline: none;
  }
  .gbutton:hover{
    background-color: #ecf5ff;
  }
</style>