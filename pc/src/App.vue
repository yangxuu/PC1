<template>
  <div id="app">
    <!-- header -->
    <headerBox></headerBox>
    <!-- body -->
    <router-view/>
    <!-- footer -->
    <footBox></footBox>
  </div>
</template>

<script>
import headerBox from "@/components/header-box"
import footBox from "@/components/foot-box"
export default {
  name: "App",
  components:{headerBox,footBox},
  // created(){
  //   this.$store.commit("update_token",localStorage["token"])
  // }
};
</script>

<style>

</style>
