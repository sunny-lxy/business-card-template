<template>
  <div class="card">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <span class="tag">{{ project.tech }}</span>
    <div class="links">
      <a :href="project.github" target="_blank">GitHub</a>
      <a :href="project.demo" target="_blank">在线预览</a>
      <router-link :to="`/project/${project.id}`">详情</router-link>
    </div>
  </div>
</template>

<script setup>
defineProps(['project']) // 接收父组件传进来的数据
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  margin: 10px;
  width: 250px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: 0.3s;
}
.card:hover { transform: translateY(-5px); }
.tag {
  background: #42b883;
  color: white;
  padding: 2px 10px;
  border-radius: 20px;
  font-size: 12px;
  display: inline-block;
}
.links a {
  margin-right: 12px;
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}
</style>