<template>
<div>
    <RadioButton v-model="value" label=2>GG</RadioButton>
    <RadioButton v-model="value" label=1>MM</RadioButton>
</div>
</template>
<script>
export default {
    data() {
      return {
       value:1,
       label1:'爸爸',
       label2:'妈妈'
      }
    }
}
</script>
<style scoped>
.hhh{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>