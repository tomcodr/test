<template>
  <div class="language">
    
    <div class="background-green" />
    <div class="text-espanol">
      <p class="espanol">Español</p>
    </div>
    <div class="text-english">English</div>
    <div class="text-deutsch">Deutsch</div>
    <img class="png-es-flagge-icon" alt="" src="/png-es-flagge@2x.png" />
    <img class="png-en-flagge-icon" alt="" src="/png-en-flagge@2x.png" />
    <img class="png-de-flagge-icon2" alt="" src="/png-de-flagge1@2x.png" />
    <img
      class="x-schliefunktion-sprachen-icon"
      alt=""
      src="/x-schliefunktion-sprachen.svg"
    />
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Language",
  });
</script>
<style scoped>
  .background-green {
    position: absolute;
    top: 0px;
    left: 18px;
    border-radius: 26px;
    background-color: var(--color-darkolivegreen-200);
    backdrop-filter: blur(370px);
    width: 313px;
    height: 173px;
  }
  .espanol {
    margin: 0;
  }
  .text-espanol {
    position: absolute;
    height: 6.18%;
    width: 17.54%;
    top: 49.16%;
    left: 36.45%;
    display: inline-block;
  }
  .text-english {
    position: absolute;
    height: 6.95%;
    width: 15.67%;
    top: 30.24%;
    left: 36.39%;
    display: inline-block;
  }
  .text-deutsch {
    position: absolute;
    height: 6.95%;
    width: 15.67%;
    top: 12.45%;
    left: 36.39%;
    display: inline-block;
  }
  .png-es-flagge-icon {
    position: absolute;
    top: 128px;
    left: 69px;
    width: 10px;
    height: 7px;
    object-fit: cover;
  }
  .png-en-flagge-icon {
    position: absolute;
    top: 82px;
    left: 69px;
    width: 10px;
    height: 7px;
    object-fit: cover;
  }
  .png-de-flagge-icon2 {
    position: absolute;
    top: 37px;
    left: 69px;
    width: 10px;
    height: 7px;
    object-fit: cover;
  }
  .x-schliefunktion-sprachen-icon {
    position: absolute;
    top: 36px;
    left: 294px;
    width: 14px;
    height: 13.6px;
    overflow: hidden;
  }
  .language {
    position: relative;
    width: 349px;
    height: 249px;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    text-align: left;
    font-size: var(--text-caption-caption1-roboto-regular-size);
    color: var(--color-gray-300);
    font-family: var(--font-poppins);
  }
</style>