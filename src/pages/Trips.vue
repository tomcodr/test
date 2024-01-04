<template>

    

    <container class = "chart-trips"><ChartTrips/></container>
    
    
    
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
  import ChartTrips from "../components/ChartTrips.vue";

  export default defineComponent({
    name: "Trips",
    components: { MesswerteDropdown, ChartTrips },
  });
</script>

<style scoped>

  .auto-dashboard {
    position: absolute;
    top: 96px;
    left: 368px;
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
    color:#fff;
  }
  .chart-trips {
    position: absolute;
    top: 390px;
    left: 250px;
    max-width: 100%; 
    max-height: 100%;
  }
</style>