<template>
  
  <div class="sideboard-loggedout">
    
    <div class="men-footer">
      <div class="footer-hintergrund" />
      <div class="af-it">
        <div class="hilfe-text">© 2023 AF-IT</div>
      </div>
      <img
        class="png-de-flagge-icon"
        alt=""
        src="/png-de-flagge@2x.png"
        :onClick="openLanguage"
      />
      <img
        class="cartracker-logo"
        alt=""
        src="/png-cartracker-logo@2x.png"
        @click="onPNGCartrackerLogoImageClick"
      />
    </div>
    
    <div class="logout" @click="onLogOutContainerClick">
      <div class="logout-text">LogOut</div>
    </div>
    <div class="hilfe" @click="onHilfeContainerClick">
      <div class="hilfe-text">Hilfe</div>
    </div>
    <div class="layout-kasten" @click="onLayoutKastenContainerClick">
      <div class="hilfe-text">Layout</div>
    </div>
    <div class="fahrzeuge-kasten" @click="onFahrzeugeKastenContainerClick">
      <div class="hilfe-text">Fahrzeuge</div>
    </div>
    <img
      class="x-schliefunktion-men-icon"
      alt=""
      src="/x-schliefunktion-men.svg"
    />
    <div class="men-kasten">
      <b class="hilfe-text">Menü</b>
    </div>
  </div>
  <div v-if="isLanguageOpen">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :relativeLayerRef="$refs[pNGDEFlaggeIconRef]"
      :onOutsideClick="closeLanguage"
    >
      <Language :onClose="closeLanguage" />
    </PortalPopup>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import Language from "../components/Language.vue";
  import PortalPopup from "../components/PortalPopup.vue";

  export default defineComponent({
    name: "SideBoardLoggedOut",
    data() {
      return { isLanguageOpen: false };
    },
    components: { Language, PortalPopup },
    methods: {
      openLanguage() {
        this.isLanguageOpen = true;
      },
      closeLanguage() {
        this.isLanguageOpen = false;
      },
      onPNGCartrackerLogoImageClick() {
        this.$router.push("/");
      },
      onLogOutContainerClick() {
        this.$router.push("/loggedout");
      },
      onHilfeContainerClick() {
        this.$router.push("/hilfe-logged-in");
      },
      onLayoutKastenContainerClick() {
        this.$router.push("/layout");
      },
      onFahrzeugeKastenContainerClick() {
        this.$router.push("/fahrzeuge");
      },
    },
  });
</script>
<style scoped>
  .footer-hintergrund {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--color-gray-100);
    width: 587px;
    height: 222px;
  }
  .af-it {
    position: absolute;
    top: 160px;
    left: 478px;
    width: 120px;
    height: 15px;
  }
  .png-de-flagge-icon {
    position: absolute;
    top: 155px;
    left: 44px;
    width: 21px;
    height: 13px;
    object-fit: cover;
    cursor: pointer;
  }
  .cartracker-logo {
    position: absolute;
    top: 39px;
    left: 12px;
    width: 85px;
    height: 67px;
    object-fit: cover;
    cursor: pointer;
  }
  .men-footer {
    position: absolute;
    top: 645px;
    left: 0px;
    width: 598px;
    height: 222px;
    font-size: var(--font-size-3xs);
  }
  .logout-text {
    position: absolute;
    top: 0%;
    left: 0%;
    font-weight: 600;
  }
  .logout {
    position: absolute;
    top: 480px;
    left: 201px;
    width: 108px;
    height: 32px;
    cursor: pointer;
  }
  .hilfe-text {
    position: absolute;
    top: 0%;
    left: 0%;
  }
  .hilfe {
    position: absolute;
    top: 384px;
    left: 201px;
    width: 108px;
    height: 32px;
    cursor: pointer;
  }
  .layout-kasten {
    position: absolute;
    top: 337px;
    left: 201px;
    width: 108px;
    height: 32px;
    cursor: pointer;
  }
  .fahrzeuge-kasten {
    position: absolute;
    top: 292px;
    left: 201px;
    width: 108px;
    height: 32px;
    cursor: pointer;
  }
  .x-schliefunktion-men-icon {
    position: absolute;
    top: 53px;
    left: 473px;
    width: 24px;
    height: 24px;
    overflow: hidden;
  }
  .men-kasten {
    position: absolute;
    top: 53px;
    left: 65px;
    width: 108px;
    height: 32px;
    font-size: var(--font-size-11xl);
  }
  .sideboard-loggedout {
    position: relative;
    background-color: var(--color-darkolivegreen-200);
    width: 41.5%;
    height: 867px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-2xl);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }
</style>