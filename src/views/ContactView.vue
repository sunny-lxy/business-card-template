<template>
  <div class="contact-page">
    <div class="bg-glow"></div>
    <div class="content">
      <h2>联系我们</h2>
      <div class="contact-info">
        <p>📞 {{ contact.phone }}</p>
        <p>📧 {{ contact.email }}</p>
        <p>📍 {{ contact.address }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { businessData } from '@/data/businessData'
const contact = businessData.contact
</script>

<style scoped>
.contact-page {
  position: relative;
  min-height: 70vh;
  padding: 40px 24px;
}
.bg-glow {
  position: fixed;
  top: -20%;
  right: -20%;
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
  max-width: 700px;
  margin: 0 auto;
}
.contact-page h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #d4e0e6;
  margin-bottom: 30px;
}
.light-theme .contact-page h2 { color: #1a2a33; }
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.contact-info p {
  font-size: 1.1rem;
  padding: 16px 20px;
  background: rgba(255,255,255,0.02);
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.04);
  color: #8aa6b8;
}
.light-theme .contact-info p {
  background: rgba(255,255,255,0.4);
  border-color: rgba(0,0,0,0.04);
  color: #3a5a6a;
}
</style>