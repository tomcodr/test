<template>
  <div class="marken">
    
    <div class="marken-text">
      <p class="bmw">BMW</p>
      <p class="bmw">MERCEDES</p>
      <p class="bmw">AUDI</p>
      <p class="bmw">PORSCHE</p>
      <p class="bmw">TESLA</p>
      <p class="bmw">LAMBORGHINI</p>
      <p class="bmw">DACIA</p>
      <p class="bmw">FIAT</p>
      <p class="bmw">FORD</p>
      <p class="bmw">KIA</p>
      <p class="bmw">NISSAN</p>
      <p class="bmw">SKODA</p>
    </div>
  
  </div>

</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Marken",
  });
</script>
<style scoped>
  .bmw {
    margin: 0;
  }
  .marken-text {
    position: absolute;
    height: 95.75%;
    width: 77.49%;
    top: 2%;
    left: 6.27%;
    display: inline-block;
  }
  .marken {
    position: relative;
    background-color: var(--color-gray-100);
    width: 271px;
    height: 400px;
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
    text-align: left;
    font-size: var(--font-size-2xl);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }
</style>