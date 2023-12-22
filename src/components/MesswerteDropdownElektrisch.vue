<template>
    <div class="messwerte-dropdown-elektrisch">
      
      <div class="trips-text" @click="onTripsTextClick">Trips</div>
      <div class="rder-text" @click="onRderTextClick">Räder</div>
      <div class="lenkung-text" @click="onLenkungTextClick">Lenkung</div>
      <div class="bremsen-text" @click="onBremsenTextClick">Bremsen</div>
      <div class="geschwindigkeit-text" @click="onGeschwindigkeitTextClick">
        Geschwindigkeit
      </div>
    
    </div>
  </template>
  <script>
    import { defineComponent } from "vue";
  
    export default defineComponent({
      name: "MesswerteDropdownElektrisch",
      methods: {
        onTripsTextClick() {
          this.$router.push("/trips");
        },
        onRderTextClick() {
          this.$router.push("/bremsen");
        },
        
        onLenkungTextClick() {
          this.$router.push("/lenkung");
        },
        
        onBremsenTextClick() {
          this.$router.push("/bremsen");
        },
        onGeschwindigkeitTextClick() {
          this.$router.push("/geschwindigkeit");
        },
        
      },
    });
  </script>
  <style scoped>
    .trips-text {
      position: absolute;
      height: 7%;
      width: 25%;
      top: 170px;
      left: 7.5%;
      display: inline-block;
      cursor: pointer;
    }
    .rder-text {
      position: absolute;
      height: 7%;
      width: 25%;
      top: 135px;
      left: 7.5%;
      display: inline-block;
      cursor: pointer;
    }
    
    .lenkung-text {
      position: absolute;
      height: 7%;
      width: 34.29%;
      top: 99px;
      left: 6.79%;
      display: inline-block;
      cursor: pointer;
    }
    
    .bremsen-text {
      position: absolute;
      height: 7%;
      width: 38.21%;
      top: 65px;
      left: 6.79%;
      display: inline-block;
      cursor: pointer;
    }
    .geschwindigkeit-text {
      position: absolute;
      height: 6.77%;
      width: 63.93%;
      top: 30px;
      left: 6.79%;
      display: inline-block;
      cursor: pointer;
    }
   
    
    .messwerte-dropdown-elektrisch {
      position: absolute;
      background-color: var(--color-gray-100);
      top: 110px;
      left: 1000px;
      width: 220px;
      height: 270px;
      overflow: hidden;
      max-width: 100%;
      max-height: 100%;
      text-align: left;
      font-size: var(--font-size-2xl);
      color: var(--color-white);
      font-family: var(--font-poppins);
    }
  </style>
  