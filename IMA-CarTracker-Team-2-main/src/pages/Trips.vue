<template>
  
  <div class="trips">
    
    <div class="page-hintergrund">
      <div class="verdunklung-hintergrund-effekt" />
      <img class="af-it-logo" alt="" src="/png-afit-logo@2x.png" />
      <div class="af-it-logo-effekt" />
    </div>
    
    <div class="tag-woche-monat">
      <div class="tag">Tag</div>
      <div class="woche">Woche</div>
      <div class="tag">Monat</div>
    </div>
    
    /*DIAGRAMM IST HIER */
    <div class="trips-diagramm">
      <div class="mon">Mon</div>
      <div class="tues">Tues</div>
      <div class="wed">Wed</div>
      <div class="thurs">Thurs</div>
      <div class="fri">Fri</div>
      <div class="sat">Sat</div>
      <div class="sun">Sun</div>
      <div class="balken">
        <div class="balken-child" />
        <div class="balken-item" />
        <div class="balken-inner" />
        <div class="rectangle-div" />
        <div class="balken-child1" />
        <div class="balken-child2" />
        <div class="balken-child3" />
      </div>
    </div>
    
    /* HIER LIEGEN DIE WERTE */
    <div class="div24">100</div>
    <div class="div25">200</div>
    <div class="div26">300</div>
    <div class="div27">400</div>
    <div class="div28">500</div>
    <div class="div29">600</div>
    
    <img
      class="auto-dashboard"
      alt=""
      src="/png-auto-dashboard@2x.png"
    />
    
    <div class="auto-titel">Porsche 911</div>
    
    <div class="trips-header">
      
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
      <div class="messwerte-textbox"  :onClick="openMesswerteDropdown">Messwerte</div>
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
    name: "Trips",
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
  .af-it-logo-effekt {
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
  .tag {
    position: relative;
    font-weight: 800;
  }
  .woche {
    position: relative;
    font-weight: 800;
    color: var(--color-white);
  }
  .tag-woche-monat {
    position: absolute;
    top: 409px;
    left: 1094px;
    width: 346px;
    height: 14px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    text-align: right;
    font-size: var(--font-size-lg);
    color: var(--color-dimgray-100);
  }
  .mon {
    position: absolute;
    top: 227.6px;
    left: 20.4px;
    font-weight: 800;
    display: inline-block;
    width: 74.4px;
    height: 14.8px;
  }
  .tues {
    position: absolute;
    top: 227.6px;
    left: 169.1px;
    font-weight: 800;
    display: inline-block;
    width: 82.1px;
    height: 14.8px;
  }
  .wed {
    position: absolute;
    top: 228px;
    left: 325px;
    font-weight: 800;
    display: inline-block;
    width: 77px;
    height: 14px;
  }
  .thurs {
    position: absolute;
    top: 228px;
    left: 474px;
    font-weight: 800;
    display: inline-block;
    width: 97.4px;
    height: 14.8px;
  }
  .fri {
    position: absolute;
    top: 227.6px;
    left: 639.6px;
    font-weight: 800;
    display: inline-block;
    width: 41px;
    height: 14.8px;
  }
  .sat {
    position: absolute;
    top: 227.6px;
    left: 794px;
    font-weight: 800;
    display: inline-block;
    width: 59px;
    height: 14.8px;
  }
  .sun {
    position: absolute;
    top: 227.6px;
    left: 946.1px;
    font-weight: 800;
    display: inline-block;
    width: 66.7px;
    height: 14.8px;
  }
  .balken-child {
    position: absolute;
    top: 214.9px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    width: 163.3px;
    height: 76.9px;
    transform: rotate(-90deg);
    transform-origin: 0 0;
    opacity: 0.2;
  }
  .balken-item {
    position: absolute;
    top: 214.9px;
    left: 153.9px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    width: 146.1px;
    height: 76.9px;
    transform: rotate(-90deg);
    transform-origin: 0 0;
    opacity: 0.2;
  }
  .balken-inner {
    position: absolute;
    top: 214.9px;
    left: 307.7px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    width: 103.1px;
    height: 76.9px;
    transform: rotate(-90deg);
    transform-origin: 0 0;
    opacity: 0.2;
  }
  .rectangle-div {
    position: absolute;
    top: 214.9px;
    left: 461.6px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    width: 214.9px;
    height: 76.9px;
    transform: rotate(-90deg);
    transform-origin: 0 0;
  }
  .balken-child1 {
    position: absolute;
    top: 214.9px;
    left: 615.4px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    width: 129.8px;
    height: 76.9px;
    transform: rotate(-90deg);
    transform-origin: 0 0;
    opacity: 0.2;
  }
  .balken-child2 {
    position: absolute;
    top: 214.9px;
    left: 769.3px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    width: 180.5px;
    height: 76.9px;
    transform: rotate(-90deg);
    transform-origin: 0 0;
    opacity: 0.2;
  }
  .balken-child3 {
    position: absolute;
    top: 214.9px;
    left: 923.2px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    width: 154.7px;
    height: 76.9px;
    transform: rotate(-90deg);
    transform-origin: 0 0;
    opacity: 0.2;
  }
  .balken {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1000.1px;
    height: 214.9px;
  }
  .trips-diagramm {
    position: absolute;
    top: 486px;
    left: 213px;
    width: 1012.7px;
    height: 242.8px;
    font-size: var(--font-size-lg);
  }
  .div24 {
    position: absolute;
    top: 657px;
    left: 176px;
    font-weight: 800;
    display: inline-block;
    width: 75px;
    height: 15px;
  }
  .div25 {
    position: absolute;
    top: 616px;
    left: 176px;
    font-weight: 800;
    display: inline-block;
    width: 75px;
    height: 15px;
  }
  .div26 {
    position: absolute;
    top: 577px;
    left: 176px;
    font-weight: 800;
    display: inline-block;
    width: 75px;
    height: 14px;
  }
  .div27 {
    position: absolute;
    top: 537px;
    left: 176px;
    font-weight: 800;
    display: inline-block;
    width: 75px;
    height: 15px;
  }
  .div28 {
    position: absolute;
    top: 497px;
    left: 176px;
    font-weight: 800;
    display: inline-block;
    width: 75px;
    height: 15px;
  }
  .div29 {
    position: absolute;
    top: 462px;
    left: 176px;
    font-weight: 800;
    display: inline-block;
    width: 75px;
    height: 15px;
  }
  .auto-dashboard {
    position: absolute;
    top: 96px;
    left: 368px;
    width: 670px;
    height: 287px;
    object-fit: cover;
    opacity: 0.7;
  }
  .auto-titel {
    position: absolute;
    top: 82px;
    left: 652px;
    font-size: var(--font-size-lg);
    font-weight: 600;
    font-family: var(--font-poppins);
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
  .trips-header {
    position: absolute;
    top: 61px;
    left: 174px;
    width: 1064px;
    height: 67px;
    font-size: var(--font-size-2xl);
    font-family: var(--font-poppins);
  }
  .trips {
    position: relative;
    background-color: var(--color-darkslategray-100);
    width: 100%;
    height: 867px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-mini);
    color: var(--color-white);
    font-family: var(--font-manrope);
  }
</style>