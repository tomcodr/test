<template>
  <div class="container">
    <h1 class="title">FAQ</h1>
    <main class="accordion">
      <div class="faq-img">
      </div>
      <div class="content-accordion">
        <div v-for="(item, index) in faqItems" :key="index" class="question-answer" :class="{ 'show-text': item.showAnswer }">
          <div class="question">
            <h3 class="title-question">{{ item.question }}</h3>
            <button class="question-btn" @click="toggleAnswer(index)">
              <span class="up-icon">
                <i class="fa-solid fa-chevron-up"></i>
              </span>
              <span class="down-icon">
                <i class="fa-solid fa-chevron-down"></i>
              </span>
            </button>
          </div>
          <div class="answer">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqItems: [
        {
          question: "Was ist ein CarTracker?",
          answer: "Der CarTracker ist eine Anwendung zur Visualisierung von Telemetriedaten des eigenen Fahrzeugs.",
          showAnswer: false,
        },
        {
          question: "Welche Messwerte visualisiert der CarTracker?",
          answer: "Um Ihr Fahrzeug hinzuzufügen, öffnen Sie das Sideboard-Menü und wählen Sie den Punkt Fahrzeuge aus. Auf der neu geöffneten Seite befindet sich die Option Fahrzeug hinzufügen, die Sie wählen müssen. Tragen Sie nun Marke, Modell, Fahrgestellnummer, Farbe und Erstzulassung ein und speichern Sie die eingegebenen Daten, indem Sie auf den Pfeil nach rechts klicken. Der CarTracker ermöglicht es Ihnen, mehrere Fahrzeuge hinzuzufügen.",
          showAnswer: false,
        },
        {
          question: "Visualisiert die Anwendung die Messwerte auch in Diagrammen?",
          answer: "Ja, Diagramme zur Darstellung von Langzeitdaten sind für folgende Messwerte möglich: Drehzahl, Öl- und Wassertemperatur, Geschwindigkeit, Gang, Lenkung, Trips, Höhe. Die Anwendung ermöglicht zudem die Auswahl von Start- und Enddatum für die Diagramme.",
          showAnswer: false,
        },
        {
          question: "Ist es möglich, die Website auch im White-Mode darzustellen?",
          answer: "Ja, wenn Sie das Sideboard-Menü öffnen und die Präferenzen auswählen, können Sie das Layout der Website in Grün, Weiß oder Frozen ändern.",
          showAnswer: false,
        },
        {
          question: "Wie kann man die Sprache der Website ändern?",
          answer: "Um die Sprache der Website zu ändern, öffnen Sie das Sideboard-Menü und klicken Sie dann auf die Deutschland-Flagge unten links. Die Seite ist in Deutsch, Englisch und Spanisch verfügbar.",
          showAnswer: false,
        },
        {
          question: "Wie oft werden die Telemetriedaten aktualisiert?",
          answer: "Die Messwerte werden alle 2-3 Sekunden aktualisiert.",
          showAnswer: false,
        },
        {
          question: "Was ist ein CarTracker?",
          answer: "Der CarTracker ist eine Anwendung zur Visualisierung von Telemetriedaten des eigenen Fahrzeugs.",
          showAnswer: false,
        },
      ],
    };
  },
  methods: {
    toggleAnswer(index) {
      this.faqItems.forEach((item, i) => {
        if (i !== index) {
          item.showAnswer = false;
        }
      });
      this.$set(this.faqItems, index, {
        ...this.faqItems[index],
        showAnswer: !this.faqItems[index].showAnswer,
      });
    },
  },
};
</script>

<style scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 12px;
}

body {
  min-height: 100vh;
  font-family: 'Manrope', sans-serif;
  background: #efefef;
  display: flex;
  justify-content: center;
}

.container {
  position: relative;
  background: #fff;
  margin-top: 50px;
  margin-bottom: 30px;
  border-radius: 10px;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
}

.accordion {
  position: relative;
  width: 350px;
  margin-left: 40px;
}

.title {
  margin-top: 20px;
  font-size: 2rem;
  text-align: center;
}

.content-accordion {
  margin-top: 35px;
  margin-right: 50px;
}

.question-answer {
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  padding: 10px;
}

.question {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordion-img {
  position: relative;
  width: 320px;
}

.title-question {
  margin: 1.4rem 0rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: black;
}

.question-btn {
  font-size: 1.5rem;
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.up-icon,
.down-icon {
  margin-left: 5px;
  display: none;
}

.answer {
  font-size: 1.2rem;
  line-height: 1.8;
  display: none;
}

.show-text .answer {
  display: block;
}

.show-text .up-icon {
  display: inline;
}

.show-text .down-icon {
  display: none;
}

@media screen and (min-width: 992px) {
  .accordion {
    width: 920px;
    height: 0;
    display: flex;
  }

  .accordion-img {
    position: relative;
    width: 420px;
    top: 88px;
  }

  .question-answer {
    width: 380px;
  }

  .content-accordion {
    margin-top: 85px;
  }

  .title {
    margin: 50px;
    font-size: 3rem;
  }
}
</style>
