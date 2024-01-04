<template>
  
    <container class="chart-drehzahl"><ChartDrehzahl/></container>
    <div class="rpm-text">RPM</div>
    <div class="rpm-value"><DrehzahlAnzeige/></div>
    
    <div class="auto-titel">Porsche 911</div>

    <img
      class="png-auto-dashboard"
      alt=""
      src="/png-auto-dashboard@2x.png"
    />
</template>



<script>
  import { defineComponent } from "vue";
  import DrehzahlAnzeige from "../components/DrehzahlAnzeige.vue";
  import ChartDrehzahl from "../components/ChartDrehzahl.vue";

  export default defineComponent({
    name: "Drehzahl",
    components: { DrehzahlAnzeige, ChartDrehzahl },
  });
</script>


<style scoped>
  .rpm-text {
    position: absolute;
    top: 450px;
    left: 350px;
    font-weight: 100;
    color: #fff;
  }
  .rpm-value {
    position: absolute;
    top: 450px;
    left: 110px;
    font-size: 100px;
    color: #fff;
  }

  .png-auto-dashboard {
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
    top: 100px;
    left: 652px;
    font-size: var(--font-size-lg);
    font-weight: 600;
    font-family: var(--font-poppins);
    color: #fff;
  }
  
  .chart-drehzahl {
    position: absolute;
    top: 510px;
    left: 550px;
    max-width: 100%; 
    max-height: 100%;
    z-index: 3;
  }
</style>