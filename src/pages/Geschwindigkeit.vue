<template>
  <div class="geschwindigkeit">
    
    <div class="page-hintergrund">
      <div class="verdunklung-hintergrund-effekt" />
      <img class="png-af-it-logo" alt="" src="/png-afit-logo@2x.png" />
      <div class="af-it-logo-effekt" />
    </div>
    
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
  import GeschwindigkeitAnzeige from "../components/GeschwindigkeitAnzeige.vue";

  export default defineComponent({
    name: "Geschwindigkeit",
    data() {
      return {
        isSideBoardMenuOpen: false,
        isMesswerteDropdownOpen: false,
        isMesswerteDropdown1Open: false,
      };
    },
    components: { SideBoardMenu, PortalPopup, MesswerteDropdown, GeschwindigkeitAnzeige },
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
 
  .png-auto {
    position: absolute;
    top: 103px;
    left: 385px;
    width: 670px;
    height: 287px;
    object-fit: cover;
    opacity: 0.7;
  }
  .select-data-type3 {
    position: absolute;
    height: 35%;
    width: 84.27%;
    top: 32.65%;
    left: 0%;
    font-weight: 500;
    display: inline-block;
  }
  .arrow-down-t26 {
    position: absolute;
    height: 40%;
    width: 12.6%;
    top: 30%;
    right: 0%;
    bottom: 30%;
    left: 87.4%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .selector-013 {
    position: absolute;
    height: 100%;
    width: 54.51%;
    top: 0%;
    right: 45.49%;
    bottom: 0%;
    left: 0%;
    border-radius: var(--br-9xs);
    overflow: hidden;
  }
  .divider3 {
    position: absolute;
    height: 47.94%;
    width: 0.41%;
    top: 25.88%;
    right: 42.72%;
    bottom: 26.18%;
    left: 56.87%;
    border-right: 1px solid var(--color-dimgray-200);
    box-sizing: border-box;
  }
  .select-date3 {
    position: absolute;
    height: 35%;
    width: 78.73%;
    top: 32.65%;
    left: 0%;
    font-weight: 500;
    display: inline-block;
  }
  .arrow-down-t27 {
    position: absolute;
    height: 40%;
    width: 17.04%;
    top: 30%;
    right: -0.1%;
    bottom: 30%;
    left: 83.06%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .selector-023 {
    position: absolute;
    height: 100%;
    width: 40.33%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 59.67%;
    border-radius: var(--br-9xs);
    overflow: hidden;
  }
  .filters3 {
    position: absolute;
    height: 10.46%;
    width: 44.89%;
    top: 89.54%;
    right: 52.74%;
    bottom: 0%;
    left: 2.37%;
  }
  .subtitle3 {
    position: absolute;
    height: 43.13%;
    width: 100%;
    top: 56.87%;
    left: 0%;
    display: inline-block;
  }
  .title3 {
    position: absolute;
    height: 100%;
    width: 14.04%;
    top: 0%;
    right: 85.96%;
    bottom: 0%;
    left: 0%;
    overflow: hidden;
  }
  .calendar-icon3 {
    position: absolute;
    height: 100%;
    width: 8.54%;
    top: 0%;
    right: 91.46%;
    bottom: 0%;
    left: 0%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .may-20213 {
    position: absolute;
    height: 100%;
    width: 87.19%;
    top: 0%;
    left: 12.88%;
    display: inline-block;
  }
  .date3 {
    position: absolute;
    height: 32.59%;
    width: 26.92%;
    top: 67.73%;
    right: 0%;
    bottom: -0.32%;
    left: 73.08%;
    text-align: right;
    font-size: var(--font-size-3xs);
  }
  .top3 {
    position: absolute;
    height: 9.63%;
    width: 93.69%;
    top: 0%;
    right: 0.55%;
    bottom: 90.37%;
    left: 5.77%;
    font-size: var(--text-body-body2-roboto-regular-size);
  }
  .bottom-icon3 {
    position: absolute;
    height: 10.43%;
    width: 94.78%;
    top: 79.17%;
    right: 0%;
    bottom: 10.4%;
    left: 5.22%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .div79 {
    position: absolute;
    height: 100%;
    width: 1.34%;
    top: 0%;
    left: 0%;
    display: inline-block;
  }
  .div80 {
    position: absolute;
    height: 100%;
    width: 1.34%;
    top: 0%;
    left: 15.19%;
    display: inline-block;
  }
  .div81 {
    position: absolute;
    height: 100%;
    width: 2.88%;
    top: 0%;
    left: 30.39%;
    display: inline-block;
  }
  .div82 {
    position: absolute;
    height: 100%;
    width: 2.69%;
    top: 0%;
    left: 47.12%;
    display: inline-block;
  }
  .div83 {
    position: absolute;
    height: 100%;
    width: 2.69%;
    top: 0%;
    left: 63.65%;
    display: inline-block;
  }
  .div84 {
    position: absolute;
    height: 100%;
    width: 3.08%;
    top: 0%;
    left: 80.19%;
    display: inline-block;
  }
  .div85 {
    position: absolute;
    height: 100%;
    width: 2.69%;
    top: 0%;
    left: 97.12%;
    display: inline-block;
  }
  .timeline3 {
    position: absolute;
    height: 5.6%;
    width: 94.2%;
    top: 94.4%;
    right: 0%;
    bottom: 0%;
    left: 5.8%;
  }
  .div86 {
    position: absolute;
    height: 5.63%;
    width: 146.07%;
    top: 0.2%;
    left: -44.94%;
    display: inline-block;
  }
  .div87 {
    position: absolute;
    height: 6.14%;
    width: 138.58%;
    top: 13.5%;
    left: -37.45%;
    display: inline-block;
  }
  .div88 {
    position: absolute;
    height: 6.14%;
    width: 138.58%;
    top: 26.8%;
    left: -37.45%;
    display: inline-block;
  }
  .div89 {
    position: absolute;
    height: 6.14%;
    width: 146.07%;
    top: 40.1%;
    left: -44.94%;
    display: inline-block;
  }
  .div90 {
    position: absolute;
    height: 5.63%;
    width: 146.07%;
    top: 53.91%;
    left: -44.94%;
    display: inline-block;
  }
  .div91 {
    position: absolute;
    height: 6.14%;
    width: 131.09%;
    top: 67.21%;
    left: -29.96%;
    display: inline-block;
  }
  .div92 {
    position: absolute;
    height: 6.14%;
    width: 146.07%;
    top: 80.51%;
    left: -44.94%;
    display: inline-block;
  }
  .div93 {
    position: absolute;
    height: 6.04%;
    width: 25.84%;
    top: 93.96%;
    left: 73.78%;
    display: inline-block;
  }
  .value3 {
    position: absolute;
    height: 92.79%;
    width: 4.9%;
    top: 1.99%;
    right: 95.1%;
    bottom: 5.22%;
    left: 0%;
  }
  .div94 {
    position: absolute;
    height: 0.47%;
    width: 94.39%;
    top: 4.6%;
    right: -0.09%;
    bottom: 94.92%;
    left: 5.71%;
    border-top: 1px solid var(--color-dimgray-200);
    box-sizing: border-box;
  }
  .div95 {
    position: absolute;
    height: 0.47%;
    width: 94.39%;
    top: 17.04%;
    right: -0.09%;
    bottom: 82.49%;
    left: 5.71%;
    border-top: 1px solid var(--color-dimgray-200);
    box-sizing: border-box;
  }
  .div96 {
    position: absolute;
    height: 0.47%;
    width: 94.39%;
    top: 29.47%;
    right: -0.09%;
    bottom: 70.05%;
    left: 5.71%;
    border-top: 1px solid var(--color-dimgray-200);
    box-sizing: border-box;
  }
  .div97 {
    position: absolute;
    height: 0.47%;
    width: 94.39%;
    top: 41.96%;
    right: -0.09%;
    bottom: 57.57%;
    left: 5.71%;
    border-top: 1px solid var(--color-dimgray-200);
    box-sizing: border-box;
  }
  .div98 {
    position: absolute;
    height: 0.47%;
    width: 94.39%;
    top: 54.39%;
    right: -0.09%;
    bottom: 45.14%;
    left: 5.71%;
    border-top: 1px solid var(--color-dimgray-200);
    box-sizing: border-box;
  }
  .div99 {
    position: absolute;
    height: 0.47%;
    width: 94.39%;
    top: 66.82%;
    right: -0.09%;
    bottom: 32.7%;
    left: 5.71%;
    border-top: 1px solid var(--color-dimgray-200);
    box-sizing: border-box;
  }
  .div100 {
    position: absolute;
    height: 0.47%;
    width: 94.39%;
    top: 79.31%;
    right: -0.09%;
    bottom: 20.22%;
    left: 5.71%;
    border-top: 1px solid var(--color-dimgray-200);
    box-sizing: border-box;
  }
  .div101 {
    position: absolute;
    height: 0.47%;
    width: 94.39%;
    top: 91.74%;
    right: -0.09%;
    bottom: 7.78%;
    left: 5.71%;
    border-top: 1px solid var(--color-white);
    box-sizing: border-box;
  }
  .div102 {
    position: absolute;
    height: 92.45%;
    width: 0.18%;
    top: -0.24%;
    right: 93.93%;
    bottom: 7.78%;
    left: 5.89%;
    border-right: 1px solid var(--color-white);
    box-sizing: border-box;
  }
  .chart-child15 {
    position: absolute;
    height: 2.47%;
    width: 0.18%;
    top: 90.56%;
    right: 1.36%;
    bottom: 6.98%;
    left: 98.46%;
    border-right: 1px solid var(--color-white);
    box-sizing: border-box;
  }
  .chart-child16 {
    position: absolute;
    height: 2.47%;
    width: 0.18%;
    top: 90.56%;
    right: 17.12%;
    bottom: 6.98%;
    left: 82.7%;
    border-right: 1px solid var(--color-white);
    box-sizing: border-box;
  }
  .chart-child17 {
    position: absolute;
    height: 2.47%;
    width: 0.18%;
    top: 90.56%;
    right: 32.88%;
    bottom: 6.98%;
    left: 66.94%;
    border-right: 1px solid var(--color-white);
    box-sizing: border-box;
  }
  .chart-child18 {
    position: absolute;
    height: 2.47%;
    width: 0.18%;
    top: 90.56%;
    right: 48.46%;
    bottom: 6.98%;
    left: 51.36%;
    border-right: 1px solid var(--color-white);
    box-sizing: border-box;
  }
  .chart-child19 {
    position: absolute;
    height: 2.47%;
    width: 0.18%;
    top: 90.56%;
    right: 64.04%;
    bottom: 6.98%;
    left: 35.78%;
    border-right: 1px solid var(--color-white);
    box-sizing: border-box;
  }
  .chart-child20 {
    position: absolute;
    height: 2.47%;
    width: 0.18%;
    top: 90.56%;
    right: 79.08%;
    bottom: 6.98%;
    left: 20.73%;
    border-right: 1px solid var(--color-white);
    box-sizing: border-box;
  }
  .line-icon3 {
    position: absolute;
    height: 28.19%;
    width: 93.76%;
    top: 56.62%;
    right: 0.26%;
    bottom: 15.19%;
    left: 5.98%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .chart3 {
    position: absolute;
    height: 64.83%;
    width: 99.45%;
    top: 11.2%;
    right: 0.55%;
    bottom: 23.97%;
    left: 0%;
    text-align: right;
  }
  .light-line-chart-mini3 {
    position: absolute;
    top: 450px;
    left: 754px;
    width: 548px;
    height: 325px;
    font-family: var(--text-caption-caption1-roboto-regular);
  }
  .kmh {
    position: absolute;
    top: 450px;
    left: 621px;
    font-size: var(--font-size-11xl);
    font-weight: 300;
  }
  .geschwindigkeit-value {
    position: absolute;
    top: 452px;
    left: 490px;
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
  .geschwindigkeit {
    position: relative;
    background-color: var(--color-darkslategray-100);
    width: 100%;
    height: 866px;
    overflow: hidden;
    text-align: left;
    font-size: var(--text-caption-caption1-roboto-regular-size);
    color: var(--color-white);
    font-family: var(--font-sansation-light);
  }
</style>