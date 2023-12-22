<template>
    <div class="horn-status">{{ hornStatus }}</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        hornValue: null,
        hornStatus: null,
      };
    },
    methods: {
      async fetchHornStatus() {
        try {
          const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/1/messwert?type=horn");
          const data = await response.json();
  
         
          const hornValue = parseFloat(data.messwerte[0]?.horn);
  
          
          if (!isNaN(hornValue)) {
         
            this.hornValue = hornValue;
            this.hornStatus = hornValue === 0.0 ? "OFF" : "ACTIVE";
          } else {
            console.error("Ungültiger Wert für Horn:", data.messwerte[0]?.horn);
          }
        } catch (error) {
          console.error("Fehler beim Laden der Horn-Daten:", error);
        }
      },
    },
    mounted() {
      this.fetchHornStatus();
    },
  };
  </script>

  