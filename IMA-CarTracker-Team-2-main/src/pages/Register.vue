<template>
  
  <div class="register">
    
    <div class="page-hintergrund">
      <div class="verdunklung-hintergrund-effekt" />
      <img class="af-it-logo" alt="" src="/png-afit-logo@2x.png" />
      <div class="af-it-logo-effekt" />
    </div>
    <img
      class="registrieren-arrow"
      alt=""
      src="/register-pfeil.svg"
      @click="onRegisterGoIconClick"
    />
    <img
      class="land-linie-icon"
      alt=""
      src="/leistung-linie.svg"
      :onClick="onLandLinieClick"
    />
    <div class="land" :onClick="onLandTextClick">Land</div>
    <img
      class="stadt-linie-icon"
      alt=""
      src="/leistung-linie.svg"
      :onClick="onStadtLinieClick"
    />
    <div class="stadt" :onClick="onStadtTextClick">Stadt</div>
    <img
      class="plz-linie-icon"
      alt=""
      src="/leistung-linie.svg"
      :onClick="onPLZLinieClick"
    />
    <div class="plz" :onClick="onPLZTextClick">PLZ</div>
    <img
      class="hausnr-linie-icon"
      alt=""
      src="/leistung-linie.svg"
      :onClick="onHausnrLinieClick"
    />
    <div class="hausnr" :onClick="onHausnrTextClick">Hausnr.</div>
    <img class="strae-linie-icon" alt="" src="/leistung-linie.svg" />
    <div class="strae">Straße</div>
    <img
      class="passwort-besttigen-linie-icon"
      alt=""
      src="/leistung-linie.svg"
      :onClick="onPasswortBesttigenLinieClick"
    />
    <div class="passwort-besttigen" :onClick="onPasswortBesttigenTextClick">
      Passwort bestätigen
    </div>
    <img
      class="passwort-linie-icon"
      alt=""
      src="/leistung-linie.svg"
      :onClick="onPasswortLinieClick"
    />
    <div class="passwort" :onClick="onPasswortTextClick">Passwort</div>
    <img
      class="name-linie-icon"
      alt=""
      src="/leistung-linie.svg"
      :onClick="onNameLinieClick"
    />
    <div class="name" :onClick="onNameTextClick">Name</div>
    <img class="vorname-e-mail-icon" alt="" src="/leistung-linie.svg" />
    <div class="vorname" data-scroll-to="vornameText">Vorname</div>
    <img class="e-mail-linie-icon" alt="" src="/leistung-linie.svg" />
    <div class="e-mail">E-Mail</div>
    <div class="registrieren">Registrieren</div>
    <img
      class="cartracker-logo-icon"
      alt=""
      src="/png-cartracker-logo@2x.png"
      @click="onCARTRACKERLOGOImageClick"
    />
    <img
      class="sideboard-opener"
      alt=""
      src="/menu-icon.svg"
      :onClick="openSideBoardRegister"
    />
  </div>
  <div v-if="isSideBoardRegisterOpen">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :relativeLayerRef="$refs[sIDEBOARDOPENERIconRef]"
      :onOutsideClick="closeSideBoardRegister"
    >
      <SideBoardRegister :onClose="closeSideBoardRegister" />
    </PortalPopup>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import SideBoardRegister from "../components/SideBoardRegister.vue";
  import PortalPopup from "../components/PortalPopup.vue";

  export default defineComponent({
    name: "Register",
    data() {
      return { isSideBoardRegisterOpen: false };
    },
    components: { SideBoardRegister, PortalPopup },
    methods: {
      onRegisterGoIconClick() {
        this.$router.push("/");
      },
      onLandLinieClick() {
        const anchor = document.querySelector("[data-scroll-to='vornameText']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onLandTextClick() {
        const anchor = document.querySelector("[data-scroll-to='vornameText']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onStadtLinieClick() {
        const anchor = document.querySelector("[data-scroll-to='vornameText']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onStadtTextClick() {
        const anchor = document.querySelector("[data-scroll-to='vornameText']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onPLZLinieClick() {
        const anchor = document.querySelector("[data-scroll-to='vornameText']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onPLZTextClick() {
        const anchor = document.querySelector("[data-scroll-to='vornameText']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onHausnrLinieClick() {
        const anchor = document.querySelector("[data-scroll-to='vornameText']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onHausnrTextClick() {
        const anchor = document.querySelector("[data-scroll-to='vornameText']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onPasswortBesttigenLinieClick() {
        const anchor = document.querySelector("[data-scroll-to='vornameText']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onPasswortBesttigenTextClick() {
        const anchor = document.querySelector("[data-scroll-to='vornameText']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onPasswortLinieClick() {
        const anchor = document.querySelector("[data-scroll-to='vornameText']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onPasswortTextClick() {
        const anchor = document.querySelector("[data-scroll-to='vornameText']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onNameLinieClick() {
        const anchor = document.querySelector("[data-scroll-to='vornameText']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onNameTextClick() {
        const anchor = document.querySelector("[data-scroll-to='vornameText']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onCARTRACKERLOGOImageClick() {
        this.$router.push("/");
      },
      openSideBoardRegister() {
        this.isSideBoardRegisterOpen = true;
      },
      closeSideBoardRegister() {
        this.isSideBoardRegisterOpen = false;
      },
    },
  });
</script>
<style scoped>
  .verdunklung-hintergrund-effekt{
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
  .registrieren-arrow {
    position: absolute;
    top: 806.6px;
    left: 1083px;
    width: 25px;
    height: 14.7px;
    cursor: pointer;
  }
  .land-linie-icon {
    position: absolute;
    top: 813.8px;
    left: 372.8px;
    width: 285px;
    height: 0.5px;
    cursor: pointer;
  }
  .land {
    position: absolute;
    top: 786px;
    left: 373px;
    font-weight: 300;
    cursor: pointer;
  }
  .stadt-linie-icon {
    position: absolute;
    top: 698.8px;
    left: 747.8px;
    width: 285px;
    height: 0.5px;
    cursor: pointer;
  }
  .stadt {
    position: absolute;
    top: 671px;
    left: 748px;
    font-weight: 300;
    cursor: pointer;
  }
  .plz-linie-icon {
    position: absolute;
    top: 698.8px;
    left: 372.8px;
    width: 285px;
    height: 0.5px;
    cursor: pointer;
  }
  .plz {
    position: absolute;
    top: 671px;
    left: 373px;
    font-weight: 300;
    cursor: pointer;
  }
  .hausnr-linie-icon {
    position: absolute;
    top: 584.8px;
    left: 755.8px;
    width: 285px;
    height: 0.5px;
    cursor: pointer;
  }
  .hausnr {
    position: absolute;
    top: 557px;
    left: 756px;
    font-weight: 300;
    cursor: pointer;
  }
  .strae-linie-icon {
    position: absolute;
    top: 584.8px;
    left: 372.8px;
    width: 285px;
    height: 0.5px;
  }
  .strae {
    position: absolute;
    top: 557px;
    left: 373px;
    font-weight: 300;
  }
  .passwort-besttigen-linie-icon {
    position: absolute;
    top: 473.8px;
    left: 747.8px;
    width: 285px;
    height: 0.5px;
    cursor: pointer;
  }
  .passwort-besttigen {
    position: absolute;
    top: 446px;
    left: 748px;
    font-weight: 300;
    cursor: pointer;
  }
  .passwort-linie-icon {
    position: absolute;
    top: 473.8px;
    left: 372.8px;
    width: 285px;
    height: 0.5px;
    cursor: pointer;
  }
  .passwort {
    position: absolute;
    top: 446px;
    left: 373px;
    font-weight: 300;
    cursor: pointer;
  }
  .name-linie-icon {
    position: absolute;
    top: 363.8px;
    left: 747.8px;
    width: 285px;
    height: 0.5px;
    cursor: pointer;
  }
  .name {
    position: absolute;
    top: 336px;
    left: 748px;
    font-weight: 300;
    cursor: pointer;
  }
  .vorname-e-mail-icon {
    position: absolute;
    top: 363.8px;
    left: 372.8px;
    width: 285px;
    height: 0.5px;
  }
  .vorname {
    position: absolute;
    top: 336px;
    left: 373px;
    font-weight: 300;
  }
  .e-mail-linie-icon {
    position: absolute;
    top: 263.8px;
    left: 573.8px;
    width: 285px;
    height: 0.5px;
  }
  .e-mail {
    position: absolute;
    top: 236px;
    left: 574px;
    font-weight: 300;
  }
  .registrieren {
    position: absolute;
    top: 127px;
    left: 614px;
    font-size: var(--font-size-21xl);
    font-weight: 300;
  }
  .cartracker-logo-icon {
    position: absolute;
    top: 62px;
    left: 174px;
    width: 85px;
    height: 67px;
    object-fit: cover;
    cursor: pointer;
  }
  .sideboard-opener {
    position: absolute;
    top: 83px;
    left: 1214px;
    width: 24px;
    height: 24px;
    overflow: hidden;
    cursor: pointer;
  }
  .register {
    position: relative;
    background-color: var(--color-darkslategray-100);
    width: 100%;
    height: 866px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-6xl);
    color: var(--color-white);
    font-family: var(--font-sansation-light);
  }
</style>