<template>
    <div class="brake-surface-temperature-container">
      <b :class="{ 'red-text': isValueOver90 }">{{ brakeSurfaceTemperatureValue !== null ? brakeSurfaceTemperatureValue : 'N/A' }}°C</b>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        brakeSurfaceTemperatureValue: null,
      };
    },
    computed: {
      isValueOver90() {
        return this.brakeSurfaceTemperatureValue !== null && parseFloat(this.brakeSurfaceTemperatureValue) > 90;
      },
    },
    methods: {
      async fetchData() {
        try {
          const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/1/messwerte");
          const data = await response.json();
  
          if (data.messwerte && data.messwerte.length > 0) {
            const brakeSurfaceTemperatureFR = data.messwerte.find(item => item.hasOwnProperty('brakesurfacetemperaturefr'))?.brakesurfacetemperaturefr;
            if (brakeSurfaceTemperatureFR !== undefined && brakeSurfaceTemperatureFR !== null) {
              // Runde auf ganze Zahl und konvertiere zu String
              this.brakeSurfaceTemperatureValue = Math.round(brakeSurfaceTemperatureFR).toString();
            } else {
              console.error("Ungültiger oder fehlender Wert für brakesurfacetemperaturefr:", brakeSurfaceTemperatureFR);
              // Setze brakeSurfaceTemperatureValue auf null, um "N/A" anzuzeigen
              this.brakeSurfaceTemperatureValue = null;
            }
          } else {
            console.error("Leere oder ungültige Daten für brakesurfacetemperaturefr:", data.messwerte);
            // Setze brakeSurfaceTemperatureValue auf null, um "N/A" anzuzeigen
            this.brakeSurfaceTemperatureValue = null;
          }
        } catch (error) {
          console.error("Fehler beim Laden der Messwerte:", error);
          // Setze brakeSurfaceTemperatureValue auf null, um "N/A" anzuzeigen
          this.brakeSurfaceTemperatureValue = null;
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
  