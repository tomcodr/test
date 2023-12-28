<template>
  <div class="home-dashboard-otto">
    <div class="page-hintergrund">
      <div class="verdunklung-hintergrund-effekt" />
      <img class="png-af-it-logo-icon" alt="" src="/png-afit-logo@2x.png" />
      <div class="af-it-logo-effekt" />
    </div>
    
    <div class="home-otto-elemente">
      
      <div class="gang" @click="onGangContainerClick">
        <div class="element-background"></div>
        <b class="gang-value">G</b>
        <div class="element-titel">Gang</div>
      </div>
      
      <div class="bremse" @click="onBremseContainerClick">
        <div class="element-background"></div>
        <b class="bremse-value">G</b>
        <div class="element-titel">Bremse</div>
      </div>
      
      <div class="speed" @click="onSpeedContainerClick">
        <div class="element-background"></div>
        <b class="speed-value">G</b>
        <div class="element-titel">Geschwindigkeit</div>
      </div>
      
      <div class="oel-wasser" @click="onLWasserContainerClick">
        <div class="element-background"></div>
        <img class="png-wasser-icon" alt="" src="/png-wasser-icon@2x.png" />
        <img class="png-oel-icon" alt="" src="/png-l-icon@2x.png" />
        <b class="wasser-value">G</b>
        <b class="oel-value">G</b>
      </div>
      
      <div class="drehzahl" @click="onDrehzahlContainerClick">
        <div class="element-background"></div>
        <b class="drehzahl-value">G</b>
        <div class="element-titel">Drehzahl</div>
      </div>
    
    </div>
    
    
    <div class="tank-wert-otto">77%</div>
    
    <img class="png-tank-icon-otto" alt="" src="/png-tank-icon-otto@2x.png" />
    
    <img
      class="tank-balken-hintergrund-otto"
      alt=""
      src="/batterie-balken-hintergrund-elektrisch.svg"
    />
    
    <img
      class="tank-balken-aktuell-otto"
      alt=""
      src="/batterie-balken-aktuell-elektisch.svg"
    />
    
    <img
      class="png-auto-dashboard"
      alt=""
      src="/png-auto-dashboard@2x.png"
    />
    <div class="auto-titel">Porsche 911</div>
    
    
    <div class="spoiler-text">Spoiler</div>  
    <div class="spoiler-value">Active</div>
    
    <div class="motorhaube-text">Motorhaube</div>
    <div class="motorhaube-value">Active</div>

    <div class="abs-text">ABS</div>
    <div class="abs-value">Active</div>
      
    <div class="hupe-text">Hupe</div> 
    <div class="hupe-value">Active</div>
    
    
    <div class="home-header">
      
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
        class="png-cartracker-logo"
        alt=""
        src="/png-cartracker-logo@2x.png"
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
    name: "HomeDashboardOtto",
    data() {
      return {
        isSideBoardMenuOpen: false,
        isMesswerteDropdownOpen: false,
        isMesswerteDropdown1Open: false,
      };
    },
    components: { SideBoardMenu, PortalPopup, MesswerteDropdown },
    methods: {
      onGangContainerClick() {
        this.$router.push("/gang");
      },
      onBremseContainerClick() {
        this.$router.push("/bremsen");
      },
      onSpeedContainerClick() {
        this.$router.push("/geschwindigkeit");
      },
      onLWasserContainerClick() {
        this.$router.push("/temperaturen");
      },
      onDrehzahlContainerClick() {
        this.$router.push("/drehzahl");
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
  .png-af-it-logo-icon{
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
  .element-background {
  width: 187.3px;
  height: 122.6px;
  border-radius: var(--br-xl);
  background-color: var(--color-darkolivegreen-100);
  opacity: 0.1;
  cursor:pointer;
}

  .gang-value {
    position: absolute;
    top: 80px;
    left: 25.3px;
    display: inline-block;
    width: 43.6px;
    height: 37.5px;
  }
  .element-titel {
    position: absolute;
    top: 20.3px;
    left: 25.7px;
    font-size: var(--font-size-base);
    font-weight: 800;
    display: inline-block;
    width: 82px;
    height: 15.4px;
  }
  .gang {
    position: absolute;
    top: 0px;
    left: 880px;
    width: 187.3px;
    height: 122.6px;
    cursor: pointer;
  }
  .bremse {
    position: absolute;
    top: 0px;
    left: 660px;
    width: 187.3px;
    height: 122.6px;
    cursor: pointer;
  }

  .bremse-value {
    position: absolute;
    top: 80px;
    left: 25.3px;
    display: inline-block;
    width: 43.6px;
    height: 37.5px;
  }
 
  .speed {
    position: absolute;
    top: 0px;
    left: 440px;
    width: 187.3px;
    height: 122.6px;
    cursor: pointer;
  }

  .speed-value {
    position: absolute;
    top: 80px;
    left: 25.3px;
    display: inline-block;
    width: 43.6px;
    height: 37.5px;
  }
  .png-wasser-icon {
    position: absolute;
    top: 8px;
    left: 138px;
    width: 28px;
    height: 37px;
    object-fit: cover;
  }
  .png-oel-icon {
    position: absolute;
    top: 7px;
    left: 10px;
    width: 52px;
    height: 37px;
    object-fit: cover;
  }
  .wasser-value {
    position: absolute;
    top: 81px;
    left: 144px;
    display: inline-block;
    width: 43.6px;
    height: 37.5px;
  }
  .oel-value {
    position: absolute;
    top: 81px;
    left: 28.3px;
    display: inline-block;
    width: 43.6px;
    height: 37.5px;
  }
  .oel-wasser {
    position: absolute;
    top: 0px;
    left: 220px;
    width: 187.3px;
    height: 122.6px;
    cursor: pointer;
  }
  
  .drehzahl {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 193px;
    height: 125px;
    cursor: pointer;
  }

  .drehzahl-value {
    position: absolute;
    top: 80px;
    left: 25.3px;
    display: inline-block;
    width: 43.6px;
    height: 37.5px;
  }
  .home-otto-elemente {
    position: absolute;
    top: 550px;
    left: 186px;
    width: 1067.3px;
    height: 125px;
    font-size: var(--font-size-xl);
    font-family: var(--font-manrope);
  }
  .tank-wert-otto{
    position: absolute;
    top: 461px;
    left: 164px;
    background-color: var(--color-gray-400);
    width: 118px;
    height: 32px;
    color: var(--color-gray-300);
  }
 
  .png-tank-icon-otto {
    position: absolute;
    top: 462px;
    left: 124px;
    width: 29px;
    height: 25px;
    object-fit: cover;
  }
  .tank-balken-hintergrund-otto {
    position: absolute;
    top: 411px;
    left: 120px;
    border-radius: var(--br-37xl);
    width: 1193px;
    height: 46px;
  }
  .tank-balken-aktuell-otto {
    position: absolute;
    top: 415px;
    left: 124px;
    border-radius: var(--br-37xl);
    width: 843px;
    height: 39px;
  }
  .png-auto-dashboard{
    position: absolute;
    top: 103px;
    left: 385px;
    width: 670px;
    height: 287px;
    object-fit: cover;
    opacity: 0.7;
  }
  .auto-titel {
    position: absolute;
    top: 9.46%;
    left: 45.28%;
    font-size: var(--font-size-lg);
    font-weight: 600;
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
  .png-cartracker-logo {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 85px;
    height: 67px;
    object-fit: cover;
  }
  .home-header {
    position: absolute;
    top: 62px;
    left: 174px;
    width: 1064px;
    height: 67px;
  }
  .home-dashboard-otto {
    position: relative;
    background-color: var(--color-darkslategray-100);
    width: 100%;
    height: 867px;
    text-align: left;
    font-size: var(--font-size-2xl);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }

  .spoiler-text{
    position: absolute;
    top: 310px;
    left: 84.03%;
    font-weight: 800;
    display: inline-block;
  }

  .spoiler-value{
    position: absolute;
    top: 310px;
    left: 1090px;
    font-weight: 300;
    color: var(--color-darkolivegreen-100);
    text-align: center;
    display: inline-block;
  }
  .motorhaube-text {
    position: absolute;
    top: 33.56%;
    left: 84.03%;
    font-weight: 800;
    display: inline-block;
  }
  .motorhaube-value {
    position: absolute;
    top: 33.56%;
    left: 1090px;
    font-weight: 300;
    color: var(--color-darkolivegreen-100);
    text-align: center;
    display: inline-block;
  }

  .abs-text{
    position: absolute;
    top: 33.56%;
    left: 8.61%;
    font-weight: 800;
    display: inline-block;
  }

  .abs-value{
    position: absolute;
    top: 33.56%;
    left: 200px;
    font-weight: 300;
    color: var(--color-darkolivegreen-100);
    text-align: center;
    display: inline-block;
  }

  .hupe-text{
    position: absolute;
    top: 310px;
    left: 8.61%;
    font-weight: 800;
    display: inline-block;
  }

  .hupe-value{
    position: absolute;
    top: 310px;
    left: 200px;
    font-weight: 300;
    color: var(--color-darkolivegreen-100);
    text-align: center;
    display: inline-block;
  }
</style>