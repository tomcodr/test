<template>
  <b class="oel-value" v-if="oilTemperatureValue !== undefined">{{ oilTemperatureValue }}</b>
</template>

<script>
export default {
  data() {
    return {
      oilTemperatureValue: null,
    };
  },
  methods: {
    async fetchOilTemperatureValue() {
      try {
        const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/1/messwert?type=oil_temperature");
        const data = await response.json();

        
        console.log("API Response:", data);

       
        if (Array.isArray(data.messwerte) && data.messwerte.length > 0) {
          
          const temperatureValue = data.messwerte[0].oil_temperature;
          if (!isNaN(temperatureValue)) {
           
            const oilTemperatureValue = Math.round(temperatureValue) + "°"; 
            this.oilTemperatureValue = oilTemperatureValue.toString(); 
          } else {
            console.error("Ungültiger Wert für oil_temperature:", temperatureValue);
          }
        } else {
          console.error("Ungültige oder leere Daten für Oil Temperature:", data.messwerte);
        }
      } catch (error) {
        console.error("Fehler beim Laden der Oil Temperature-Daten:", error);
      }
    },
  },
  mounted() {
    this.fetchOilTemperatureValue();
  },
};
</script>
