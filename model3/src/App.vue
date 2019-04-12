<template>
  <div id="app">
    <headerBox></headerBox>
    <router-view/>
  </div>
</template>

<script>
import headerBox from "@/components/header-box"
export default {
  name: 'App',
  components:{headerBox}
}
</script>

<style>

</style>
