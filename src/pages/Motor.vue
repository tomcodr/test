<template>
  
    
    <div class="motor-value">87</div>
    <div class="motor-prozent">%</div>
    <div class="auto-titel">Porsche 911</div>
    
    <img
      class="png-auto-dashboard"
      alt=""
      src="/png-auto-dashboard@2x.png"
    />
     
</template>
<script>
  import { defineComponent } from "vue";
  import MesswerteDropdown from "../components/MesswerteDropdown.vue";

  export default defineComponent({
    name: "Motor",
    components: { MesswerteDropdown },
  });
</script>
<style scoped>

  .motor-value {
    position: absolute;
    top: 498px;
    left: 282px;
    font-weight: 300;
    color: #fff;
  }
  .motor-prozent {
    position: absolute;
    top: 498px;
    left: 458px;
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
</style>