<template>
  <div class="home-dashboard-elektrisch">
    <div class="page-hintergrund">
      <div class="verdunklung-hintergrund-effekt" />
      <img class="png-af-it-logo" alt="" src="/png-afit-logo@2x.png" />
      <div class="af-it-logo-effekt" />
    </div>
    
    
    <div class="home-elektrisch-elemente">
      
      <div class="lenkung" @click="onLenkungContainerClick">
        <div class="element-background"></div>
        <b class="lenkung-value">G</b>
        <div class="element-titel">Lenkung</div>
      </div>
      
      <div class="bremse" @click="onBremseContainerClick">
        <div class="element-background"></div>
        <b class="bremse-value">G</b>
        <div class="element-titel">Bremse</div>
      </div>
      
      <div class="geschwindigkeit" @click="onGeschwindigkeitContainerClick">
        <div class="element-background"></div>
        <b class="geschwindigkeit-value">G</b>
        <div class="element-titel">Geschwindigkeit</div>
      </div>
      
      <div class="batterie" @click="onBatterieContainerClick">
        <div class="element-background"></div> 
        <b class="batteriestatus-value">G</b>
        <div class="element-titel">Batteriestatus</div>
      </div>
      
      <div class="trips" @click="onTripsContainerClick">
        <div class="element-background"></div>
        <b class="trips-value">G</b>
        <div class="element-titel">Trips</div>
      </div>
    
    </div>
    
    <div class="batterie-wert-elektrisch">80%</div>
    <img
      class="png-batterie-icon-elektrisch"
      alt=""
      src="/png-batterie-icon-elektrisch@2x.png"
    />
    <img
      class="batterie-balken-hintergrund-elektrisch"
      alt=""
      src="/batterie-balken-hintergrund-elektrisch.svg"
    />
    <img
      class="batterie-balken-aktuell-elektrisch"
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
      <div class="messwerte-textbox" :onClick="openMesswerteDropdownElektrisch">Messwerte</div>
      
      <img
        class="navigation-icon"
        alt=""
        src="/navigation-icon.svg"
        :onClick="openMesswerteDropdownElektrisch"
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
  
  <div v-if="isMesswerteDropdownElektrischOpen">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :relativeLayerRef="$refs[messwerteTextboxContainerRef]"
      :onOutsideClick="closeMesswerteDropdownElektrisch"
    >
      <MesswerteDropdownElektrisch :onClose="closeMesswerteDropdownElektrisch" />
    </PortalPopup>
  </div>
  
</template>
<script>
  import { defineComponent } from "vue";
  import SideBoardMenu from "../components/SideBoardMenu.vue";
  import PortalPopup from "../components/PortalPopup.vue";
  import MesswerteDropdownElektrisch from "../components/MesswerteDropdownElektrisch.vue"

  export default defineComponent({
    name: "HomeDashboardElektrisch",
    data() {
      return {
        isSideBoardMenuOpen: false,
        isMesswerteDropdownElektrischOpen: false,
        
        
      };
    },
    components: { SideBoardMenu, PortalPopup, MesswerteDropdownElektrisch },
    methods: {
      onLenkungContainerClick() {
        this.$router.push("/lenkung");
      },
      onBremseContainerClick() {
        this.$router.push("/bremsen");
      },
      onGeschwindigkeitContainerClick() {
        this.$router.push("/geschwindigkeit");
      },
      onBatterieContainerClick() {
        this.$router.push("/temperaturen"); /*DAFÜR MUSS NOCH EINE EXRA PAGE KOMMEN!*/
      },
      onTripsContainerClick() {
        this.$router.push("/trips");
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
      openMesswerteDropdownElektrisch() {
        console.log("öffne ")
        this.isMesswerteDropdownElektrischOpen = true;
      },
      closeMesswerteDropdownElektrisch() {
        console.log("schließe")
        this.isMesswerteDropdownElektrischOpen = false;
      },
      
    },
  });
</script>
<style scoped>
  .verdunklung-hintergrund-effekt {
    position: absolute;
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
  .af-it-logo-effekt {
    position: absolute;
    background-color: var(--color-darkslategray-200);
    backdrop-filter: blur(200px);
    width: 1440px;
    height: 867px;
  }
  .page-hintergrund {
    position: absolute;
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
  .lenkung {
    position: absolute;
    left: 880px;
    width: 187.3px;
    height: 122.6px;
    cursor: pointer;
  }
  .bremse {
    position: absolute;
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
  .geschwindigkeit-value {
    position: absolute;
    top: 81px;
    left: 26px;
    display: inline-block;
    width: 70px;
    height: 30px;
  }
  .geschwindigkeit {
    position: absolute;
    left: 440px;
    width: 187.3px;
    height: 122.6px;
    cursor: pointer;
  }
  .batteriestatus-value {
    position: absolute;
    top: 81px;
    left: 27px;
    display: inline-block;
    width: 70px;
    height: 30px;
  }
 
  .batterie {
    position: absolute;
    left: 220px;
    width: 187.3px;
    height: 122.6px;
    cursor: pointer;
  }
  .lenkung-value {
    position: absolute;
    top: 80px;
    left: 25.3px;
    display: inline-block;
    width: 43.6px;
    height: 37.5px;
  }

  .trips {
    position: absolute;
    width: 187.3px;
    height: 122.6px;
    cursor: pointer;
  }

  .trips-value {
    position: absolute;
    top: 80px;
    left: 25.3px;
    display: inline-block;
    width: 43.6px;
    height: 37.5px;
  }
  .home-elektrisch-elemente {
    position: absolute;
    top: 550px;
    left: 186px;
    width: 1067.3px;
    height: 125px;
    font-size: var(--font-size-xl);
    font-family: var(--font-manrope);
  }
  
  .batterie-wert-elektrisch{
    position: absolute;
    top: 461px;
    left: 164px;
    background-color: var(--color-gray-400);
    width: 118px;
    height: 32px;
    color: var(--color-gray-300);
  }
 
  .png-batterie-icon-elektrisch {
    position: absolute;
    top: 462px;
    left: 124px;
    width: 34px;
    height: 27px;
    object-fit: cover;
  }
  .batterie-balken-hintergrund-elektrisch {
    position: absolute;
    top: 411px;
    left: 120px;
    border-radius: var(--br-37xl);
    width: 1193px;
    height: 46px;
  }
  .batterie-balken-aktuell-elektrisch {
    position: absolute;
    top: 415px;
    left: 124px;
    border-radius: var(--br-37xl);
    width: 843px;
    height: 39px;
  }
  .png-auto-dashboard {
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
    top: 82px;
    left: 652px;
    width: 108px;
    height: 27px;
    font-size: var(--font-size-lg);
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
  .png-cartracker-logo{
    position: absolute;
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
  .home-dashboard-elektrisch {
    position: relative;
    background-color: var(--color-darkslategray-100);
    width: 100%;
    height: 867px;
    overflow: hidden;
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