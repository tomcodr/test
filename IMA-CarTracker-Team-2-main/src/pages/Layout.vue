<template>
  <div class="layout" :class="{ dark: isDark }">
    <div class="background" />
    <div class="af-it-logo-effekt" />
    <img
      class="af-it-backgorund-logo"
      alt=""
      src="/afit-backgorund-logo@2x.png"
    />
    <div class="cover-logo" />
    <img
      class="cartracker-logo-icon5"
      alt=""
      src="/png-cartracker-logo@2x.png"
      @click="onCARTRACKERLOGOImageClick"
    />
    <img
      class="sideboard-opener-icon4"
      alt=""
      src="/menu-icon.svg"
      :onClick="openSideBoardMenu"
    />
    <img
      class="profile-icon2"
      alt=""
      src="/profil-icon.svg"
      @click="onPROFILEIconClick"
    />
    
   
    <div class="layout-green" />
    <div class="layout-white" />
    <div class="layout-blue" />
    <div class="darkmode-text"><ToggleSwitch/></div>
    <div class="darkmode-schalter">
     
    <div class="grün-text">Grün</div>
    <div class="weiß-text">Weiß</div>
    <div class="frozen-text">Frozen</div>
  </div>
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
  import ToggleSwitch from "../components/ToggleSwitch.vue";
  


  export default defineComponent({
    name: "Layout",
    data() {
      return { isSideBoardMenuOpen: false };
    },
    components: { SideBoardMenu, PortalPopup, ToggleSwitch },
    computed: {
    isDark() {
      return this.$data.isDark;
    },
  },
    methods: {
      onCARTRACKERLOGOImageClick() {
        this.$router.push("/");
      },
      openSideBoardMenu() {
        this.isSideBoardMenuOpen = true;
      },
      closeSideBoardMenu() {
        this.isSideBoardMenuOpen = false;
      },
      onPROFILEIconClick() {
        this.$router.push("/profil");
      },
    },
  });
</script>
<style scoped>
 /* Your existing styles for the layout */
.layout.dark {
  /* Add styles for dark mode here */
  background-color: #1a1a1a; /* Change this to your dark background color */
  color: #fff; /* Change this to your dark text color */
}
  .af-it-logo-effekt {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--color-darkslategray-200);
    backdrop-filter: blur(200px);
    width: 1500px;
    height: 867px;
  }
  .af-it-backgorund-logo {
    position: absolute;
    top: 172px;
    left: 436px;
    width: 569px;
    height: 556px;
    object-fit: cover;
  }
  .cover-logo {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--color-darkslategray-200);
    backdrop-filter: blur(200px);
    width: 1500px;
    height: 867px;
  }
  .cartracker-logo-icon5 {
    position: absolute;
    top: 62px;
    left: 174px;
    width: 85px;
    height: 67px;
    object-fit: cover;
    cursor: pointer;
  }
  .sideboard-opener-icon4 {
    position: absolute;
    top: 83px;
    left: 1214px;
    width: 24px;
    height: 24px;
    overflow: hidden;
    cursor: pointer;
  }
  .profile-icon2 {
    position: absolute;
    top: 83px;
    left: 1162px;
    width: 24px;
    height: 24px;
    overflow: hidden;
    cursor: pointer;
  }
  .layout-white {
    position: absolute;
    top: 301px;
    left: 615px;
    border-radius: var(--br-21xl);
    background: linear-gradient(-2.09deg, #fff 53.13%, rgba(217, 217, 217, 0));
    width: 211px;
    height: 211px;
    opacity: 0.4;
  }
  .layout-blue {
    position: absolute;
    top: 301px;
    left: 916px;
    border-radius: var(--br-21xl);
    background: linear-gradient(
      -2.09deg,
      #1dc4ce 53.13%,
      rgba(217, 217, 217, 0)
    );
    width: 211px;
    height: 211px;
    opacity: 0.4;
  }
  .layout-green {
    position: absolute;
    top: 301px;
    left: 314px;
    border-radius: var(--br-21xl);
    background: linear-gradient(
      -2.09deg,
      #426b1f 53.13%,
      rgba(217, 217, 217, 0)
    );
    width: 211px;
    height: 211px;
    opacity: 0.4;
  }
  .layout-green:hover,
  .layout-white:hover,
  .layout-blue:hover {
    width: 220px; 
    height: 220px; 
    opacity: 0.8; 
    transition: all 0.3s ease; 
  }
  .grün-text {
  position: absolute;
  height: 15px;
  width: 109px;
  top: 550px;
  left: 400px;
  font-weight: 800;
  display: inline-block;
}

.weiß-text {
  position: absolute;
  height: 15px;
  width: 109px;
  top: 550px;
  left: 700px;
  font-weight: 800;
  display: inline-block;
}

.frozen-text {
  position: absolute;
  height: 15px;
  width: 109px;
  top: 550px;
  left: 1000px;
  font-weight: 800;
  display: inline-block;
}
 
  .darkmode-text {
    position: absolute;
    top: 155px;
    left: 161px;
    font-weight: 800;
    display: inline-block;
    width: 138px;
    height: 15.4px;
  }
 
  .layout {
    position: relative;
    background-color: var(--color-darkslategray-100);
    width: 100%;
    height: 867px;
    text-align: left;
    font-size: var(--font-size-base);
    color: #808080;
    font-family: var(--font-manrope);
  }
</style>