<template>
  <div class="page">
    
    <div class="page-hintergrund">
      <div class="verdunklung-hintergrund-effekt" />
      <img class="png-af-it-logo-icon"  src="/png-afit-logo@2x.png" />
      <div class="af-it-logo-effekt" />
    </div>
    
    <container class = "chart-geschwindigkeit"><ChartGeschwindigkeit/></container>


    <img
      class="png-auto"
      alt=""
      src="/png-auto-dashboard@2x.png"
    />
    /* WIRD EH SPÄTER MIT RICHTIGEM DIAGRAMM ERSETZT ALSO IST DAS GERADE UNNÖTIG ZU KORRIEGIEREN */
    <div class="light-line-chart-mini3">
      <div class="filters3">
        <div class="selector-013">
          <div class="select-data-type3">SELECT DATA TYPE</div>
          <img class="arrow-down-t26" alt="" src="/arrowdown--t2.svg" />
        </div>
        <div class="divider3" />
        <div class="selector-023">
          <div class="select-date3">SELECT DATE</div>
          <img class="arrow-down-t27" alt="" src="/arrowdown--t21.svg" />
        </div>
      </div>
      <div class="top3">
        <div class="title3">
          <div class="subtitle3">KM/H</div>
        </div>
        <div class="date3">
          <img class="calendar-icon3" alt="" src="/calendar.svg" />
          <div class="may-20213">1 May - 2021, 1 June - 2021</div>
        </div>
      </div>
      <img class="bottom-icon3" alt="" src="/bottom.svg" />
      <div class="chart3">
        <div class="timeline3">
          <div class="div79">1</div>
          <div class="div80">5</div>
          <div class="div81">10</div>
          <div class="div82">15</div>
          <div class="div83">20</div>
          <div class="div84">25</div>
          <div class="div85">30</div>
        </div>
        <div class="value3">
          <div class="div86">350</div>
          <div class="div87">300</div>
          <div class="div88">250</div>
          <div class="div89">200</div>
          <div class="div90">150</div>
          <div class="div91">100</div>
          <div class="div92">50</div>
          <div class="div93">0</div>
        </div>
        <div class="div94" />
        <div class="div95" />
        <div class="div96" />
        <div class="div97" />
        <div class="div98" />
        <div class="div99" />
        <div class="div100" />
        <div class="div101" />
        <div class="div102" />
        <div class="chart-child15" />
        <div class="chart-child16" />
        <div class="chart-child17" />
        <div class="chart-child18" />
        <div class="chart-child19" />
        <div class="chart-child20" />
        <img class="line-icon3" alt="" src="/line.svg" />
      </div>
    </div>
    
    
    <div class="kmh">KM/H</div>
    <div class="geschwindigkeit-value"><GeschwindigkeitAnzeige/></div>
    <div class="auto-titel">Porsche 911</div>
    
    <div class="drehzahl-header">
      
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
      <div class="messwerte-textbox" :onClick="openMesswerteDropdown" >Messwerte</div>
      
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
  import GeschwindigkeitAnzeige from "../components/GeschwindigkeitAnzeige.vue";
  import ChartGeschwindigkeit from "../components/ChartGeschwindigkeit.vue";

  export default defineComponent({
    name: "Geschwindigkeit",
    data() {
      return {
        isSideBoardMenuOpen: false,
        isMesswerteDropdownOpen: false,
        isMesswerteDropdown1Open: false,
      };
    },
    components: { SideBoardMenu, PortalPopup, MesswerteDropdown, GeschwindigkeitAnzeige, ChartGeschwindigkeit },
    methods: {
      onCARTRACKERLOGOImageClick() {
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
 
  .png-auto {
    position: absolute;
    top: 103px;
    left: 385px;
    width: 670px;
    height: 287px;
    object-fit: cover;
    opacity: 0.7;
  }

  .kmh {
    position: absolute;
    top: 450px;
    left: 400px;
    font-size: var(--font-size-11xl);
    font-weight: 300;
  }
  .geschwindigkeit-value {
    position: absolute;
    top: 452px;
    left: 250px;
    font-size: var(--font-size-131xl);
    font-weight: 300;
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
  .drehzahl-header {
    position: absolute;
    top: 62px;
    left: 175px;
    width: 1064px;
    height: 67px;
    font-size: var(--font-size-2xl);
    font-family: var(--font-poppins);
  }
 

  .chart-geschwindigkeit {
    position: absolute;
    top: 410px;
    left: 550px;
    max-width: 100%; 
    max-height: 100%;
  }

  .chart-Gang {
    position: absolute;
    top: 410px;
    left: 550px;
    max-width: 100%; 
    max-height: 100%;
  }
</style>