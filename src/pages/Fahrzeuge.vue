<template>    
  <div class="fahrzeuge">
    
    <div class="page-hintergrund">
      <div class="verdunklung-hintergrund-effekt" />
      <img class="png-af-it-logo" alt="" src="/png-afit-logo@2x.png" />
      <div class="af-it-logo-effekt" />
    </div>
    
    <img class="plus-icon" alt="" src="/plus.svg" @click="onPlusClick" />
    
    <div class="fahrzeug-hinzufuegen-text">{{ $t('Fahrzeuge Hinzufügen') }}</div>
   
<CarouselExample/>



    <div class="fahrzeuge-header">
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
      <div class="header-titel">Fahrzeuge</div>
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
  import CarouselExample from "../components/CarouselExample.vue";

  export default defineComponent({
    name: "Fahrzeuge",
    data() {
      return {
        isSideBoardMenuOpen: false,
        isMesswerteDropdownOpen: false,
        isMesswerteDropdown1Open: false,
      };
    },
    components: { SideBoardMenu, PortalPopup, MesswerteDropdown, CarouselExample},
    methods: {
      onPlusClick() {
        this.$router.push("/fahrzeughinzufuegen");
      },
      onPNGFahrzeug3ImageClick() {
        this.$router.push("/");
      },
      onPNGFahrzeug2ImageClick() {
        this.$router.push("/");
      },
      onPNGFahrzeug1ImageClick() {
        this.$router.push("/");
      },
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
  .png-af-it-logo {
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
  .plus-icon {
    position: absolute;
    top: 728.5px;
    left: 1174px;
    width: 85.5px;
    height: 85.5px;
    overflow: hidden;
    cursor: pointer;
  }
  .fahrzeug-hinzufuegen-text {
    position: absolute;
    top: 87.18%;
    left: 65.76%;
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
  .header-titel {
    position: absolute;
    top: 26.87%;
    left: 46.71%;
    font-size: var(--font-size-lg);
    font-weight: 600;
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
  .fahrzeuge-header {
    position: absolute;
    top: 62px;
    left: 174px;
    width: 1064px;
    height: 67px;
  }
  .fahrzeuge {
    position: relative;
    background-color: var(--color-darkslategray-100);
    width: 100%;
    height: 866px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-2xl);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }
</style>