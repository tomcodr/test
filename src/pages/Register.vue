<template>
  
  <div class="register">
    
    <div class="page-hintergrund">
      <div class="verdunklung-hintergrund-effekt" />
      <img class="png-af-it-logo-icon"  src="/png-afit-logo@2x.png" />
      <div class="af-it-logo-effekt" />
    </div>
    
    <img
      class="registrieren-arrow"
      alt=""
      src="/register-pfeil.svg"
      @click="onRegisterGoIconClick"
    />
    
    
    
    <div class="land">Land</div>
   
    <input type="text" 
      v-model="land"
      class="land-textbox"
      placeholder="Land:"
      />
   
    
    
    <div class="stadt">Stadt</div>
    
    <input type="text" 
      v-model="stadt"
      class="stadt-textbox"
      placeholder="Stadt:"
      />
    
    
    
    <div class="plz">PLZ</div>
   
    <input type="tel" 
      v-model="plz"
      class="plz-textbox"
      placeholder="PLZ:"
      />
    
    
    <div class="hausnr">Hausnr.</div>
    
    <input type="tel" 
      v-model="hausnr"
      class="hausnr-textbox"
      placeholder="Hausnummer:"
      />
    
    
    
    
    
    <div class="strasze">Straße</div>
    
    <input type="text" 
      v-model="strasze"
      class="strasze-textbox"
      placeholder="Straße:"/>
    
    
    
    
    <div class="passwort-bestaetigen">Passwort bestätigen</div>
  
    <input type="password" 
      v-model="bestaetigen"
      class="bestaetigen-textbox"
      placeholder="Passwort bestätigen:"/>
    
    
    
    <div class="passwort">Passwort</div>
    
    <input type="password" 
      v-model="passwort"
      class="passwort-textbox"
      placeholder="Passwort:"/>
    
    
    
    <div class="name">Name</div>
   
    <input type="text" 
      v-model="name"
      class="name-textbox"
      placeholder="Dein Name:"/>
    
    
    
    <div class="vorname">Vorname</div>

    <input type="text" 
      v-model="vorname"
      class="vorname-textbox"
      placeholder="Dein Vorname:"/>
    
    
    <div class="e-mail">E-Mail</div>
    
    <input type="email" 
      v-model="email"
      class="e-mail-textbox"
      placeholder="Deine Email:"/>
    
    
    
    
    
    
    
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

  .registrieren-arrow {
    position: absolute;
    top: 806.6px;
    left: 1083px;
    width: 25px;
    height: 14.7px;
    cursor: pointer;
  }
 
  .land {
    position: absolute;
    top: 786px;
    left: 373px;
    font-weight: 300;
    
  }

  .land-textbox{
    position: absolute;
    top: 790px;
    left: 460px;
    font-weight: 300;
  }
  .stadt {
    position: absolute;
    top: 671px;
    left: 748px;
    font-weight: 300;
  }

  .stadt-textbox{
    position: absolute;
    top: 675px;
    left: 850px;
    font-weight: 300;
  }
  .plz {
    position: absolute;
    top: 671px;
    left: 373px;
    font-weight: 300;
  }

  .plz-textbox{
    position: absolute;
    top: 675px;
    left: 450px;
    font-weight: 300;
  }
  
  .hausnr {
    position: absolute;
    top: 557px;
    left: 756px;
    font-weight: 300;
  }
  .hausnr-textbox{
    position: absolute;
    top: 560px;
    left: 875px;
    font-weight: 300;
  }
  .strasze {
    position: absolute;
    top: 557px;
    left: 373px;
    font-weight: 300;
  }

  .strasze-textbox{
    position: absolute;
    top: 560px;
    left: 475px;
    font-weight: 300;
  }
  .passwort-bestaetigen {
    position: absolute;
    top: 446px;
    left: 748px;
    font-weight: 300;
  }

  .bestaetigen-textbox{
    position: absolute;
    top: 450px;
    left: 1000px;
    font-weight: 300;
  }

  .passwort {
    position: absolute;
    top: 446px;
    left: 373px;
    font-weight: 300;
    
  }
 
  .passwort-textbox{
    position: absolute;
    top: 450px;
    left: 500px;
    font-weight: 300;
    
  }
  .name {
    position: absolute;
    top: 336px;
    left: 748px;
    font-weight: 300;
    
  }

  .name-textbox{
    position: absolute;
    top: 340px;
    left: 850px;
    font-weight: 300;
    
  }
  
  .vorname {
    position: absolute;
    top: 336px;
    left: 373px;
    font-weight: 300;
  }

  .vorname-textbox{
    position: absolute;
    top: 340px;
    left: 500px;
    font-weight: 300;
  }
  
  .e-mail {
    position: absolute;
    top: 236px;
    left: 574px;
    font-weight: 300;
  }

  .e-mail-textbox{
    position: absolute;
    top: 240px;
    left: 680px;
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