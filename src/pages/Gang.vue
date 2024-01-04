<template>


    <container class = "chart-gang"><ChartGang/></container>
   
    <div class="gear-text">GEAR</div>
    <div class="gear-value"><GangAnzeige/></div>
    <img
      class="png-auto-dashboard"
      alt=""
      src="/png-auto-dashboard@2x.png"
    />
    
    <div class="auto-titel">Porsche 911</div>
    
      
</template>

<script>
  import { defineComponent } from "vue";
  import GangAnzeige from "../components/GangAnzeige.vue";
  import ChartGang from "../components/ChartGang.vue";


  export default defineComponent({
    name: "Gang",
    components: { GangAnzeige, ChartGang },
    methods: {
      onProfilIconClick() {
        this.$router.push("/profil");
      },
      onPNGCartrackerLogoImageClick() {
        this.$router.push("/");
      },
    },
  });
</script>
<style scoped>
  .gear-text {
    position: absolute;
    top: 461px;
    left: 464px;
    font-weight: 300;
    color: #fff;
  }
  .gear-value {
    position: absolute;
    top: 461px;
    left: 374px;
    font-size: var(--font-size-131xl);
    font-weight: 300;
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
    top: 82px;
    left: 652px;
    font-size: var(--font-size-lg);
    font-weight: 600;
    font-family: var(--font-poppins);
    color: #fff;
  }
  
 

  .chart-gang {
    position: absolute;
    top: 410px;
    left: 550px;
    max-width: 100%; 
    max-height: 100%;
  }
</style>