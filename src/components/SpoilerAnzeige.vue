<template>
  <div class="spoiler-status">{{ spoilerStatus !== null ? spoilerStatus : 'N/A' }}</div>
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
        const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/1/messwerte?type=spoilerf");

        // Überprüfe, ob die Anfrage erfolgreich war (Statuscode 200)
        if (!response.ok) {
          console.error("Fehlerhafte Antwort von der API. Statuscode:", response.status);
          return;
        }

        const data = await response.json();

        const spoilerValue = parseFloat(data.messwerte[0]?.spoilerr);

        if (!isNaN(spoilerValue)) {
          this.spoilerValue = spoilerValue;
          this.spoilerStatus = spoilerValue === 0.0 ? "CLOSED" : "OPEN";
        } else {
          console.error("Ungültiger Wert für Spoiler:", data.messwerte[0]?.spoilerr);
          // Setze spoilerStatus auf null, um "N/A" anzuzeigen
          this.spoilerStatus = null;
        }
      } catch (error) {
        console.error("Fehler beim Laden der Spoiler-Daten:", error);
        // Setze spoilerStatus auf null, um "N/A" anzuzeigen
        this.spoilerStatus = null;
      }
    },
  },
  mounted() {
    this.fetchSpoilerStatus();
  },
};
</script>
