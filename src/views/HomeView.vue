<template>
  <div class="home">
    <!-- 背景光效 -->
    <div class="bg-glow"></div>
    <div class="bg-glow-2"></div>

    <div class="content">
      <!-- 品牌标语 -->
      <section class="hero">
        <h1>{{ brandName }}</h1>
        <p class="subtitle">{{ brandSubtitle }}</p>
        <p class="description">{{ brandDescription }}</p>
      </section>

      <!-- 核心数据 -->
      <section class="stats">
        <div v-for="item in stats" :key="item.label" class="stat-card">
          <span class="number">{{ item.number }}</span>
          <span class="label">{{ item.label }}</span>
        </div>
      </section>

      <!-- 服务简览 -->
      <section class="services-preview">
        <h3>我们的服务</h3>
        <div class="service-grid">
          <div v-for="item in services" :key="item.id" class="service-card">
            <span class="icon">{{ item.icon }}</span>
            <h4>{{ item.name }}</h4>
            <p>{{ item.desc }}</p>
          </div>
        </div>
        <div class="more-link">
          <router-link to="/services">查看全部服务 →</router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { businessData } from '@/data/businessData'

const brandName = businessData.brandName
const brandSubtitle = businessData.brandSubtitle
const brandDescription = businessData.brandDescription
const stats = businessData.stats
const services = businessData.services
</script>

<style scoped>
.home {
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding: 0;
  overflow-x: hidden;
}
.content {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 32px 24px;
  margin: 0;
}

.bg-glow {
  position: fixed;
  top: -30%;
  left: -20%;
  width: 70%;
  height: 70%;
  background: radial-gradient(circle, rgba(107, 143, 163, 0.12), transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  animation: glowPulse 6s ease-in-out infinite alternate;
}
.bg-glow-2 {
  position: fixed;
  bottom: -30%;
  right: -20%;
  width: 60%;
  height: 60%;
  background: radial-gradient(circle, rgba(138, 166, 184, 0.08), transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  animation: glowPulse 8s ease-in-out infinite alternate-reverse;
}
@keyframes glowPulse {
  0% { transform: scale(1) translate(0,0); opacity: 0.6; }
  100% { transform: scale(1.1) translate(30px,-20px); opacity: 1; }
}

/* 品牌标语 */
.hero {
  text-align: center;
  padding: 50px 20px 40px;
  margin-bottom: 40px;
}
.hero h1 {
  font-size: 3.4rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 10px;
  color: #d4e0e6;
}
.light-theme .hero h1 { color: #1a2a33; }
.hero .subtitle {
  font-size: 1.15rem;
  color: #8aa6b8;
  margin-bottom: 8px;
}
.light-theme .hero .subtitle { color: #4a6a7a; }
.hero .description {
  color: #6a8a9a;
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.7;
}
.light-theme .hero .description { color: #5a7a88; }

/* 核心数据 */
.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
  margin-bottom: 48px;
}
.stat-card {
  text-align: center;
  padding: 20px 16px;
  background: rgba(255,255,255,0.02);
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.04);
}
.light-theme .stat-card {
  background: rgba(255,255,255,0.5);
  border-color: rgba(0,0,0,0.04);
}
.stat-card .number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #d4e0e6;
}
.light-theme .stat-card .number { color: #1a2a33; }
.stat-card .label {
  font-size: 0.85rem;
  color: #6a8a9a;
}
.light-theme .stat-card .label { color: #5a7a88; }

/* 服务简览 */
.services-preview h3 {
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #d4e0e6;
}
.light-theme .services-preview h3 { color: #1a2a33; }
.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 18px;
}
.service-card {
  padding: 24px 20px;
  background: rgba(255,255,255,0.02);
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.04);
  text-align: center;
  transition: all 0.3s;
}
.light-theme .service-card {
  background: rgba(255,255,255,0.5);
  border-color: rgba(0,0,0,0.04);
}
.service-card:hover {
  transform: translateY(-4px);
  border-color: rgba(107,143,163,0.3);
  box-shadow: 0 8px 24px rgba(107,143,163,0.06);
}
.service-card .icon { font-size: 2rem; display: block; margin-bottom: 8px; }
.service-card h4 { font-size: 1.05rem; font-weight: 600; color: #d4e0e6; margin-bottom: 4px; }
.light-theme .service-card h4 { color: #1a2a33; }
.service-card p { font-size: 0.9rem; color: #6a8a9a; margin: 0; }
.light-theme .service-card p { color: #5a7a88; }

.more-link {
  text-align: center;
  margin-top: 24px;
}
.more-link a {
  color: #8aa6b8;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}
.more-link a:hover { color: #d4e0e6; }
.light-theme .more-link a { color: #4a6a7a; }
.light-theme .more-link a:hover { color: #1a2a33; }

@media (max-width: 640px) {
  .hero h1 { font-size: 2.2rem; }
  .stats { grid-template-columns: repeat(2, 1fr); }
}
</style>