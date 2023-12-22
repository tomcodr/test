<template>
  <b class="airflowspeed-value" v-if="airflowspeedValue !== null">{{ airflowspeedValue }}</b>
  <!-- b v-else>Keine Daten verfügbar</b -->
</template>

<script>
export default {
  data() {
    return {
      airflowspeedValue: null,
    };
  },
  methods: {
    async fetchAirflowspeedValue() {
      try {
        const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/1/messwert?type=airflowspeed");
        const data = await response.json();

        
        console.log("API Response:", data);

        
        if (Array.isArray(data.messwerte) && data.messwerte.length > 0) {
          
          const airflowspeed = data.messwerte[0]?.airflowspeed;
          
          
          if (airflowspeed !== undefined && airflowspeed !== null) {
            const airflowspeedValue = Math.round(airflowspeed); 
            if (!isNaN(airflowspeed)) {
              this.airflowspeedValue = airflowspeedValue;
            } else {
              console.error("Ungültiger oder fehlender numerischer Wert für airflowspeed:", airflowspeed);
            }
          } else {
            console.error("Ungültiger oder fehlender Wert für airflowspeed:", airflowspeed);
          }
        } else {
          console.error("Ungültige oder leere Daten für Luftstromgeschwindigkeitsdaten:", data.messwerte);
        }
      } catch (error) {
        console.error("Fehler beim Laden der Luftstromgeschwindigkeitsdaten:", error);
      }
    },
  },
  mounted() {
    this.fetchAirflowspeedValue();
  },
};
</script>

