<template>
  <div class="about">
    <div class="bg-glow"></div>
    <div class="content">
      <h2>关于 {{ brandName }}</h2>
      <p class="text">{{ aboutText }}</p>
    </div>
  </div>
</template>

<script setup>
import { businessData } from '@/data/businessData'
const brandName = businessData.brandName
const aboutText = businessData.aboutText
</script>

<style scoped>
.about {
  position: relative;
  min-height: 70vh;
  padding: 40px 24px;
}
.bg-glow {
  position: fixed;
  top: -20%;
  left: -20%;
  width: 60%;
  height: 60%;
  background: radial-gradient(circle, rgba(107,143,163,0.06), transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}
.content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}
.about h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #d4e0e6;
  margin-bottom: 20px;
}
.light-theme .about h2 { color: #1a2a33; }
.about .text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #8aa6b8;
}
.light-theme .about .text { color: #3a5a6a; }
</style>