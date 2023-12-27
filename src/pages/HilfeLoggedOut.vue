<template>
  <div class="page">
    
    <div class="page-hintergrund">
      
      <div class="verdunklung-hintergrund-effekt" />
      <img class="af-it-logo" alt="" src="/png-afit-logo@2x.png" />
      <div class="af-it-logo-effekt" />
      <img
        class="cartracker-logo"
        alt=""
        src="/png-cartracker-logo@2x.png"
      />
    </div>
    <img class="sideboard-opener" alt="" src="/menu-icon.svg" />
    <img
      class="profile-icon"
      alt=""
      src="/profil-icon.svg"
      @click="onPROFILEIconClick"
    />
    <div class="hilfe-text">Hilfe</div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "HilfeLoggedOut",
    methods: {
      onPROFILEIconClick() {
        this.$router.push("/login");
      },
    },
  });
</script>
<style scoped>
  .sideboard-opener {
    position: absolute;
    top: 83px;
    left: 1214px;
    width: 24px;
    height: 24px;
    overflow: hidden;
  }
  .profile-icon {
    position: absolute;
    top: 83px;
    left: 1162px;
    width: 24px;
    height: 24px;
    overflow: hidden;
    cursor: pointer;
  }
  .hilfe-text {
    position: absolute;
    top: 168px;
    left: 174px;
    font-weight: 300;
  }

</style>