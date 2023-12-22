<template>
  <b class="gang-value">{{ gearValue }}</b>
</template>

<script>
export default {
  data() {
    return {
      gearValue: null,
    };
  },
  methods: {
    async fetchGearValue() {
      try {
        const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/1/messwert?type=gear_index");
        const data = await response.json();

        
        const gearValue = data.messwerte[0].gear_index;
        this.gearValue = gearValue;
      } catch (error) {
        console.error("Fehler beim Laden der Gangdaten:", error);
      }
    },
  },
  mounted() {
    this.fetchGearValue();
  },
};
</script>
