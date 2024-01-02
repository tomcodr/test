<template>
  <div class="faq-container">
    <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
      <div class="faq-question" @click="toggleAccordion(index)">
        {{ faq.question }}
        <i :class="['fas', {'fa-chevron-down': activeIndex === index, 'fa-chevron-up': activeIndex !== index}]"></i>
      </div>
      <div v-if="activeIndex === index" class="faq-answer">{{ faq.answer }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    faqs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeIndex: null
    };
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = (this.activeIndex === index) ? null : index;
    }
  }
}
</script>

<style scoped>
.faq-container {
  max-width: 600px;
  margin: auto;
}

.faq-item {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  border-radius: 5px;
  overflow: hidden;
}

.faq-question {
  background-color: #f5f5f5;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-answer {
  padding: 10px;
}
</style>
