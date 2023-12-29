<template>
  <div>
    <label for="startDate">{{ $t('Start') }}</label>
    <input type="date" v-model="startDate" @change="updateChart" id="startDate">

    <label for="endDate">{{ $t('Ende') }}</label>
    <input type="date" v-model="endDate" @change="updateChart" id="endDate">

    <div class="loading" v-if="loading">Lädt...</div>

    <canvas ref="myChart" width="850" height="400"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import 'chartjs-plugin-zoom';

export default {
  data() {
    return {
      startDate: '',
      endDate: '',
      rpmData: [],
      chartInstance: null,
      loading: false,
    };
  },
  mounted() {
    this.fetchRpmData();
  },
  methods: {
    async fetchRpmData() {
      try {
        this.loading = true;

        const response = await fetch('https://cartrackerapi.onrender.com/api/v1/fahrzeuge/1/messwerte?type=rpm');
        const data = await response.json();

        this.rpmData = data.messwerte;

        // Initialize the chart with the full dataset
        this.renderChart(this.rpmData);
      } catch (error) {
        console.error('Error fetching RPM data:', error);
      } finally {
        this.loading = false;
      }
    },
    updateChart() {
      // Add validation to ensure the end date is not before the start date
      if (this.startDate && this.endDate && this.startDate > this.endDate) {
        alert('End date cannot be before start date');
        return;
      }

      // Filter the data based on the selected date range
      const filteredData = this.rpmData.filter(entry => {
        const timestamp = new Date(entry.timestamp);
        return (!this.startDate || timestamp >= new Date(this.startDate)) && (!this.endDate || timestamp <= new Date(this.endDate));
      });

      // Destroy the previous chart instance
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }

      // Render the chart with the filtered data
      this.renderChart(filteredData);
    },
    renderChart(data) {
      const ctx = this.$refs.myChart.getContext('2d');
      this.chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.map(entry => entry.timestamp),
          datasets: [
            {
              label: 'RPM',
              data: data.map(entry => entry.rpm),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: 8000,
            },
          },
          plugins: {
            zoom: {
              pan: {
                enabled: true,
                mode: 'x',
                speed: 10,
              },
              zoom: {
                wheel: {
                  enabled: true,
                },
                pinch: {
                  enabled: true,
                },
                mode: 'xy',
                speed: 0.1,
              },
            },
          },
        },
      });
    },
  },
};
</script>

<style scoped>
.loading {
  position: absolute;
  top: 150px;
  left: 350px;
  font-weight: 100;
}
input[type="date"] {
  height: 30px; /* Passen Sie die gewünschte Höhe an */
  margin-right: 100px;
  background-color: #4BC0C0; /* Ändern Sie die Hintergrundfarbe nach Bedarf */
  color: #FFFFFF; /* Ändern Sie die Textfarbe nach Bedarf */
  border: 1px solid #4BC0C0; /* Ändern Sie die Randfarbe nach Bedarf */
  border-radius: 5px; /* Ändern Sie die Randradius nach Bedarf */
  user-select: none; /* Deaktivieren Sie die Textauswahl */
}
</style>
