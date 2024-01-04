<template>
    <div class="layout-green" />
    <div class="layout-white" />
    <div class="layout-blue" />
    <div class="darkmode-text"><ToggleSwitch/></div>
    <div class="darkmode-schalter">
     
    <div class="grün-text">{{ $t('Grün') }}</div>
    <div class="weiß-text">{{ $t('Weiß') }}</div>
    <div class="frozen-text">Frozen</div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  
  


  export default defineComponent({
    name: "Layout",
  });
</script>


<style scoped>
  .layout-white {
    position: absolute;
    top: 301px;
    left: 615px;
    border-radius: var(--br-21xl);
    background: linear-gradient(-2.09deg, #fff 53.13%, rgba(217, 217, 217, 0));
    width: 211px;
    height: 211px;
    opacity: 0.4;
  }
  .layout-blue {
    position: absolute;
    top: 301px;
    left: 916px;
    border-radius: var(--br-21xl);
    background: linear-gradient(
      -2.09deg,
      #1dc4ce 53.13%,
      rgba(217, 217, 217, 0)
    );
    width: 211px;
    height: 211px;
    opacity: 0.4;
  }
  .layout-green {
    position: absolute;
    top: 301px;
    left: 314px;
    border-radius: var(--br-21xl);
    background: linear-gradient(
      -2.09deg,
      #426b1f 53.13%,
      rgba(217, 217, 217, 0)
    );
    width: 211px;
    height: 211px;
    opacity: 0.4;
  }
  .layout-green:hover,
  .layout-white:hover,
  .layout-blue:hover {
    width: 220px; 
    height: 220px; 
    opacity: 0.8; 
    transition: all 0.3s ease; 
  }
  .grün-text {
  position: absolute;
  height: 15px;
  width: 109px;
  top: 550px;
  left: 400px;
  font-weight: 800;
  display: inline-block;
  color: #fff;
}

.weiß-text {
  position: absolute;
  height: 15px;
  width: 109px;
  top: 550px;
  left: 700px;
  font-weight: 800;
  display: inline-block;
  color: #fff;
}

.frozen-text {
  position: absolute;
  height: 15px;
  width: 109px;
  top: 550px;
  left: 1000px;
  font-weight: 800;
  display: inline-block;
  color: #fff;
}
 
  .darkmode-text {
    position: absolute;
    top: 155px;
    left: 161px;
    font-weight: 800;
    display: inline-block;
    width: 138px;
    height: 15.4px;
  }
 
</style>