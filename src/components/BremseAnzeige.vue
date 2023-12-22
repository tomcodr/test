<template>
  <div class="brake-container">
    <b class="brake-value">{{ interpretBrakeValue() }}</b>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brakeInputValue: null,
    };
  },
  methods: {
    async fetchBrakeInputValue() {
      try {
        const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/1/messwert?type=brake_input");
        const data = await response.json();

        
        const brakeInputValue = data.messwerte[0].brake_input;
        this.brakeInputValue = brakeInputValue.toString(); 
      } catch (error) {
        console.error("Fehler beim Laden der Brake Input-Daten:", error);
      }
    },
    interpretBrakeValue() {
      if (this.brakeInputValue === "1.0") {
        return "Ja";
      } else if (this.brakeInputValue === "0.0") {
        return "Nein";
      } 
    },
  },
  mounted() {
    this.fetchBrakeInputValue();
  },
};
</script>
