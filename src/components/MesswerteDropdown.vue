<template>
  <div class="messwerte-dropdown">
   
    <div class="trips-text" @click="onTripsTextClick">Trips</div>
    <div class="rder-text" @click="onRderTextClick">Räder</div>
    <div class="motor-text" @click="onMotorTextClick">Motor</div>
    <div class="lenkung-text" @click="onLenkungTextClick">Lenkung</div>
    <div class="tank-text" @click="onTankTextClick">Tank</div>
    <div class="gang-text" @click="onGangTextClick">Gang</div>
    <div class="bremsen-text" @click="onBremsenTextClick">Bremsen</div>
    <div class="geschwindigkeit-text" @click="onGeschwindigkeitTextClick">
      Geschwindigkeit
    </div>
    <div class="oelwasser-text" @click="onOeLWasserTextClick">
      Öl/Wasser Temperatur
    </div>
    
    <div class="drehzahl-text" @click="onDrehzahlTextClick">Drehzahl</div>
  
  </div>

</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "MesswerteDropdown",
    methods: {
      onTripsTextClick() {
        this.$router.push("/trips");
      },
      onRderTextClick() {
        this.$router.push("/bremsen");
      },
      onMotorTextClick() {
        this.$router.push("/motor");
      },
      onLenkungTextClick() {
        this.$router.push("/lenkung");
      },
      onTankTextClick() {
        this.$router.push("/tank");
      },
      onGangTextClick() {
        this.$router.push("/gang");
      },
      onBremsenTextClick() {
        this.$router.push("/bremsen");
      },
      onGeschwindigkeitTextClick() {
        this.$router.push("/geschwindigkeit");
      },
      onOeLWasserTextClick() {
        this.$router.push("/temperaturen");
      },
      onDrehzahlTextClick() {
        this.$router.push("/drehzahl");
      },
    },
  });
</script>
<style scoped>
  .trips-text {
    position: absolute;
    height: 7%;
    width: 25%;
    top: 90.29%;
    left: 7.5%;
    display: inline-block;
    cursor: pointer;
  }
  .rder-text {
    position: absolute;
    height: 7%;
    width: 25%;
    top: 80.59%;
    left: 7.5%;
    display: inline-block;
    cursor: pointer;
  }
  .motor-text {
    position: absolute;
    height: 6.77%;
    width: 30.36%;
    top: 70.65%;
    left: 7.5%;
    display: inline-block;
    cursor: pointer;
  }
  .lenkung-text {
    position: absolute;
    height: 7%;
    width: 34.29%;
    top: 60.72%;
    left: 6.79%;
    display: inline-block;
    cursor: pointer;
  }
  .tank-text {
    position: absolute;
    height: 6.77%;
    width: 27.5%;
    top: 51.02%;
    left: 6.43%;
    display: inline-block;
    cursor: pointer;
  }
  .gang-text {
    position: absolute;
    height: 6.77%;
    width: 27.5%;
    top: 41.31%;
    left: 6.07%;
    display: inline-block;
    cursor: pointer;
  }
  .bremsen-text {
    position: absolute;
    height: 7%;
    width: 38.21%;
    top: 31.38%;
    left: 6.79%;
    display: inline-block;
    cursor: pointer;
  }
  .geschwindigkeit-text {
    position: absolute;
    height: 6.77%;
    width: 63.93%;
    top: 21.67%;
    left: 6.79%;
    display: inline-block;
    cursor: pointer;
  }
  .oelwasser-text {
    position: absolute;
    height: 7%;
    width: 90%;
    top: 11.74%;
    left: 6.79%;
    display: inline-block;
    cursor: pointer;
  }
  .drehzahl-text {
    position: absolute;
    height: 7%;
    width: 47.5%;
    top: 2.26%;
    left: 6.79%;
    display: inline-block;
    cursor: pointer;
  }

  .trips-text:hover,
.rder-text:hover,
.motor-text:hover,
.lenkung-text:hover,
.tank-text:hover,
.gang-text:hover,
.bremsen-text:hover,
.geschwindigkeit-text:hover,
.oelwasser-text:hover,
.drehzahl-text:hover {
  color: #426b1f; 
  filter: brightness(0.9);
}


  .messwerte-dropdown {
    position: absolute;
    background-color: var(--color-gray-100);
    top: 110px;
    left: 1000px;
    width: 280px;
    height: 443px;
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
    text-align: left;
    font-size: var(--font-size-2xl);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }
</style>