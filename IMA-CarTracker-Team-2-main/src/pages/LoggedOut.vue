<template>
  
  <div class="loggedout">
    
    <div class="page-hintergrund">
      <div class="verdunklung-hintergrund-effekt" />
      <img class="af-it-logo" alt="" src="/png-afit-logo@2x.png" />
      <div class="af-it-logo-effekt" />
    </div>
    
    <img class="menu-icon" alt="" src="/menu-icon.svg" />
    <div class="registrieren" @click="onRegistrierenTextClick">
      Registrieren
    </div>
    
    <div class="einloggen" @click="onEinloggenTextClick">Einloggen</div>
    
    <div class="you-are-logged">You are Logged Out</div>
    
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
    name: "LoggedOut",
    methods: {
      onRegistrierenTextClick() {
        this.$router.push("/register");
      },
      onEinloggenTextClick() {
        this.$router.push("/login");
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
  .page-hintergrund{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1440px;
    height: 867px;
  }
  .menu-icon {
    position: absolute;
    top: 83px;
    left: 1214px;
    width: 24px;
    height: 24px;
    overflow: hidden;
  }
  .registrieren {
    position: absolute;
    top: 542px;
    left: 755px;
    font-weight: 300;
    cursor: pointer;
  }
  .einloggen {
    position: absolute;
    top: 542px;
    left: 540px;
    font-weight: 300;
    cursor: pointer;
  }
  .you-are-logged {
    position: absolute;
    top: 414px;
    left: 540px;
    font-size: var(--font-size-21xl);
    font-weight: 300;
  }
  .cartracker-logo {
    position: absolute;
    top: 62px;
    left: 174px;
    width: 85px;
    height: 67px;
    object-fit: cover;
  }
  .loggedout {
    position: relative;
    background-color: var(--color-darkslategray-100);
    width: 100%;
    height: 866px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-11xl);
    color: var(--color-white);
    font-family: var(--font-sansation-light);
  }
</style>