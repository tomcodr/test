<template>

    
    <container class = "chart-geschwindigkeit"><ChartGeschwindigkeit/></container>


    <img
      class="png-auto"
      alt=""
      src="/png-auto-dashboard@2x.png"
    />
   
    
    
    <div class="kmh">KM/H</div>
    <div class="geschwindigkeit-value"><GeschwindigkeitAnzeige/></div>
    <div class="auto-titel">Porsche 911</div>
  
  
</template>
<script>
  import { defineComponent } from "vue";
  import GeschwindigkeitAnzeige from "../components/GeschwindigkeitAnzeige.vue";
  import ChartGeschwindigkeit from "../components/ChartGeschwindigkeit.vue";

  export default defineComponent({
    name: "Geschwindigkeit",
    components: { GeschwindigkeitAnzeige, ChartGeschwindigkeit },
  });
</script>


<style scoped>
 
  .png-auto {
    position: absolute;
    top: 103px;
    left: 385px;
    width: 670px;
    height: 287px;
    object-fit: cover;
    opacity: 0.7;
  }

  .kmh {
    position: absolute;
    top: 450px;
    left: 400px;
    font-size: var(--font-size-11xl);
    font-weight: 300;
    color: #fff;
  }
  .geschwindigkeit-value {
    position: absolute;
    top: 452px;
    left: 250px;
    font-size: var(--font-size-131xl);
    font-weight: 300;
    color: #fff;
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
  

  .chart-geschwindigkeit {
    position: absolute;
    top: 410px;
    left: 550px;
    max-width: 100%; 
    max-height: 100%;
  }
</style>