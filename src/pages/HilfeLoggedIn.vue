<template>
  <div class="page">
    
    <div class="page-hintergrund">
      <div class="verdunklung-hintergrund-effekt" />
      <img class="png-af-it-logo-icon"  src="/png-afit-logo@2x.png" />
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
</style>