<template>
    <div class="abs-status">{{ absStatus !== null ? absStatus : 'N/A' }}</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        absValue: null,
        absStatus: null,
      };
    },
    methods: {
      async fetchAbsStatus() {
        try {
          const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/1/messwerte?type=isabsbrakeactive");
  
          // Überprüfe, ob die Anfrage erfolgreich war (Statuscode 200)
          if (!response.ok) {
            console.error("Fehlerhafte Antwort von der API. Statuscode:", response.status);
            return;
          }
  
          const data = await response.json();
  
          const absValue = parseFloat(data.messwerte[0]?.isabsbrakeactive);
  
          if (!isNaN(absValue)) {
            this.absValue = absValue;
            this.absStatus = absValue === 1.0 ? "ACTIVE" : "OFF";
          } else {
            console.error("Ungültiger Wert für ABS:", data.messwerte[0]?.isabsbrakeactive);
            // Setze absStatus auf null, um "N/A" anzuzeigen
            this.absStatus = null;
          }
        } catch (error) {
          console.error("Fehler beim Laden der ABS-Daten:", error);
          // Setze absStatus auf null, um "N/A" anzuzeigen
          this.absStatus = null;
        }
      },
    },
    mounted() {
      this.fetchAbsStatus();
    },
  };
  </script>
  