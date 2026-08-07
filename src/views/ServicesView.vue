<template>
  <div class="services-page">
    <div class="bg-glow"></div>
    <div class="content">
      <h2>我们的服务</h2>
      <div class="service-list">
        <div v-for="item in services" :key="item.id" class="service-item">
          <span class="icon">{{ item.icon }}</span>
          <div class="info">
            <h3>{{ item.name }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { businessData } from '@/data/businessData'
const services = businessData.services
</script>

<style scoped>
.services-page {
  position: relative;
  min-height: 70vh;
  padding: 40px 24px;
}
.bg-glow {
  position: fixed;
  bottom: -20%;
  right: -20%;
  width: 60%;
  height: 60%;
  background: radial-gradient(circle, rgba(138,166,184,0.06), transparent 70%);
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
.services-page h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #d4e0e6;
  margin-bottom: 30px;
}
.light-theme .services-page h2 { color: #1a2a33; }
.service-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.service-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 24px;
  background: rgba(255,255,255,0.02);
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.04);
  transition: all 0.3s;
}
.light-theme .service-item {
  background: rgba(255,255,255,0.4);
  border-color: rgba(0,0,0,0.04);
}
.service-item:hover {
  border-color: rgba(107,143,163,0.3);
  transform: translateX(6px);
}
.service-item .icon { font-size: 2rem; flex-shrink: 0; }
.service-item .info h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #d4e0e6;
  margin-bottom: 2px;
}
.light-theme .service-item .info h3 { color: #1a2a33; }
.service-item .info p {
  font-size: 0.95rem;
  color: #6a8a9a;
  margin: 0;
}
.light-theme .service-item .info p { color: #5a7a88; }
</style>