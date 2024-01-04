<template>
  

    
    <container class = "chart-hoehe"><ChartHoehe/></container>
    
    <div class="motor-value"><HoeheAnzeige/></div>

    <div class="auto-titel">Porsche 911</div>
    
    <img
      class="png-auto-dashboard"
      alt=""
      src="/png-auto-dashboard@2x.png"
    />
  
</template>
<script>
  import { defineComponent } from "vue";
  import ChartHoehe from "../components/ChartHoehe.vue";
  import HoeheAnzeige from "../components/HoeheAnzeige.vue";

  export default defineComponent({
    name: "Motor",
    components: { ChartHoehe, HoeheAnzeige },
  });
</script>


<style scoped>

  .motor-value {
    position: absolute;
    top: 398px;
    left: 82px;
    font-size: 150px;
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
  .png-auto-dashboard {
    position: absolute;
    top: 96px;
    left: 368px;
    width: 670px;
    height: 287px;
    object-fit: cover;
    opacity: 0.7;
  }
  .chart-hoehe {
    position: absolute;
    top: 250px;
    left: 550px;
    max-width: 100%; 
    max-height: 100%;
  }
</style>