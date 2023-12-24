<template>
    <div class="hoehe">
      
        <div class="page-hintergrund">
        <div class="verdunklung-hintergrund-effekt" />
        <img class="af-it-logo" alt="" src="/png-afit-logo@2x.png" />
        <div class="af-it-logo-effekt" />
      </div>
      
      
      <div class="meter-value">82</div>
      <div class="meter-text">M</div>
      <div class="auto-titel">Porsche 911</div>
      
      <img
        class="png-auto-dashboard"
        alt=""
        src="/png-auto-dashboard@2x.png"
      />
      
      <img class="hoehe-header-icon" alt="" src="/home-header@2x.png" />
      
      <div class="messwerte-textbox" :onClick="openMesswerteDropdown">Messwerte</div>
      
      <img
        class="navigation-icon"
        alt=""
        src="/navigation-icon@2x.png"
        :onClick="openMesswerteDropdown"
      />
      <img
        class="pfeil-icon"
        alt=""
        src="/pfeil@2x.png"
        @click="onPfeilIconClick"
      />
      <div class="bremslicht" @click="onBremslichtTextClick">Dashboard</div>
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
    import MesswerteDropdown from "../components/MesswerteDropdown.vue";
    import PortalPopup from "../components/PortalPopup.vue";
  
    export default defineComponent({
      name: "Hoehe",
      data() {
        return {
          isMesswerteDropdownOpen: false,
          isMesswerteDropdown1Open: false,
        };
      },
      components: { MesswerteDropdown, PortalPopup },
      methods: {
        openMesswerteDropdown() {
          this.isMesswerteDropdownOpen = true;
        },
        closeMesswerteDropdown() {
          this.isMesswerteDropdownOpen = false;
        },
        
        closeMesswerteDropdown1() {
          this.isMesswerteDropdown1Open = false;
        },
        onPfeilIconClick() {
          // Please sync "Home_Dashboard_Hybrid" to the project
        },
        onBremslichtTextClick() {
          // Please sync "Home_Dashboard_Hybrid" to the project
        },
      },
    });
  </script>
  <style scoped>
    .verdunklung-hintergrund-effekt {
      position: absolute;
      top: 0px;
      left: 1440px;
      background-color: var(--color-gray);
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
      background-color: rgba(53, 53, 53, 0.6);
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

   
 
  
    .meter-value {
      position: absolute;
      top: 498px;
      left: 282px;
      font-weight: 300;
    }
    .meter-text {
      position: absolute;
      top: 498px;
      left: 458px;
      font-weight: 300;
    }
    .auto-titel {
      position: absolute;
      top: 82px;
      left: 652px;
      font-size: 18px;
      font-weight: 600;
      font-family: var(--font-poppins);
    }
    .png-auto-dashboard {
      position: absolute;
      top: 96px;
      left: 368px;
      width: 670px;
      height: 287px;
      object-fit: cover;
      opacity: 0.7;
    }
    .hoehe-header-icon {
      position: absolute;
      top: 62px;
      left: 175px;
      width: 1064px;
      height: 67px;
      object-fit: cover;
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
      top: 83px;
      left: 1093px;
      width: 24px;
      height: 24px;
      overflow: hidden;
      object-fit: cover;
      cursor: pointer;
    }
    .pfeil-icon {
      position: absolute;
      top: 178px;
      left: 52px;
      width: 24px;
      height: 0px;
      object-fit: contain;
      cursor: pointer;
    }
    .bremslicht {
      position: absolute;
      height: 1.73%;
      width: 7.57%;
      top: 19.38%;
      left: 5.63%;
      font-size: var(--text-body-body2-roboto-regular-size);
      font-weight: 800;
      font-family: var(--font-manrope);
      display: inline-block;
      cursor: pointer;
    }
    .hoehe {
      position: relative;
      background-color: #454343;
      width: 100%;
      height: 867px;
      overflow: hidden;
      text-align: left;
      font-size: var(--font-size-131xl);
      color: var(--color-white);
      font-family: var(--font-sansation-light);
    }
  </style>
  