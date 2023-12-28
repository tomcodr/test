<template>
  <div class="bremsen">
    
    <div class="page-hintergrund">
      <div class="verdunklung-hintergrund-effekt" />
      <img class="af-it-logo" alt="" src="/png-afit-logo@2x.png" />
      <div class="af-it-logo-effekt" />
    </div>
    
    <div class="auto-titel">Porsche 911</div>
    
    <img
      class="porsche-von-oben"
      alt=""
      src="/png-porsche-von-oben@2x.png"
    />
    
    <img class="dreieck-hr-icon" alt="" src="/dreieck-hr.svg" />
    <img class="dreieck-hl-icon" alt="" src="/dreieck-hl.svg" />
    <img class="dreieck-vr-icon" alt="" src="/dreieck-hr.svg" />
    <img class="dreieck-vl-icon" alt="" src="/dreieck-hl.svg" />
    
    <div class="reifen-hr-value">5°C</div>
    <div class="reifen-hl-value">10°C</div>
    <div class="reifen-vr-value">89°C</div>
    <div class="reifen-vl-value">90°C</div>
    
    <div class="bremsen-header">
      
      <img
        class="menu-icon"
        alt=""
        src="/menu-icon.svg"
        :onClick="openSideBoardMenu"
      />
      <img
        class="profil-icon"
        alt=""
        src="/profil-icon.svg"
        @click="onProfilIconClick"
      />
      <div class="messwerte-textbox" :onClick="openMesswerteDropdown">Messwerte</div>
      
      <img
        class="navigation-icon"
        alt=""
        src="/navigation-icon.svg"
        :onClick="openMesswerteDropdown1"
      />
      <img
        class="cartracker-logo"
        alt=""
        src="/png-cartracker-logo@2x.png"
        @click="onPNGCartrackerLogoImageClick"
      />

    </div>
  
  </div>
  <div v-if="isSideBoardMenuOpen">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :relativeLayerRef="$refs[menuIconRef]"
      :onOutsideClick="closeSideBoardMenu"
    >
      <SideBoardMenu :onClose="closeSideBoardMenu" />
    </PortalPopup>
  </div>
  <div v-if="isMesswerteDropdownOpen">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :relativeLayerRef="$refs[messwerteTextboxContainerRef]"
      :onOutsideClick="closeMesswerteDropdown"
    >
      <MesswerteDropdown :onClose="closeMesswerteDropdown" />
    </PortalPopup>
  </div>
  <div v-if="isMesswerteDropdown1Open">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :relativeLayerRef="$refs[navigationIconRef]"
      :onOutsideClick="closeMesswerteDropdown1"
    >
      <MesswerteDropdown :onClose="closeMesswerteDropdown1" />
    </PortalPopup>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import SideBoardMenu from "../components/SideBoardMenu.vue";
  import PortalPopup from "../components/PortalPopup.vue";
  import MesswerteDropdown from "../components/MesswerteDropdown.vue";

  export default defineComponent({
    name: "Bremsen",
    data() {
      return {
        isSideBoardMenuOpen: false,
        isMesswerteDropdownOpen: false,
        isMesswerteDropdown1Open: false,
      };
    },
    components: { SideBoardMenu, PortalPopup, MesswerteDropdown },
    methods: {
      openSideBoardMenu() {
        this.isSideBoardMenuOpen = true;
      },
      closeSideBoardMenu() {
        this.isSideBoardMenuOpen = false;
      },
      onProfilIconClick() {
        this.$router.push("/profil");
      },
      openMesswerteDropdown() {
        this.isMesswerteDropdownOpen = true;
      },
      closeMesswerteDropdown() {
        this.isMesswerteDropdownOpen = false;
      },
      openMesswerteDropdown1() {
        this.isMesswerteDropdown1Open = true;
      },
      closeMesswerteDropdown1() {
        this.isMesswerteDropdown1Open = false;
      },
      onPNGCartrackerLogoImageClick() {
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
  .auto-titel {
    position: absolute;
    top: 82px;
    left: 666px;
    font-size: var(--font-size-lg);
    font-weight: 600;
    font-family: var(--font-poppins);
  }
  .porsche-von-oben {
    position: absolute;
    top: 209px;
    left: 503px;
    width: 435px;
    height: 498px;
    object-fit: cover;
  }
  .dreieck-hr-icon {
    position: absolute;
    top: 558.2px;
    left: 824.6px;
    border-radius: var(--br-xl);
    width: 46.5px;
    height: 15.9px;
  }
  .dreieck-hl-icon {
    position: absolute;
    top: 556.2px;
    left: 567.3px;
    border-radius: var(--br-xl);
    width: 46.5px;
    height: 15.9px;
  }
  .dreieck-vr-icon {
    position: absolute;
    top: 313.2px;
    left: 819.6px;
    border-radius: var(--br-xl);
    width: 46.5px;
    height: 15.9px;
  }
  .dreieck-vl-icon {
    position: absolute;
    top: 311.2px;
    left: 575.3px;
    border-radius: var(--br-xl);
    width: 46.5px;
    height: 15.9px;
  }
  .reifen-hr-value {
    position: absolute;
    top: 547px;
    left: 877px;
    font-weight: 300;
    display: inline-block;
    width: 99px;
    height: 43px;
  }
  .reifen-hl-value {
    position: absolute;
    top: 543px;
    left: 468px;
    font-weight: 300;
    display: inline-block;
    width: 99px;
    height: 43px;
  }
  .reifen-vr-value {
    position: absolute;
    top: 302px;
    left: 877px;
    font-weight: 300;
    display: inline-block;
    width: 99px;
    height: 43px;
  }
  .reifen-vl-value {
    position: absolute;
    top: 298px;
    left: 476px;
    font-weight: 300;
    color: #e70000;
    display: inline-block;
    width: 99px;
    height: 43px;
  }
  .menu-icon {
    position: absolute;
    top: 21px;
    left: 1040px;
    width: 24px;
    height: 24px;
    overflow: hidden;
    cursor: pointer;
  }
  .profil-icon {
    position: absolute;
    top: 21px;
    left: 988px;
    width: 24px;
    height: 24px;
    overflow: hidden;
    cursor: pointer;
  }

  .messwerte-textbox {
    position: absolute;
    top: 17px;
    left: 830px;
    width: 108px;
    height: 32px;
    cursor: pointer;
    font-weight: 500;
  }
  .navigation-icon {
    position: absolute;
    top: 21px;
    left: 945px;
    width: 24px;
    height: 24px;
    overflow: hidden;
    cursor: pointer;
  }
  .cartracker-logo {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 85px;
    height: 67px;
    object-fit: cover;
    cursor: pointer;
  }
  .bremsen-header {
    position: absolute;
    top: 62px;
    left: 174px;
    width: 1064px;
    height: 67px;
    font-size: var(--font-size-2xl);
    font-family: var(--font-poppins);
  }
  .bremsen {
    position: relative;
    background-color: var(--color-darkslategray-100);
    width: 100%;
    height: 866px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-white);
    font-family: var(--font-sansation-light);
  }
</style>