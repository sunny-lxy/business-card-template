<template>
  <div class="home">
    <h2>我的项目</h2>
    <div class="card-list">
      <ProjectCard v-for="item in projects" :key="item.id" :project="item" />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import { projects } from '@/data/projects.js';
</script>

<style scoped>
.home { padding: 40px; }
.card-list { display: flex; flex-wrap: wrap; justify-content: center; }
</style>