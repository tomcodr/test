<template>
  
  <div class="login">
    
    <div class="page-hintergrund">
      <div class="verdunklung-hintergrund-effekt" />
      <img class="af-it-logo" alt="" src="/png-afit-logo@2x.png" />
      <div class="af-it-logo-effekt" />
    </div>
    
    <img
      class="pfeil-icon"
      alt=""
      src="/register-pfeil.svg"
      @click="onPfeilIconClick"
    />
    
    <img class="passwort-linie" alt="" src="/leistung-linie.svg" />
    
    <div class="passwort-text">Passwort</div>
    
    <img class="e-mail-linie" alt="" src="/leistung-linie.svg" />
    
    <div class="e-mail-text">E-Mail</div>
    
    <b class="hier" @click="onHierTextClick">hier.</b>
    
    <div class="noch-keinen-account-text">Noch keinen Account? Registriere dich</div>
    
    <div class="einloggen-text">Einloggen</div>
    
    <img class="sideboard-opener" alt="" src="/menu-icon.svg" />
    
    <img
      class="cartracker-logo"
      alt=""
      src="/png-cartracker-logo@2x.png"
    />
  
  </div>

</template>

<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "LogIn",
    methods: {
      onPfeilIconClick() {
        this.$router.push("/");
      },
      onHierTextClick() {
        this.$router.push("/register");
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
  .pfeil-icon {
    position: absolute;
    top: 490.6px;
    left: 1106px;
    width: 25px;
    height: 14.7px;
    cursor: pointer;
  }
  .passwort-linie {
    position: absolute;
    top: 497.8px;
    left: 778.8px;
    width: 285px;
    height: 0.5px;
  }
  .passwort-text {
    position: absolute;
    top: 470px;
    left: 779px;
    font-weight: 300;
  }
  .e-mail-linie {
    position: absolute;
    top: 497.8px;
    left: 395.8px;
    width: 285px;
    height: 0.5px;
  }
  .e-mail-text {
    position: absolute;
    top: 470px;
    left: 396px;
    font-weight: 300;
  }
  .hier {
    position: absolute;
    top: 363px;
    left: 790px;
    font-size: var(--font-size-mini);
    font-weight: 300;
    cursor: pointer;
  }
  .noch-keinen-account-text {
    position: absolute;
    top: 363px;
    left: 545px;
    font-size: var(--font-size-mini);
    font-weight: 300;
  }
  .einloggen-text {
    position: absolute;
    top: 308px;
    left: 590px;
    font-size: var(--font-size-21xl);
    font-weight: 300;
  }
  .sideboard-opener {
    position: absolute;
    top: 83px;
    left: 1214px;
    width: 24px;
    height: 24px;
    overflow: hidden;
  }
  .cartracker-logo {
    position: absolute;
    top: 62px;
    left: 174px;
    width: 85px;
    height: 67px;
    object-fit: cover;
  }
  .login {
    position: relative;
    background-color: var(--color-darkslategray-100);
    width: 100%;
    height: 867px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-6xl);
    color: var(--color-white);
    font-family: var(--font-sansation-light);
  }
</style>