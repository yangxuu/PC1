<template>
  <div id="app">
    <router-view/>
    <footerBox></footerBox>
  </div>
</template>

<script>
import footerBox from "@/components/footer-box"

export default {
  name: 'App',
  components:{footerBox}
}
</script>

<style>

</style>
