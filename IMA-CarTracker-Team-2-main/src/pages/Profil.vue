<template>
  
  <div class="profil">
    
    <div class="page-hintergrund">
      <div class="verdunklung-hintergrund-effekt" />
      <img class="af-it-logo" alt="" src="/png-afit-logo@2x.png" />
      <div class="af-it-logo-effekt" />
    </div>
    
    <div class="userStadt">Ulm</div>
    <div class="stadt">Stadt</div>
    <div class="userPLZ">01010</div>
    <div class="PLZ">PLZ</div>
    <div class="userStrasze">teststraße14</div>
    <div class="strasze">Straße</div>
    <a class="userMail" href="mailto:driver01@gmail.com" target="_blank"
      >driver01@gmail.com</a
    >
    <div class="email">Email</div>
    <div class="userName">Driver01</div>
    <div class="benutzername">Benutzername</div>
    <div class="userFullName">Faruk Mercan</div>
    <img class="person-icon" alt="" src="/png-person-icon@2x.png" />
    
    <div class="profil-header">
      
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
      <div class="profil-text">Profil</div>
    
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
    name: "Profil",
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
  .userStadt {
    position: absolute;
    top: 605px;
    left: 739px;
    display: inline-block;
    width: 49px;
    height: 38px;
  }
  .stadt {
    position: absolute;
    top: 605px;
    left: 447px;
  }
  .userPLZ {
    position: absolute;
    top: 559px;
    left: 739px;
    display: inline-block;
    width: 64px;
    height: 38px;
  }
  .PLZ {
    position: absolute;
    top: 559px;
    left: 447px;
  }
  .userStrasze {
    position: absolute;
    top: 513px;
    left: 739px;
    display: inline-block;
    width: 152px;
    height: 38px;
  }
  .strasze {
    position: absolute;
    top: 513px;
    left: 447px;
  }
  .userMail{
    position: absolute;
    top: 467px;
    left: 739px;
    text-decoration: underline;
    color: inherit;
    display: inline-block;
    width: 255px;
    height: 38px;
  }
  .email {
    position: absolute;
    top: 467px;
    left: 447px;
  }
  .userName {
    position: absolute;
    top: 421px;
    left: 739px;
    display: inline-block;
    width: 96px;
    height: 38px;
  }
  .benutzername {
    position: absolute;
    top: 421px;
    left: 447px;
  }
  .userFullName {
    position: absolute;
    top: 329px;
    left: 597px;
    font-size: var(--font-size-21xl);
    font-weight: 300;
    font-family: var(--font-sansation-light);
  }
  .person-icon {
    position: absolute;
    top: 187px;
    left: 651px;
    width: 137px;
    height: 134px;
    object-fit: cover;
  }
  .menu-icon{
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
  .profil-text {
    position: absolute;
    top: 28.36%;
    left: 48.97%;
    font-size: var(--font-size-lg);
    font-weight: 600;
  }
  .profil-header {
    position: absolute;
    top: 61px;
    left: 174px;
    width: 1064px;
    height: 67px;
    font-size: var(--font-size-2xl);
  }
  .profil {
    position: relative;
    background-color: var(--color-darkslategray-100);
    width: 100%;
    height: 867px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-6xl);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }
</style>