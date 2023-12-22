<template>
  <div class="tank-wert-hybrid">{{ fuelVolumePercentage }}</div>
</template>

<script>
export default {
  data() {
    return {
      fuelVolume: 0,
      fuelVolumePercentage: null,
    };
  },
  methods: {
    async fetchFuelVolume() {
      try {
        const response = await fetch("https://cartrackerapi.onrender.com/api/v1/fahrzeuge/1/messwert?type=fuel_volume");
        const data = await response.json();

        
        const fuelVolume = parseFloat(data.messwerte[0]?.fuel_volume); 

        
        if (!isNaN(fuelVolume)) {
         
          const wholeNumberPart = parseInt(fuelVolume);
          this.fuelVolume = fuelVolume;
          this.fuelVolumePercentage = `${wholeNumberPart}%`;

       
const tankBalkenAktuell = document.querySelector(".tank-balken-aktuell-hybrid");
if (tankBalkenAktuell) {
  tankBalkenAktuell.style.transform = `scaleX(${fuelVolume / 100})`;
}

        } else {
          console.error("Ungültiger Wert für Kraftstoffvolumen:", data.messwerte[0]?.fuel_volume);
        }
      } catch (error) {
        console.error("Fehler beim Laden der Kraftstoffvolumen-Daten:", error);
      }
    },
  },
  mounted() {
    this.fetchFuelVolume();
  },
};
</script>
