<template>
  
  <div class="temperaturen">
    <div class="page-hintergrund">
      <div class="verdunklung-hintergrund-effekt" />
      <img class="png-af-it-logo-icon"  src="/png-afit-logo@2x.png" />
      <div class="af-it-logo-effekt" />
    </div>
    

    <container class = "chart-oel"><ChartOel/></container>
    <container class = "chart-wasser"><ChartOel/></container>

    <img
      class="png-auto-dashboard-icon4"
      alt=""
      src="/png-auto-dashboard@2x.png"
    />
    
    <img class="wasser-icon" alt="" src="/png-wasser-icon@2x.png" />
    <div class="wasser-value"><WasserTemperaturAnzeige/></div>
    <div class="l-function2"><OelTemperaturAnzeige/></div>
    <img class="oel-icon" alt="" src="/png-l-icon@2x.png" />
    
    
    <div class="auto-titel">Porsche 911</div>
    
    <div class="temperaturen-header">
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
      <div class="messwerte-textbox" :onClick="openMesswerteDropdown">{{ $t('Messwerte') }}</div>
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
  import OelTemperaturAnzeige from "../components/OelTemperaturAnzeige.vue";
  import WasserTemperaturAnzeige from "../components/WasserTemperaturAnzeige.vue";
  import ChartOel from "../components/ChartOel.vue";


  export default defineComponent({
    name: "Temperaturen",
    data() {
      return {
        isSideBoardMenuOpen: false,
        isMesswerteDropdownOpen: false,
        isMesswerteDropdown1Open: false,
      };
    },
    components: { SideBoardMenu, PortalPopup, MesswerteDropdown, OelTemperaturAnzeige, WasserTemperaturAnzeige, ChartOel },
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
  .png-auto-dashboard-icon4 {
    position: absolute;
    top: 103px;
    left: 385px;
    width: 670px;
    height: 287px;
    object-fit: cover;
    opacity: 0.7;
  }
  .wasser-icon {
    position: absolute;
    top: 259px;
    left: 1172px;
    width: 28px;
    height: 37px;
    object-fit: cover;
  }
  .wasser-value {
    position: absolute;
    top: 254px;
    left: 1089px;
    font-weight: 300;
    display: inline-block;
    width: 78px;
    height: 42px;
  }
  .l-function2 {
    position: absolute;
    top: 254px;
    left: 259px;
    font-weight: 300;
    display: inline-block;
    width: 78px;
    height: 42px;
  }
  .oel-icon {
    position: absolute;
    top: 256px;
    left: 190px;
    width: 52px;
    height: 37px;
    object-fit: cover;
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
  .temperaturen-header {
    position: absolute;
    top: 62px;
    left: 174px;
    width: 1064px;
    height: 67px;
    font-size: var(--font-size-2xl);
    font-family: var(--font-poppins);
  }
  .temperaturen {
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
  .chart-oel {
    position: absolute;
    top: 410px;
    left: 80px;
    max-width: 100%; 
    max-height: 100%;
  }
  .chart-wasser {
    position: absolute;
    top: 410px;
    left: 800px;
    max-width: 100%; 
    max-height: 100%;
  }
</style>