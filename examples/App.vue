<template>
<div>
    <radio v-model="value" label=2>GG</radio>
    <radio v-model="value" label=1>MM</radio>
</div>
</template>
<script>
export default {
  name: 'App',
    data() {
      return {
       value:'1'
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