<template>
    <div class="brake-light-status">{{ brakeLightStatus !== null ? brakeLightStatus : $t('N/A') }}</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        brakeLightValue: null,
        brakeLightStatus: null,
      };
    },
    methods: {
      async fetchBrakeLightStatus() {
        try {
          const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/67c012ef-39f7-48c1-8d7a-092fcad45c08/messwerte?type=brakelight_signal_r");
  
          // Überprüfe, ob die Anfrage erfolgreich war (Statuscode 200)
          if (!response.ok) {
            console.error("Fehlerhafte Antwort von der API. Statuscode:", response.status);
            return;
          }
  
          const data = await response.json();
  
          const brakeLightValue = parseFloat(data.messwerte[0]?.brakelight_signal_r);
  
          if (!isNaN(brakeLightValue)) {
            this.brakeLightValue = brakeLightValue;
            this.brakeLightStatus = brakeLightValue === 1.0 ? "ON" : "OFF";
          } else {
            console.error("Ungültiger Wert für Bremslicht:", data.messwerte[0]?.brakelight_signal_r);
            // Setze brakeLightStatus auf null, um "N/A" anzuzeigen
            this.brakeLightStatus = null;
          }
        } catch (error) {
          console.error("Fehler beim Laden der Bremslicht-Daten:", error);
          // Setze brakeLightStatus auf null, um "N/A" anzuzeigen
          this.brakeLightStatus = null;
        }
      },
    },
    mounted() {
      this.fetchBrakeLightStatus();
    },
  };
  </script>
  