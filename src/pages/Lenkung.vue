<template>
  

    <container class = "chart-lenkung"><ChartLenkung/></container>
    
    <div class="lenkung-value"><LenkungAnzeige/></div>
    <img
      class="png-auto"
      alt=""
      src="/png-auto-dashboard@2x.png"
    />
    <div class="auto-titel">Porsche 911</div>
      
  
 
</template>
<script>
  import { defineComponent } from "vue";
  import LenkungAnzeige from "../components/LenkungAnzeige.vue";
  import ChartLenkung from "../components/ChartLenkung.vue";



  export default defineComponent({
    name: "Lenkung",
    components: { LenkungAnzeige, ChartLenkung },
  });
</script>
<style scoped>

  .lenkung-value {
    position: absolute;
    top: 450px;
    left: 250px;
    font-size: 150px;
    font-weight: 300;
    color: #fff;
  }
 
  .png-auto {
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
  .chart-lenkung {
    position: absolute;
    top: 410px;
    left: 550px;
    max-width: 100%; 
    max-height: 100%;
  }
</style>