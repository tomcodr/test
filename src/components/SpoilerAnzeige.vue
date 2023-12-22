<template>
    <div class="spoiler-status">{{ spoilerStatus }}</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        spoilerValue: null,
        spoilerStatus: null,
      };
    },
    methods: {
      async fetchSpoilerStatus() {
        try {
          const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/1/messwert?type=spoilerR");
          const data = await response.json();
  
          
          const spoilerValue = parseFloat(data.messwerte[0]?.spoilerr);
  
          
          if (!isNaN(spoilerValue)) {
          
            this.spoilerValue = spoilerValue;
            this.spoilerStatus = spoilerValue === 0.0 ? "CLOSED" : "OPEN";
          } else {
            console.error("Ungültiger Wert für Spoiler:", data.messwerte[0]?.spoilerr);
          }
        } catch (error) {
          console.error("Fehler beim Laden der Spoiler-Daten:", error);
        }
      },
    },
    mounted() {
      this.fetchSpoilerStatus();
    },
  };
  </script>
  
  
  