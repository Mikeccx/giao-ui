<template>
<div>
    <radio v-model="value" label=2>GG</radio>
    <radio v-model="value" label=1>MM</radio>
    <g-button round=round @click="showDialog">哈哈</g-button>
    <gdialog :visible.sync="isshowDialog">
      test
      <span slot="footer" class="dialog-footer">
        <g-button round=round @click="cancelDialog">取 消</g-button>
        <g-button round=round style="margin-left:10px;">确 定</g-button>
      </span>
    </gdialog>
</div>

</template>
<script>
export default {
  name: 'App',
    data() {
      return {
       value:'1',
       isshowDialog:false,
       round:true
      }
    },
    methods: {
      showDialog () {
        this.isshowDialog = true
      },
      cancelDialog () {
        this.isshowDialog = false
      }
    }
}
</script>
<style scoped lang="less">
.hhh{
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog-footer{
}
</style>