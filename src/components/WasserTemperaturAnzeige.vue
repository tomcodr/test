<template>
  <div>
    <b class="water-temperature" v-if="waterTemperature !== undefined">{{ waterTemperature }}</b>
  </div>
</template>

<script>
export default {
  data() {
    return {
      waterTemperature: null,
    };
  },
  methods: {
    async fetchWaterTemperature() {
      try {
        const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/1/messwert?type=oil_temperature");
        const data = await response.json();

      
        console.log("API Response:", data);

        
        if (Array.isArray(data.messwerte) && data.messwerte.length > 0) {
          
          const temperatureValue = data.messwerte[0].oil_temperature;
          if (!isNaN(temperatureValue)) {
           
            const waterTemperature = Math.round(temperatureValue) + "°"; 
            this.waterTemperature = waterTemperature.toString(); 
          } else {
            console.error("Ungültiger Wert für oil_temperature:", temperatureValue);
          }
        } else {
          console.error("Ungültige oder leere Daten für Water Temperature:", data.messwerte);
        }
      } catch (error) {
        console.error("Fehler beim Laden der Water Temperature-Daten:", error);
      }
    },
  },
  mounted() {
    this.fetchWaterTemperature();
  },
};
</script>
