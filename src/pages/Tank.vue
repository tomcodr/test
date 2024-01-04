<template>
  
    
    <div class="tankstand-value"><TankAnzeige/></div>
    <img class="tank-leiste-hintergrund" alt="" src="/tank-hintergrund.svg" />
    <img class="tank-aktuell-leiste" alt="" src="/tankbalken-aktuell.svg" />
    
    <img
      class="auto-dashboard"
      alt=""
      src="/png-auto-dashboard@2x.png"
    />
    <div class="auto-titel">Porsche 911</div>
    
    
</template>
<script>
  import { defineComponent } from "vue";
  import MesswerteDropdown from "../components/MesswerteDropdown.vue";
  import TankAnzeige from "../components/TankAnzeige.vue";

  export default defineComponent({
    name: "Tank",
    components: { MesswerteDropdown, TankAnzeige },
  });
</script>
<style scoped>
  .tankstand-value {
    position: absolute;
    top: 426px;
    left: 637px;
    font-weight: 300;
    color: #fff;
  }
  .tank-leiste-hintergrund {
    position: absolute;
    top: 643px;
    left: 124px;
    border-radius: var(--br-37xl);
    width: 1193px;
    height: 122px;
  }
  .tank-aktuell-leiste {
    position: absolute;
    top: 654px;
    left: 128px;
    border-radius: var(--br-37xl);
    width: 1185px;
    height: 103px;
  }
  .auto-dashboard {
    position: absolute;
    top: 103px;
    left: 385px;
    width: 670px;
    height: 287px;
    object-fit: cover;
    opacity: 0.7;
  }
  .auto-titel {
    position: absolute;
    top: 82px;
    left: 652px;
    font-size: var(--font-size-lg);
    font-weight: 600;
    font-family: var(--font-poppins);
    color: #fff;
  }
</style>