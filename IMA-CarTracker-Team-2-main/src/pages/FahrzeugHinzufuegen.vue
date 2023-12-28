<template>

  <div class="fahrzeug-hinzufuegen">
    
    <div class="page-hintergrund">
      <div class="verdunklung-hintergrund-effekt" />
      <img class="af-it-logo" alt="" src="/png-afit-logo@2x.png" />
      <div class="af-it-logo-effekt" />
    </div>
    
    <img
      class="registrieren-pfeil"
      alt=""
      src="/register-pfeil.svg"
      @click="onRegisterPfeilIconClick"
    
    />
    <img class="leistung-linie-icon" alt="" src="/leistung-linie.svg" />
    <div class="leistung">Leistung</div>
    
    <img class="zulassung-linie-icon" alt="" src="/leistung-linie.svg" />
    <div class="zulassung">Zulassung</div>
    <img
      class="art-linie-icon"
      alt=""
      src="/leistung-linie.svg"
      :onClick="openArt"
    />
    /* AUF LISTEN ÖFFNEN SCHAUEN WIR BEIM EINFÜGEN DER FUNKTIONALITÄT HINZU */
    <div class="art" :onClick="openArt1">Art</div>
    <img class="farbe-linie-icon" alt="" src="/leistung-linie.svg" />
    <div class="farbe">Farbe</div>
    <img
      class="fahrgestellnummer-linie-icon"
      alt=""
      src="/fahrgestellnummer-linie.svg"
    />
    /* LINIEN GEHEN GLAUB NICHT WEIL LOCOFY DIE BILDER NICHT IN DIE DATEI EINGEFÜGT HAT, BITTE ÜBERPRÜFEN */
    <div class="fahrgestellnummer">Fahrgestellnummer</div>
    <img class="modell-linie-icon" alt="" src="/leistung-linie.svg" />
    <div class="modell">Modell</div>
    <img class="marke-linie-icon" alt="" src="/leistung-linie.svg" />
    <div class="marke" :onClick="openMarken">Marke</div>
    <div class="fahrzeug-hinzufuegen-titel">Fahrzeug hinzufügen</div>
    <img class="header-icon" alt="" src="/header.svg" />
  </div>
  <div v-if="isArtOpen">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :relativeLayerRef="$refs[artLinieRef]"
      :onOutsideClick="closeArt"
    >
      <Art :onClose="closeArt" />
    </PortalPopup>
  </div>
  <div v-if="isArt1Open">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :relativeLayerRef="$refs[artTextRef]"
      :onOutsideClick="closeArt1"
    >
      <Art :onClose="closeArt1" />
    </PortalPopup>
  </div>
  <div v-if="isMarkenOpen">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :relativeLayerRef="$refs[markeTextRef]"
      :onOutsideClick="closeMarken"
    >
      <Marken :onClose="closeMarken" />
    </PortalPopup>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import Art from "../components/Art.vue";
  import PortalPopup from "../components/PortalPopup.vue";
  import Marken from "../components/Marken.vue";

  export default defineComponent({
    name: "FahrzeugHinzufuegen",
    data() {
      return { isArtOpen: false, isArt1Open: false, isMarkenOpen: false };
    },
    components: { Art, PortalPopup, Marken },
    methods: {
      onRegisterPfeilIconClick() {
        this.$router.push("/");
      },
      openArt() {
        this.isArtOpen = true;
      },
      closeArt() {
        this.isArtOpen = false;
      },
      openArt1() {
        this.isArt1Open = true;
      },
      closeArt1() {
        this.isArt1Open = false;
      },
      openMarken() {
        this.isMarkenOpen = true;
      },
      closeMarken() {
        this.isMarkenOpen = false;
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
  .registrieren-pfeil {
    position: absolute;
    top: 656.6px;
    left: 1141px;
    width: 25px;
    height: 14.7px;
    cursor: pointer;
  }
  .leistung-linie-icon {
    position: absolute;
    top: 663.8px;
    left: 760.8px;
    width: 285px;
    height: 0.5px;
  }
  .leistung {
    position: absolute;
    top: 636px;
    left: 761px;
    font-weight: 300;
  }
  .zulassung-linie-icon {
    position: absolute;
    top: 663.8px;
    left: 385.8px;
    width: 285px;
    height: 0.5px;
  }
  .zulassung {
    position: absolute;
    top: 636px;
    left: 386px;
    font-weight: 300;
  }
  .art-linie-icon {
    position: absolute;
    top: 559.8px;
    left: 760.8px;
    width: 285px;
    height: 0.5px;
    cursor: pointer;
  }
  .art {
    position: absolute;
    top: 532px;
    left: 761px;
    font-weight: 300;
    cursor: pointer;
  }
  .farbe-linie-icon {
    position: absolute;
    top: 559.8px;
    left: 385.8px;
    width: 285px;
    height: 0.5px;
  }
  .farbe {
    position: absolute;
    top: 532px;
    left: 386px;
    font-weight: 300;
  }
  .fahrgestellnummer-linie-icon {
    position: absolute;
    top: 459.8px;
    left: 385.8px;
    width: 656.5px;
    height: 0.5px;
  }
  .fahrgestellnummer {
    position: absolute;
    top: 428px;
    left: 386px;
    font-weight: 300;
  }
  .modell-linie-icon {
    position: absolute;
    top: 350.8px;
    left: 760.8px;
    width: 285px;
    height: 0.5px;
  }
  .modell {
    position: absolute;
    top: 324px;
    left: 761px;
    font-weight: 300;
  }
  .marke-linie-icon {
    position: absolute;
    top: 350.8px;
    left: 385.8px;
    width: 285px;
    height: 0.5px;
  }
  .marke {
    position: absolute;
    top: 323px;
    left: 386px;
    font-weight: 300;
    cursor: pointer;
  }
  .fahrzeug-hinzufuegen-titel {
    position: absolute;
    top: 120px;
    left: 529px;
    font-size: var(--font-size-21xl);
    font-weight: 300;
  }
  .header-icon {
    position: absolute;
    top: 62px;
    left: 174px;
    width: 1064px;
    height: 67px;
  }
  .fahrzeug-hinzufuegen {
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