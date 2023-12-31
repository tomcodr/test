<template>
  
  <div class="page">
    
    <div class="page-hintergrund">
      <div class="verdunklung-hintergrund-effekt" />
      <img class="png-af-it-logo-icon"  src="/png-afit-logo@2x.png" />
      <div class="af-it-logo-effekt" />
    </div>
    

    <container class = "chart-bremstemperaturen"><ChartBremstemperaturen/></container>
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
    
    <div class="reifen-hr-value"><RRTempBremse/></div>
    <div class="reifen-hl-value"><RLTempBremse/></div>
    <div class="reifen-vr-value"><FRTempBremse/></div>
    <div class="reifen-vl-value"><FLTempBremse/></div>
    
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
      placement="Centered"
      :relativeLayerRef="$refs[menuIconRef]"
      :onOutsideClick="closeSideBoardMenu"
    >
      <SideBoardMenu :onClose="closeSideBoardMenu" />
    </PortalPopup>
  </div>
  <div v-if="isMesswerteDropdownOpen">
    <PortalPopup
      placement="Centered"
      :relativeLayerRef="$refs[messwerteTextboxContainerRef]"
      :onOutsideClick="closeMesswerteDropdown"
    >
      <MesswerteDropdown :onClose="closeMesswerteDropdown" />
    </PortalPopup>
  </div>
  <div v-if="isMesswerteDropdown1Open">
    <PortalPopup
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
  import FLTempBremse from "../components/FLTempBremse.vue";
  import RLTempBremse from "../components/RLTempBremse.vue";
  import FRTempBremse from "../components/FRTempBremse.vue";
  import RRTempBremse from "../components/RRTempBremse.vue";
  import ChartBremstemperaturen from "../components/ChartBremstemperaturen.vue";

  export default defineComponent({
    name: "Bremsen",
    data() {
      return {
        isSideBoardMenuOpen: false,
        isMesswerteDropdownOpen: false,
        isMesswerteDropdown1Open: false,
      };
    },
    components: { SideBoardMenu, PortalPopup, MesswerteDropdown, FLTempBremse, RLTempBremse, FRTempBremse, RRTempBremse, ChartBremstemperaturen },
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
    left: 203px;
    width: 435px;
    height: 498px;
    object-fit: cover;
  }
  .dreieck-hr-icon {
    position: absolute;
    top: 558.2px;
    left: 524.6px;
    border-radius: var(--br-xl);
    width: 46.5px;
    height: 15.9px;
  }
  .dreieck-hl-icon {
    position: absolute;
    top: 556.2px;
    left: 267.3px;
    border-radius: var(--br-xl);
    width: 46.5px;
    height: 15.9px;
  }
  .dreieck-vr-icon {
    position: absolute;
    top: 313.2px;
    left: 519.6px;
    border-radius: var(--br-xl);
    width: 46.5px;
    height: 15.9px;
  }
  .dreieck-vl-icon {
    position: absolute;
    top: 311.2px;
    left: 275.3px;
    border-radius: var(--br-xl);
    width: 46.5px;
    height: 15.9px;
  }
  .reifen-hr-value {
    position: absolute;
    top: 547px;
    left: 577px;
    font-weight: 300;
    display: inline-block;
    width: 99px;
    height: 43px;
  }
  .reifen-hl-value {
    position: absolute;
    top: 543px;
    left: 168px;
    font-weight: 300;
    display: inline-block;
    width: 99px;
    height: 43px;
  }
  .reifen-vr-value {
    position: absolute;
    top: 302px;
    left: 577px;
    font-weight: 300;
    display: inline-block;
    width: 99px;
    height: 43px;
  }
  .reifen-vl-value {
    position: absolute;
    top: 298px;
    left: 176px;
    font-weight: 300;
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
  
  .chart-bremstemperaturen {
    position: absolute;
    top: 280px;
    left: 700px;
    max-width: 100%; 
    max-height: 100%;
  }
</style>