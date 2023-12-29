<template>

  <div class="page">
    
    <div class="page-hintergrund">
      <div class="verdunklung-hintergrund-effekt" />
      <img class="png-af-it-logo-icon"  src="/png-afit-logo@2x.png" />
      <div class="af-it-logo-effekt" />
    </div>
    
    <textarea
      v-model="fahrgestellnummerValue"
      class="fahrgestellnummer-input"
      :placeholder="$t('Fahrgestellnummer eingeben')"
      rows="1"
      @input="onFahrgestellnummerInput"
      @blur="onFahrgestellnummerBlur"
      :style="{ borderColor: fahrgestellnummerError ? 'red' : '' }"
    ></textarea>
    <span class="error-message" v-if="fahrgestellnummerError">{{ fahrgestellnummerError }}</span>

    <img class="fahrzeugnummer-linie" alt="" src="/leistung-linie.svg" :style="{ transform: fahrgestellnummerLineTransform }" />

    
    <img
      class="registrieren-pfeil"
      alt=""
      src="/register-pfeil.svg"
      @click="onRegisterPfeilIconClick"
    
    />
    
    
    <img
      class="art-linie-icon"
      alt=""
      src="/leistung-linie.svg"
      :onClick="openArt"
    />
    /* AUF LISTEN ÖFFNEN SCHAUEN WIR BEIM EINFÜGEN DER FUNKTIONALITÄT HINZU */
    <div class="art" :onClick="openArt1">{{ $t('Erstzulassung') }}</div>
    <img class="farbe-linie-icon" alt="" src="/leistung-linie.svg" />
    <div class="farbe">{{ $t('Farbe') }}</div>
   
    /* LINIEN GEHEN GLAUB NICHT WEIL LOCOFY DIE BILDER NICHT IN DIE DATEI EINGEFÜGT HAT, BITTE ÜBERPRÜFEN */
    <div class="fahrgestellnummer">{{ $t('Fahrgestellnummer') }}</div>
    <img class="modell-linie-icon" alt="" src="/leistung-linie.svg" />
    <div class="modell">{{ $t('Modell') }}</div>
    <img class="marke-linie-icon" alt="" src="/leistung-linie.svg" />
    <div class="marke" :onClick="openMarken">{{ $t('Marke') }}</div>
    <div class="fahrzeug-hinzufuegen-titel">{{ $t('Fahrzeuge Hinzufügen') }}</div>
    <img class="header-icon" alt="" src="/header.svg" />
  </div>
  <div v-if="isArtOpen">
    <PortalPopup
      placement="Centered"
      :relativeLayerRef="$refs[artLinieRef]"
      :onOutsideClick="closeArt"
    >
      <Art :onClose="closeArt" />
    </PortalPopup>
  </div>
  <div v-if="isArt1Open">
    <PortalPopup
      placement="Centered"
      :relativeLayerRef="$refs[artTextRef]"
      :onOutsideClick="closeArt1"
    >
      <Art :onClose="closeArt1" />
    </PortalPopup>
  </div>
  <div v-if="isMarkenOpen">
    <PortalPopup
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
      return {
        isArtOpen: false,
        isArt1Open: false,
        isMarkenOpen: false,
        fahrgestellnummerValue: "",
        fahrgestellnummerError: "", // Fehlermeldung für die Fahrgestellnummer
      };
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
      onFahrgestellnummerInput() {
        // Hier kannst du weitere Logik für die Eingabe implementieren
        this.fahrgestellnummerError = ""; // Setze die Fehlermeldung zurück
      },
      onFahrgestellnummerBlur() {
        // Hier kannst du weitere Logik für das Verlassen des Felds implementieren
        this.validateFahrgestellnummer();
      },
      validateFahrgestellnummer() {
        // Hier kannst du die Logik für die Überprüfung der Fahrgestellnummer implementieren
        const isValid = this.fahrgestellnummerValue.length === 17; // Beispiel: Überprüfung auf eine bestimmte Länge
        
        if (!isValid) {
          this.fahrgestellnummerError = "Fehlerhafte Fahrgestellnummer"; // Fehlermeldung anpassen
        } else {
          this.fahrgestellnummerError = ""; // Setze die Fehlermeldung zurück
        }
      },
    },
  });
</script>
<style scoped>

  .registrieren-pfeil {
    position: absolute;
    top: 560px;
    left: 1141px;
    width: 25px;
    height: 14.7px;
    cursor: pointer;
  }
  .fahrzeugnummer-linie {
    position: absolute;
    top: 460px;
    left: 565px;
    width: 400px;
    height: 0.5px;
    transform: scaleX(3);
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
    top: 350px;
    left: 660px;
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
    left: 661px;
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
 
  .fahrgestellnummer-input {
  position: absolute;
  top: 435px;
  left: 660px;
  width: 200px; /* Breite anpassen, wie es für deine Anwendung sinnvoll ist */
  font-weight: 300;
  background-color: transparent; /* Transparenter Hintergrund */
  border: none; /* Keine Umrandung */
  color: #fff; /* Textfarbe auf Weiß setzen */
  padding: 5px; /* Innenabstand für bessere Lesbarkeit */
  resize: none; /* Verhindert die Größenänderung */
}
.error-message {
    position: absolute;
    top: 440px;
    left: 900px;
    color: red;
    font-size: 18px;
  }
</style>