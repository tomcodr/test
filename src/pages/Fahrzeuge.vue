<template>
  <div class="fahrzeuge">
    
    <div class="page-hintergrund">
      <div class="verdunklung-hintergrund-effekt" />
      <img class="png-af-it-logo" alt="" src="/png-afit-logo@2x.png" />
      <div class="af-it-logo-effekt" />
    </div>
    
    <img class="plus-icon" alt="" src="/plus.svg" @click="onPlusClick" />
    
    <div class="fahrzeug-hinzufuegen-text">Fahrzeug hinzufügen</div>
    <img class="pfeil-rechts-icon" alt="" src="/pfeil-rechts.svg" />
    <img class="pfeil-links-icon" alt="" src="/pfeil-links.svg" />
    <div class="fahrzeug-rechts-titel">BMW M4</div>
    <img class="fahrzeug-rechts-stern-icon" alt="" src="/fahrzeug3-stern@2x.png" />
    <div class="fahrzeug-links-titel">MERCEDES S 400</div>
    <img class="fahrzeug-links-stern-icon" alt="" src="/fahrzeug3-stern@2x.png" />
    <div class="fahrzeug-mitte-titel">PORSCHE 911</div>
    <img class="fahrzeug-mitte-stern-icon" alt="" src="/fahrzeug1-stern@2x.png" />
    
    <img
      class="png-fahrzeug-rechts"
      alt=""
      src="/png-fahrzeug3@2x.png"
      @click="onPNGFahrzeug3ImageClick"
    />
    <img
      class="png-fahrzeug-links"
      alt=""
      src="/png-fahrzeug2@2x.png"
      @click="onPNGFahrzeug2ImageClick"
    />
    <img
      class="png-fahrzeug-mitte"
      alt=""
      src="/png-fahrzeug1@2x.png"
      @click="onPNGFahrzeug1ImageClick"
    />
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
     <div class="messwerte-textbox" :onClick="openMesswerteDropdown">Messwerte</div>
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
    name: "Fahrzeuge",
    data() {
      return {
        isSideBoardMenuOpen: false,
        isMesswerteDropdownOpen: false,
        isMesswerteDropdown1Open: false,
      };
    },
    components: { SideBoardMenu, PortalPopup, MesswerteDropdown },
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
  .pfeil-rechts-icon {
    position: absolute;
    top: 421px;
    left: 1359px;
    width: 24px;
    height: 24px;
    overflow: hidden;
  }
  .pfeil-links-icon {
    position: absolute;
    top: 421px;
    left: 52px;
    width: 24px;
    height: 24px;
    overflow: hidden;
  }
  .fahrzeug-rechts-titel {
    position: absolute;
    top: 60.16%;
    left: 77.43%;
    font-size: var(--font-size-mid);
    text-align: center;
  }
  .fahrzeug-rechts-stern-icon {
    position: absolute;
    top: 519px;
    left: 1055px;
    width: 25px;
    height: 29px;
    object-fit: cover;
  }
  .fahrzeug-links-titel {
    position: absolute;
    top: 60.28%;
    left: 17.78%;
    font-size: var(--font-size-mid);
  }
  .fahrzeug-links-stern-icon {
    position: absolute;
    top: 520px;
    left: 220px;
    width: 25px;
    height: 29px;
    object-fit: cover;
  }
  .fahrzeug-mitte-titel{
    position: absolute;
    top: 70.67%;
    left: 45.42%;
  }
  .fahrzeug-mitte-stern-icon {
    position: absolute;
    height: 3.7%;
    width: 2.29%;
    top: 70.44%;
    right: 54.86%;
    bottom: 25.87%;
    left: 42.85%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .png-fahrzeug-rechts {
    position: absolute;
    top: 364px;
    left: 993px;
    width: 301px;
    height: 168.3px;
    object-fit: cover;
    cursor: pointer;
  }
  .png-fahrzeug-links {
    position: absolute;
    top: 364px;
    left: 192px;
    width: 297px;
    height: 158px;
    object-fit: cover;
    cursor: pointer;
  }
  .png-fahrzeug-mitte {
    position: absolute;
    top: 409px;
    left: 526px;
    width: 390px;
    height: 219px;
    object-fit: cover;
    cursor: pointer;
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