<template>
  <div class="home-dashboard-hybrid">
    <div class="page-hintergrund-hybrid">
      <div class="verdunklung-hintergrund-effekt" />
      <img class="png-af-it-logo-icon"  src="/png-afit-logo@2x.png" />
      <div class="af-it-logo-effekt" />
    </div>

    /* diese Klasse ist die Struktur für die Items */
    <div class="home-otto-elemente">
      
      <div class="gang">
    <div class="element-background" @click="onGangContainerClick"></div>
    <b class="gang-value"><GangAnzeige/></b>
    <div class="element-titel">Gang</div>
  </div>
      
      <div class="bremse">
          <div class="element-background" @click=" onBremseContainerClick"></div>
          <b class="bremse-value"><BremseAnzeige/></b>
          <div class="element-titel">Bremsen</div>
      </div>
      
      <div class="speed">
        <div class="element-background" @click="onSpeedContainerClick"></div>
        <b class="speed-value"><GeschwindigkeitAnzeige/></b>
        <div class="element-titel">Geschwindigkeit</div>
      </div>
      
      <div class="oel-wasser">
        <div class="element-background" @click="onLWasserContainerClick"></div>
        <img class="png-wasser-icon"  src="/png-wasser-icon@2x.png" />
        <img class="png-oel-icon"  src="/png-l-icon@2x.png" />
        <b class="wasser-value"><WasserTemperaturAnzeige/></b>
        <b class="oel-value"><OelTemperaturAnzeige/></b>
        
      </div>
      <div class="drehzahl">
        <div class="element-background" @click="onDrehzahlContainerClick"></div>
        <b class="drehzahl-value"><DrehzahlAnzeige/></b>
        <div class="element-titel">Drehzahl</div>
      </div>
   
    </div>
    

  
    <div class="motorhaube-text">Motorhaube</div>
    <div class="spoiler-closed"><SpoilerAnzeige/></div>
    <div class="motorhaube-closed">CLOSED</div>
    <div class="spoiler-text">Spoiler</div>
    <div class="hupe-text">Hupe</div>
    <div class="hupe-aktiv"><HupeAnzeige/></div>
    <div class="abs-aktiv">ACTIVE</div>
    <div class="abs-text">ABS</div>
    <div class="bremse-text">Bremse</div>
    <div class="bremse-aktiv">ACTIVE</div>
  


    
    <div class="batterie-Wert-Hybrid">75%</div>
    <img
      class="png-batterie-icon"
      alt=""
      src="/png-batterie-icon-elektrisch@2x.png"
    />
    <img
      class="batterie-balken-hintergrund-hybrid"
      alt=""
      src="/batterie-balken-hintergrund-hybrid.svg"
    />
    <img
      class="batterie-balken-aktuell-hybrid"
      alt=""
      src="/batterie-balken-aktuell-hybrid.svg"
    />
    <div><TankAnzeige/></div>
    <img class="png-tank-icon-hybrid"  src="/png-tank-icon-otto@2x.png" />
    <img
      class="tank-balken-hintergrund-hybrid"
      alt=""
      src="/batterie-balken-hintergrund-elektrisch.svg"
    />
    <img
      class="tank-balken-aktuell-hybrid"
      alt=""
      src="/batterie-balken-aktuell-elektisch.svg"
    />
    <img
      class="png-auto-dashboard"
      alt=""
      src="/png-auto-dashboard@2x.png"
    />
    <div class="auto-titel">Porsche 911</div>

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
        :onClick="onProfilIconClick"
      />
      <div class="messwerte-textbox" :onClick="openMesswerteDropdown">Messwerte</div>
      
      <img
        class="navigation-icon"
        alt=""
        src="/navigation-icon.svg"
        :onClick="openMesswerteDropdown1"
      />
      <img
        class="png-cartracker-logo-icon"
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
  import MesswerteDropdown from "../components/MesswerteDropdown.vue"
  import GangAnzeige from "../components/GangAnzeige.vue"
  import DrehzahlAnzeige from "../components/DrehzahlAnzeige.vue"
  import TankAnzeige from "../components/TankAnzeige.vue"
  import GeschwindigkeitAnzeige from "../components/GeschwindigkeitAnzeige.vue"
  import OelTemperaturAnzeige from "../components/OelTemperaturAnzeige.vue"
  import BremseAnzeige from "../components/BremseAnzeige.vue"
  import WasserTemperaturAnzeige from "../components/WasserTemperaturAnzeige.vue"
  import SpoilerAnzeige from "../components/SpoilerAnzeige.vue"
  import HupeAnzeige from "../components/HupeAnzeige.vue"
  




  export default defineComponent({
    name: "HomeDashboardHybrid",
    data() {
      return {
        isSideBoardMenuOpen: false,
        isMesswerteDropdownOpen: false,
        isMesswerteDropdown1Open: false,
      };
    },
    components: { SideBoardMenu, PortalPopup, MesswerteDropdown, GangAnzeige, DrehzahlAnzeige, TankAnzeige, GeschwindigkeitAnzeige, OelTemperaturAnzeige, BremseAnzeige, WasserTemperaturAnzeige, SpoilerAnzeige, HupeAnzeige},
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
      async fetchDataForComponents() {
        try {
          const fetchPromises = [];

          if (this.$refs.GangAnzeige) {
            fetchPromises.push(this.$refs.GangAnzeige.fetchGearValue());
          }

          if (this.$refs.BremseAnzeige) {
            fetchPromises.push(this.$refs.BremseAnzeige.fetchBrakeInputValue());
          }

          if (this.$refs.WasserTemperaturAnzeige) {
            fetchPromises.push(this.$refs.WasserTemperaturAnzeige.fetchWaterTemperature());
          }

          if (this.$refs.OelTemperaturAnzeige) {
            fetchPromises.push(this.$refs.OelTemperaturAnzeige.fetchOilTemperatureValue());
          }

          if (this.$refs.TankAnzeige) {
            fetchPromises.push(this.$refs.TankAnzeige.fetchFuelVolume());
          }

          if (this.$refs.GeschwindigkeitAnzeige) {
            fetchPromises.push(this.$refs.GeschwindigkeitAnzeige.fetchAirflowspeedValue());
          }

          await Promise.all(fetchPromises);

         
        } catch (error) {
          console.error("Fehler beim Laden der Daten:", error);

          
        }
      },
    },
    mounted() {
      this.fetchDataForComponents();
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
    height: 810px;
    transform: rotate(180deg);
    transform-origin: 0 0;
  }
  .png-af-it-logo-icon {
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
    width: 1500px;
    height: 810px;
  }
  .page-hintergrund-hybrid {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1400px;
    height: 810px;
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
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 880px;
  } 

  .gang-value {
    position: absolute;
    top: 40px;
    left: 15px;
    display: inline-block;
    width: 43.6px;
    height: 37.5px;
  }
  
  
.element-background {
  width: 187.3px;
  height: 122.6px;
  border-radius: var(--br-xl);
  background-color: var(--color-darkolivegreen-100);
  opacity: 0.1;
  cursor:pointer;
}


  .bremse {
    position: absolute;
    top: 0px;
    left: 660px;
    width: 187.3px;
    height: 122.6px;
    
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
  }

  .speed-value {
    position: absolute;
    top: 80px;
    left: 25.3px;
    display: inline-block;
    width: 130px;
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
    left: 135px;
    display: inline-block;
    width: 43.6px;
    height: 37.5px;
  }
  .oel-value {
    position: absolute;
    top: 40px;
    left: 10px;
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
  }

  .drehzahl {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 193px;
    height: 125px;
  }

  .drehzahl-value {
    position: absolute;
    top: 40px;
    left: 15px;
    display: inline-block;
    width: 150px;
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
  .batterie-Wert-Hybrid {
    position: absolute;
    top: 480px;
    left: 1271px;
    background-color: var(--color-gray-400);
    width: 118px;
    height: 32px;
    color: var(--color-gray-300);
  }
  .png-batterie-icon {
    position: absolute;
    top: 485px;
    left: 1226px;
    width: 34px;
    height: 27px;
    object-fit: cover;
  }
  .batterie-balken-hintergrund-hybrid {
    position: absolute;
    top: 480px;
    left: 1008px;
    border-radius: var(--br-37xl);
    width: 207px;
    height: 32px;
  }
  .batterie-balken-aktuell-hybrid {
    position: absolute;
    top: 482px;
    left: 1011px;
    border-radius: var(--br-37xl);
    width: 168px;
    height: 28px;
  }
  
  .tank-wert-hybrid{
    position: absolute;
    top: 461px;
    left: 164px;
    background-color: var(--color-gray-400);
    width: 118px;
    height: 32px;
    color: var(--color-gray-300);
  }
  .png-tank-icon-hybrid {
    position: absolute;
    top: 462px;
    left: 124px;
    width: 29px;
    height: 25px;
    object-fit: cover;
  }
  .tank-balken-hintergrund-hybrid {
    position: absolute;
    top: 411px;
    left: 120px;
    border-radius: var(--br-37xl);
    width: 1193px;
    height: 46px;
  }
  .tank-balken-aktuell-hybrid{
    position: absolute;
    top: 415px;
    left: 124px;
    border-radius: var(--br-37xl);
    transform-origin: top left;
    transform: scaleX(0);
    transition: transform 1s ease;
    width: 1183px;
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
  .menu-icon:hover {
  color: #426b1f; 
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
    left: 846px;
    width: 108px;
    height: 32px;
    cursor: pointer;
    font-weight: 500;
  }
  .messwerte-textbox:hover {
  color: #426b1f; 
  filter: brightness(0.9);
}
  .navigation-icon {
    position: absolute;
    top: 21px;
    left: 957px;
    width: 24px;
    height: 24px;
    overflow: hidden;
    cursor: pointer;
  }
  .png-cartracker-logo-icon {
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

  .motorhaube-text {
    position: absolute;
    height: 10px; 
    width: 103px; 
    top: 244px; 
    left: 1229px; 
    font-weight: 300;
    display: inline-block;
}

.spoiler-closed {
    position: absolute;
    height: 10px; 
    width: 65px; 
    top: 270px; 
    left: 1131px; 
    font-weight: 300;
    color: var(--color-darkolivegreen-100);
    text-align: center;
    display: inline-block;
}

.motorhaube-closed {
    position: absolute;
    height: 10px; 
    width: 71px; 
    top: 244px; 
    left: 1131px; 
    font-weight: 300;
    color: var(--color-darkolivegreen-100);
    text-align: center;
    display: inline-block;
}

.spoiler-text {
    position: absolute;
    height: 10px; 
    width: 57px; 
    top: 270px; 
    left: 1229px; 
    font-weight: 300;
    display: inline-block;
}

.hupe-text {
    position: absolute;
    height: 10px; 
    width: 50px; 
    top: 244px; 
    left: 124px; 
    font-weight: 300;
    display: inline-block;
}

.hupe-aktiv {
    position: absolute;
    height: 10px; 
    width: 43px; 
    top: 244px; 
    left: 210px; 
    font-weight: 300;
    color: var(--color-darkolivegreen-100);
    text-align: center;
    display: inline-block;
}

.abs-aktiv {
    position: absolute;
    height: 10px;
    width: 43px; 
    top: 270px; 
    left: 210px; 
    font-weight: 300;
    color: var(--color-darkolivegreen-100);
    text-align: center;
    display: inline-block;
}

.abs-text {
    position: absolute;
    height: 10px; 
    width: 32px; 
    top: 270px; 
    left: 124px; 
    font-weight: 300;
    display: inline-block;
}
.bremse-aktiv {
    position: absolute;
    height: 10px;
    width: 43px; 
    top: 296px; 
    left: 210px; 
    font-weight: 300;
    color: var(--color-darkolivegreen-100);
    text-align: center;
    display: inline-block;
}

.bremse-text {
    position: absolute;
    height: 10px; 
    width: 32px; 
    top: 296px; 
    left: 124px; 
    font-weight: 300;
    display: inline-block;
}

.element-background:hover {
    background-color: var(--color-darkolivegreen-200);
  }

  /* Du kannst dies für andere Container wiederholen, indem du die entsprechenden Klassen hinzufügst */
  .bremse:hover .element-background,
  .speed:hover .element-background,
  .oel-wasser:hover .element-background,
  .drehzahl:hover .element-background,
  .gang:hover .element-background {
    background-color: var(--color-darkolivegreen-200);
  }

  .home-dashboard-hybrid {
    position: relative;
    background-color: var(--color-darkslategray-100);
    width: 100%;
    height: 810px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-2xl);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }
</style>