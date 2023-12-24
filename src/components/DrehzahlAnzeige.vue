<template>
  <b class="drehzahl-value">{{ rpmValue !== null ? rpmValue : 'N/A' }}</b>
</template>

<script>
export default {
  data() {
    return {
      rpmValue: null,
    };
  },
  methods: {
    async fetchrpmValue() {
      try {
        const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/1/messwerte?type=rpm");
        const data = await response.json();

        console.log("API Response:", data);

        if (Array.isArray(data.messwerte) && data.messwerte.length > 0) {
          const rpm = data.messwerte[0]?.rpm;

          if (rpm !== undefined && rpm !== null) {
            const roundedRpm = Math.round(rpm);
            const rpmValue = `${roundedRpm} `;
            this.rpmValue = rpmValue;
          } else {
            console.error("Ungültiger oder fehlender Wert für rpm:", rpm);
            // Setze rpmValue auf null, um "N/A" anzuzeigen
            this.rpmValue = null;
          }
        } else {
          console.error("Ungültige oder leere Daten für rpm Daten:", data.messwerte);
          // Setze rpmValue auf null, um "N/A" anzuzeigen
          this.rpmValue = null;
        }
      } catch (error) {
        console.error("Fehler beim Laden der rpm Daten:", error);
        // Setze rpmValue auf null, um "N/A" anzuzeigen
        this.rpmValue = null;
      }
    },
  },
  mounted() {
    this.fetchrpmValue();
  },
};
</script>
