<template>
  
  <div class="sideboard-register">
    
    <div class="men-footer">
      <div class="footer-hintergrund" />
      <div class="af-it">
        <div class="af-it-text">© 2023 AF-IT</div>
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
      <div class="logout-text">LogIn</div>
    </div>
    <div class="hilfe" @click="onHilfeContainerClick">
      <div class="hilfe-text">Hilfe</div>
    </div>
    <img
      class="x-schliefunktion"
      alt=""
      src="/x-schliefunktion-men.svg"
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
    name: "SideBoardRegister",
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
        this.$router.push("/login");
      },
      onHilfeContainerClick() {
        this.$router.push("/hilfe-logged-in");
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
  .af-it-text {
    position: absolute;
    top: 0%;
    left: 0%;
  }
  .af-it {
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
  .logout {
    position: absolute;
    top: 480px;
    left: 201px;
    width: 108px;
    height: 32px;
    cursor: pointer;
  }
  .hilfe {
    position: absolute;
    top: 384px;
    left: 201px;
    width: 108px;
    height: 32px;
    cursor: pointer;
  }

  .hilfe-text {
    position: absolute;
    top: 0%;
    left: 0%;
    font-weight: 600;
  }
  .x-schliefunktion {
    position: absolute;
    top: 53px;
    left: 473px;
    width: 24px;
    height: 24px;
    overflow: hidden;
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
  .sideboard-register {
    position: relative;
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