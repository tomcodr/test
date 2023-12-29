<template>
    <div class="brake-core-temperature-container">
      <b :class="{ 'red-text': isValueOver90 }">{{ brakeCoreTemperatureValue !== null ? brakeCoreTemperatureValue : $t('N/A') }}°C</b>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        brakeCoreTemperatureValue: null,
      };
    },
    computed: {
      isValueOver90() {
        return this.brakeCoreTemperatureValue !== null && parseFloat(this.brakeCoreTemperatureValue) > 90;
      },
    },
    methods: {
      async fetchData() {
        try {
          const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/1/messwerte");
          const data = await response.json();
  
          if (data.messwerte && data.messwerte.length > 0) {
            const brakeCoreTemperatureRR = data.messwerte.find(item => item.hasOwnProperty('brakecoretemperaturerr'))?.brakecoretemperaturerr;
            if (brakeCoreTemperatureRR !== undefined && brakeCoreTemperatureRR !== null) {
              // Runde auf ganze Zahl und konvertiere zu String
              this.brakeCoreTemperatureValue = Math.round(brakeCoreTemperatureRR).toString();
            } else {
              console.error("Ungültiger oder fehlender Wert für brakecoretemperaturerr:", brakeCoreTemperatureRR);
              // Setze brakeCoreTemperatureValue auf null, um "N/A" anzuzeigen
              this.brakeCoreTemperatureValue = null;
            }
          } else {
            console.error("Leere oder ungültige Daten für brakecoretemperaturerr:", data.messwerte);
            // Setze brakeCoreTemperatureValue auf null, um "N/A" anzuzeigen
            this.brakeCoreTemperatureValue = null;
          }
        } catch (error) {
          console.error("Fehler beim Laden der Messwerte:", error);
          // Setze brakeCoreTemperatureValue auf null, um "N/A" anzuzeigen
          this.brakeCoreTemperatureValue = null;
        }
      },
    },
    mounted() {
      this.fetchData();
    },
  };
  </script>
  
  <style scoped>
  .red-text {
    color: red;
  }
  </style>
  