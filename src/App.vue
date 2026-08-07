<template>
  <div id="app" :class="themeClass">
    <!-- 导航栏 -->
    <header>
      <div class="logo">{{ brandName }}</div>
      <nav>
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/services">服务</router-link>
        <router-link to="/contact">联系</router-link>
        <button class="theme-toggle" @click="toggleTheme">
          {{ isDark ? '☀️' : '🌙' }}
        </button>
      </nav>
    </header>

    <!-- 页面内容 -->
    <main>
      <router-view />
    </main>

    <!-- 底部 -->
    <footer>
      <p>{{ footer }}</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { businessData } from '@/data/businessData'

const brandName = businessData.brandName
const footer = businessData.footer

const isDark = ref(true)

const themeClass = computed(() => ({
  'dark-theme': isDark.value,
  'light-theme': !isDark.value
}))

function toggleTheme() {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') {
    isDark.value = false
  }
})
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  min-height: 100vh;
  transition: background 0.4s, color 0.4s;
}

#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: background 0.4s, color 0.4s;
}

/* ===== 导航栏（固定） ===== */
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 32px;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid;
  transition: background 0.4s, border-color 0.4s;
}

.logo {
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
}

nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

nav a {
  text-decoration: none;
  font-size: 0.95rem;
  padding: 6px 16px;
  border-radius: 40px;
  transition: all 0.25s;
}

nav a.router-link-active {
  font-weight: 600;
}

.theme-toggle {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.25s;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.theme-toggle:hover { transform: scale(1.08); }

main { flex: 1; padding-top: 76px; }

footer {
  text-align: center;
  font-size: 0.8rem;
  padding: 24px 20px;
  border-top: 1px solid;
  transition: border-color 0.4s, color 0.4s;
}

/* ===== 深色主题 ===== */
.dark-theme {
  background: #0d1117;
  color: #e8edf5;
}
.dark-theme header {
  background: rgba(13, 17, 23, 0.82);
  border-color: rgba(255, 255, 255, 0.05);
}
.dark-theme .logo {
  color: #d4e0e6;
}
.dark-theme nav a {
  color: #8aa6b8;
}
.dark-theme nav a:hover,
.dark-theme nav a.router-link-active {
  color: #e8edf5;
  background: rgba(255, 255, 255, 0.04);
}
.dark-theme .theme-toggle {
  background: rgba(255, 255, 255, 0.06);
  color: #d4e0e6;
}
.dark-theme .theme-toggle:hover {
  background: rgba(255, 255, 255, 0.12);
}
.dark-theme footer {
  border-color: rgba(255, 255, 255, 0.04);
  color: #5a6f7a;
}

/* ===== 浅色主题 ===== */
.light-theme {
  background: #f2f5f7;
  color: #1a2a33;
}
.light-theme header {
  background: rgba(242, 245, 247, 0.85);
  border-color: rgba(0, 0, 0, 0.05);
}
.light-theme .logo {
  color: #1a2a33;
}
.light-theme nav a {
  color: #4a6a7a;
}
.light-theme nav a:hover,
.light-theme nav a.router-link-active {
  color: #1a2a33;
  background: rgba(0, 0, 0, 0.04);
}
.light-theme .theme-toggle {
  background: rgba(0, 0, 0, 0.04);
  color: #4a6a7a;
}
.light-theme .theme-toggle:hover {
  background: rgba(0, 0, 0, 0.08);
}
.light-theme footer {
  border-color: rgba(0, 0, 0, 0.05);
  color: #7a9aa8;
}

/* ===== 响应式 ===== */
@media (max-width: 640px) {
  header {
    padding: 12px 16px;
    flex-wrap: wrap;
    gap: 8px;
  }
  .logo { font-size: 1rem; }
  nav a { font-size: 0.8rem; padding: 4px 10px; }
  .theme-toggle { width: 32px; height: 32px; font-size: 0.9rem; }
  main { padding-top: 68px; }
}
</style>