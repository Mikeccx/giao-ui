<template>
  <label>
    <input type="radio" name="vaule" :model='model' :value="label"/>
    <span class="my-radio-border"></span>
    <slot>默认值</slot>
  </label>
</template>
<script>
export default {
  name: "radio",
  data() {
    return {
      model:''
    };
  },
  props: {
    value: {
      type: String
    },
    label: {
      type: String
    }
  },
  compute: {
    model: {
    get() {
      return this.value; // 设置单选框 选项.  是通过当前值来判断当前选中项.
    },
    set(val) {
      this.$emit("input", val); // 选中单选框后,发布input事件; 这时子组件与父组件形成双向绑定.
    }
    }
  },
  methods: {
  }
};
</script>
<style scoped>
.my-radio-border {
  border: 1px solid #dcdfe6;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  display: inline-block;
  box-sizing: content-box;
  margin-top: 2px;
}
.my-radio-border:hover {
  border-color: #409eff;
}

label input {
  opacity: 0;
  outline: none;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
}
label .text {
  font-size: 14px;
  vertical-align: top;
  padding: 0 5px;
}
label input:checked + span::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  /* height: 6px;
  width: 6px; */
  border-radius: 100%;
  background: #409eff;
  border-color: #409eff;
  transition: 1s;
  animation: bescale 0.3s ease;
  animation-fill-mode: forwards;
}
label input:checked + span + span {
  color: #409eff;
}
@keyframes bescale {
  from {
    height: 0px;
    width: 0px;
  }
  to {
    height: 12px;
    width: 12px;
  }
}
</style>