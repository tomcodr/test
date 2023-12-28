<template>
  <div class="hilfe-logged-out">
    
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
  .verdunklung-hintergrund-effekt {
    position: absolute;
    top: 0px;
    left: 1440px;
    background-color: var(--color-gray-100);
    width: 1440px;
    height: 867px;
    transform: rotate(180deg);
    transform-origin: 0 0;
  }
  .af-it-logo {
    position: absolute;
    top: 165.7px;
    left: 436px;
    width: 569px;
    height: 535.6px;
    object-fit: cover;
  }
  .af-it-logo-effekt {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--color-darkslategray-200);
    backdrop-filter: blur(200px);
    width: 1440px;
    height: 867px;
  }
  .cartracker-logo {
    position: absolute;
    top: 61px;
    left: 173px;
    width: 85px;
    height: 67px;
    object-fit: cover;
  }
  .page-hintergrund {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1440px;
    height: 867px;
  }
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
  .hilfe-logged-out {
    position: relative;
    background-color: var(--color-darkslategray-100);
    width: 100%;
    height: 867px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-white);
    font-family: var(--font-sansation-light);
  }
</style>