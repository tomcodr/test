<template>
  <div class="hilfe-logged-in">
    
    <div class="page-hintergrund">
      <div class="verdunklung-hintergrund-effekt" />
      <img class="af-it-logo" alt="" src="/png-afit-logo@2x.png" />
      <div class="af-it-logo-effekt" />
    </div>
    
    <img
      class="sideboard-opener-icon"
      alt=""
      src="/menu-icon.svg"
      :onClick="openSideBoardMenu"
    />
    <img
      class="profile-icon"
      alt=""
      src="/profil-icon.svg"
      @click="onPROFILEIconClick"
    />
    <div class="hilfe-text">Hilfe</div>
    <img
      class="cartracker-logo"
      alt=""
      src="/png-cartracker-logo@2x.png"
      @click="onCARTRACKERLOGOImageClick"
    />
  
  </div>
  
  <div v-if="isSideBoardMenuOpen">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :relativeLayerRef="$refs[sIDEBOARDOPENERIconRef]"
      :onOutsideClick="closeSideBoardMenu"
    >
      <SideBoardMenu :onClose="closeSideBoardMenu" />
    </PortalPopup>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import SideBoardMenu from "../components/SideBoardMenu.vue";
  import PortalPopup from "../components/PortalPopup.vue";

  export default defineComponent({
    name: "HilfeLoggedIn",
    data() {
      return { isSideBoardMenuOpen: false };
    },
    components: { SideBoardMenu, PortalPopup },
    methods: {
      openSideBoardMenu() {
        this.isSideBoardMenuOpen = true;
      },
      closeSideBoardMenu() {
        this.isSideBoardMenuOpen = false;
      },
      onPROFILEIconClick() {
        this.$router.push("/profil");
      },
      onCARTRACKERLOGOImageClick() {
        this.$router.push("/");
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
  .af-it-logo-effekt{
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--color-darkslategray-200);
    backdrop-filter: blur(200px);
    width: 1440px;
    height: 867px;
  }
  .page-hintergrund {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1440px;
    height: 867px;
  }
  .sideboard-opener-icon {
    position: absolute;
    top: 83px;
    left: 1214px;
    width: 24px;
    height: 24px;
    overflow: hidden;
    cursor: pointer;
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
  .cartracker-logo {
    position: absolute;
    top: 62px;
    left: 174px;
    width: 85px;
    height: 67px;
    object-fit: cover;
    cursor: pointer;
  }
  .hilfe-logged-in {
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