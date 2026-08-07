<template>
  <div class="about">
    <!-- 背景光效 -->
    <div class="bg-glow"></div>
    <div class="bg-glow-2"></div>
    <div class="scanline"></div>

    <div class="content">
      <section class="hero">
        <h2>📋 关于这个模板</h2>
        <p class="subtitle">一个可快速配置的企业/个人名片展示页</p>
        <p class="description">
          你只需要修改 <code>src/data/businessData.js</code> 文件里的内容，
          页面就会自动更新。支持深色/浅色模式，适配手机和电脑。
        </p>
      </section>

      <section class="features">
        <div class="feature-card">
          <span>⚡</span>
          <h4>快速交付</h4>
          <p>提供资料后 24 小时内上线</p>
        </div>
        <div class="feature-card">
          <span>🎨</span>
          <h4>视觉定制</h4>
          <p>可更换配色方案和字体</p>
        </div>
        <div class="feature-card">
          <span>📱</span>
          <h4>移动适配</h4>
          <p>手机、平板、电脑全兼容</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about {
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
  padding: 32px 20px;
  margin: 0;
}

.bg-glow {
  position: fixed;
  top: -30%;
  left: -20%;
  width: 70%;
  height: 70%;
  background: radial-gradient(circle, rgba(167, 139, 250, 0.12), transparent 70%);
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
  background: radial-gradient(circle, rgba(96, 165, 250, 0.10), transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  animation: glowPulse 8s ease-in-out infinite alternate-reverse;
}

@keyframes glowPulse {
  0% { transform: scale(1) translate(0, 0); opacity: 0.6; }
  100% { transform: scale(1.1) translate(30px, -20px); opacity: 1; }
}

.scanline {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(167, 139, 250, 0.012) 2px,
    rgba(167, 139, 250, 0.012) 4px
  );
}

.hero {
  text-align: center;
  padding: 40px 20px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
  margin-bottom: 40px;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 24px;
  padding: 1px;
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.2), transparent 40%, transparent 60%, rgba(96, 165, 250, 0.2));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.hero h2 {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #e8edf5 0%, #a78bfa 45%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
}

.hero .subtitle {
  font-size: 1.05rem;
  color: #94a3b8;
  margin-bottom: 10px;
}

.hero .description {
  color: #64748b;
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.7;
}

.hero code {
  background: rgba(167, 139, 250, 0.15);
  color: #a78bfa;
  padding: 2px 10px;
  border-radius: 6px;
  font-size: 0.85rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(167, 139, 250, 0.12);
  border-radius: 20px;
  padding: 28px 20px 24px;
  text-align: center;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.feature-card:hover {
  transform: translateY(-6px) scale(1.01);
  border-color: rgba(167, 139, 250, 0.35);
  box-shadow: 0 12px 40px rgba(167, 139, 250, 0.08), 0 0 60px rgba(167, 139, 250, 0.04);
}

.feature-card span {
  font-size: 2rem;
  display: block;
  margin-bottom: 8px;
}

.feature-card h4 {
  font-size: 1.05rem;
  font-weight: 600;
  color: #f1f5f9;
  margin-bottom: 4px;
}

.feature-card p {
  font-size: 0.9rem;
  color: #94a3b8;
  margin: 0;
}

/* ===== 浅色主题 ===== */
.light-theme .hero {
  background: rgba(255, 255, 255, 0.5);
  border-color: rgba(0, 0, 0, 0.04);
}
.light-theme .hero::before {
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.15), transparent 40%, transparent 60%, rgba(37, 99, 235, 0.15));
}
.light-theme .hero h2 {
  background: linear-gradient(135deg, #0f172a 0%, #7c3aed 50%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.light-theme .hero .subtitle {
  color: #475569;
}
.light-theme .hero .description {
  color: #64748b;
}

.light-theme .feature-card {
  background: #ffffff;
  border-color: rgba(124, 58, 237, 0.08);
}
.light-theme .feature-card:hover {
  border-color: rgba(124, 58, 237, 0.25);
  box-shadow: 0 12px 40px rgba(124, 58, 237, 0.06);
}
.light-theme .feature-card h4 {
  color: #0f172a;
}
.light-theme .feature-card p {
  color: #475569;
}

@media (max-width: 640px) {
  .hero h2 {
    font-size: 1.5rem;
  }
  .features {
    grid-template-columns: 1fr;
  }
}
</style>