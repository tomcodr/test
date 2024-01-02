<template>
 
    <div v-for="item in faq" :key="item.id" class="faq-item">
      <div class="faq-question" @click="toggle(item.id)">
        <span>{{ item.question }}</span>
        <i class="fa-solid fa-angle-down"></i>
      </div>
      <div v-if="item.show" class="faq-answer">{{ item.answer }}</div>
    </div>
 
</template>



<script>
import { defineComponent } from "vue";
import SideBoardMenu from "../components/SideBoardMenu.vue";
import PortalPopup from "../components/PortalPopup.vue";

export default defineComponent({
name: "HilfeLoggedIn",
data() {
  return {
    isSideBoardMenuOpen: false,
    faq: [
    {
      id: 1,
      question: "Was ist ein CarTracker?",
      answer: "Der CarTracker ist eine Anwendung zur Visualisierung von Telemetriedaten des eigenen Fahrzeugs.",
      show: false // Ein Boolean-Wert, der angibt, ob die Antwort angezeigt werden soll oder nicht
    },
    {
      id: 2,
      question: "Welche Messwerte visualisiert der CarTracker?",
      answer: "Die visualisierten Messwerte umfassen Drehzahl, Öl- und Wassertemperatur, Geschwindigkeit, Bremstemperaturen, Gang, Tank, Lenkung, Motor, Trips und Höhe. Darüber hinaus werden der Status von Hupe, ABS, Bremse, Motorhaube und Spoiler angezeigt.",
      show: false
    },
    {
      id: 3,
      question: "Wie füge ich mein Fahrzeug hinzu?",
      answer: "Um Ihr Fahrzeug hinzuzufügen, öffnen Sie das Sideboard-Menü und wählen Sie den Punkt Fahrzeuge aus. Auf der neu geöffneten Seite befindet sich die Option Fahrzeug hinzufügen, die Sie wählen müssen. Tragen Sie nun Marke, Modell, Fahrgestellnummer, Farbe und Erstzulassung ein und speichern Sie die eingegebenen Daten, indem Sie auf den Pfeil nach rechts klicken. Der CarTracker ermöglicht es Ihnen, mehrere Fahrzeuge hinzuzufügen.",
      show: false
    },
    {
      id: 4,
      question: "Visualisiert die Anwendung die Messwerte auch in Diagrammen?",
      answer: "Ja, Diagramme zur Darstellung von Langzeitdaten sind für folgende Messwerte möglich: Drehzahl, Öl- und Wassertemperatur, Geschwindigkeit, Gang, Lenkung, Trips, Höhe. Die Anwendung ermöglicht zudem die Auswahl von Start- und Enddatum für die Diagramme.",
    },
    {
      id: 5, 
      question: "Ist es möglich, die Website auch im White-Mode darzustellen?",
      answer: "Ja, wenn Sie das Sideboard-Menü öffnen und die Präferenzen auswählen, können Sie das Layout der Website in Grün, Weiß oder Frozen ändern."
    },
    { 
      id: 6,
      question: "Wie kann man die Sprache der Website ändern?",
      answer: "Um die Sprache der Website zu ändern, öffnen Sie das Sideboard-Menü und klicken Sie dann auf die Deutschland-Flagge unten links. Die Seite ist in Deutsch, Türkisch und Spanisch verfügbar."
    },
    {
        id: 7,
        question: "Wie oft werden die Telemetriedaten aktualisiert?",
        answer: "Der CarTracker aktualisiert die Messwerte alle 2-3 Sekunden.",
        show: false
      }
    ]
  };
},
 
components: { SideBoardMenu, PortalPopup },
methods: {
  openSideBoardMenu() {
    this.isSideBoardMenuOpen = true;
  },
  closeSideBoardMenu() {
    this.isSideBoardMenuOpen = false;
  },
  onPROFILEIconClick() {
    this.$router.push("/profil");
  },
  onCARTRACKERLOGOImageClick() {
    this.$router.push("/");
  },
  toggle(id) {
    const item = this.faq.find((faq) => faq.id === id);
    if (item) {
      item.show = !item.show;
    }
  },
},
});
</script>

<style scoped>
  .faq-container {
    margin-top: 50px; /* Adjust this value based on how much space you want above the FAQ section */
  }

  .faq-item {
    font-family: 'Manrope';
    text-align: center;
    width: calc(50% - 20px);
    margin: 0 auto 30px; /* Zentriert das Element horizontal und erhöht den Abstand nach unten */
    display: flex;
    flex-direction: column;
  }

  .faq-question {
    background-color: rgba(255, 255, 255, 0.3);
    padding: 15px;
    border-radius: 10px;
    font-size: 20px;
    color: white;
    cursor: pointer;
    margin-bottom: 10px; /* Abstand zwischen Frage und Antwort */
  }

  .faq-answer {
    background-color: rgba(255, 255, 255, 0.3);
    padding: 15px;
    border-radius: 10px;
    font-size: 18px;
    color: white;
  }

  @media (min-width: 768px) {
    .faq-question {
      order: 2; /* Ändert die Reihenfolge der Frage ab dem vierten Element */
    }
  }
</style>