<template>
  <b class="drehzahl-value" v-if="rpmValue !== undefined">{{ rpmValue }}</b>
  <b v-else>Keine Daten verfügbar</b>
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
        const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/1/messwert?type=rpm");
        const data = await response.json();

      
        console.log("API Response:", data);

        
        if (Array.isArray(data.messwerte) && data.messwerte.length > 0) {
         
          const rpm = data.messwerte[0]?.rpm;
          
          
          if (rpm !== undefined && rpm !== null) {
            const roundedRpm = Math.round(rpm); 
            const rpmValue = `${roundedRpm} `;
            this.rpmValue = rpmValue;
          } else {
            console.error("Ungültiger oder fehlender Wert für rpm:", rpmIndex);
          }
        } else {
          console.error("Ungültige oder leere Daten für rpm Daten:", data.messwerte);
        }
      } catch (error) {
        console.error("Fehler beim Laden der rpm Daten:", error);
      }
    },
  },
  mounted() {
    this.fetchrpmValue();
  },
};
</script>

