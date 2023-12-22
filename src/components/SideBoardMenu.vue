<template>
  
  <div class="sideboard-menu">
    
    <div class="men-footer">
      <div class="footer-hintergrund" />
      <div class="af-it">
        <div class="bottom-text">© 2023 AF-IT</div>
      </div>
      <img
        class="de-flagge"
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
    
    <div class="layout" @click="onLayoutKastenContainerClick">
      <div class="layout-text">Layout</div>
    
    </div>
    
    <div class="fahrzeuge" @click="onFahrzeugeKastenContainerClick">
      <div class="fahrzeuge-text">Fahrzeuge</div>
    </div>
    
    <img
      class="x-schliefunktion" 
      alt=""
      src="/x-schliefunktion-men.svg"
      @click="closeSideboardMenu"
    />
    <div class="menue">
      <b class="menue-text">Menü</b>
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
  import Language from "./Language.vue";
  import PortalPopup from "./PortalPopup.vue";

  export default defineComponent({
    name: "SideBoardMenu",
    data() {
      return { isLanguageOpen: false, };
    },
    components: { Language, PortalPopup },
    methods: {
      closeSideboardMenu() {
        this.isSideboardMenuOpen = false; 
      },
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
  .footer-hintergrund{
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--color-gray-100);
    width: 587px;
    height: 222px;
  }
  .bottom-text {
    position: absolute;
    top: 0%;
    left: 0%;
  }
  .af-it{
    position: absolute;
    top: 160px;
    left: 478px;
    width: 120px;
    height: 15px;
  }
  .de-flagge {
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

  .hilfe-text {
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
  .logout:hover {
  color: #426b1f; 
  filter: brightness(0.9);
}

  .layout-text {
    position: absolute;
    top: 0%;
    left: 0%;
    font-weight: 600;
  }
  .layout-text:hover {
  color: #426b1f; 
  filter: brightness(0.9);
}
  .hilfe{
    position: absolute;
    top: 384px;
    left: 201px;
    width: 108px;
    height: 32px;
    cursor: pointer;
  }
  .hilfe:hover {
  color: #426b1f; 
  filter: brightness(0.9);
}
  .layout {
    position: absolute;
    top: 337px;
    left: 201px;
    width: 108px;
    height: 32px;
    cursor: pointer;
  }
  .fahrzeuge {
    position: absolute;
    top: 292px;
    left: 201px;
    width: 108px;
    height: 32px;
    cursor: pointer;
  }

  .fahrzeuge-text {
    position: absolute;
    top: 0%;
    left: 0%;
    font-weight: 600;
  }
  .fahrzeuge-text:hover {
  color: #426b1f; 
  filter: brightness(0.9);
}
  .x-schliefunktion {
    position: absolute;
    top: 53px;
    left: 473px;
    width: 24px;
    height: 24px;
    overflow: hidden;
  }
  .x-schliefunktion:hover {
  color: #426b1f; 
  filter: brightness(0.5);
}
  .menue {
    position: absolute;
    top: 53px;
    left: 65px;
    width: 108px;
    height: 32px;
    font-size: var(--font-size-11xl);
  }

  .menue-text {
    position: absolute;
    top: 0%;
    left: 0%;
    font-weight: 600;
  }

  
  .sideboard-menu {
    position: absolute;
    top:0;
    right:0;
    background-color: var(--color-darkolivegreen-200);
    width: 587px;
    height: 867px;
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
    text-align: left;
    font-size: var(--font-size-2xl);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }
</style>