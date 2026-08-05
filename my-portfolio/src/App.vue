<template>
  <div id="app">
    <!-- 顶部导航 -->
    <header>
      <h1>我的作品集</h1>
      <nav>
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于</router-link>
      </nav>
    </header>

    <!-- 路由出口（这里显示首页或详情页） -->
    <router-view />
  </div>
</template>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Arial, sans-serif; background: #f9f9f9; }
header {
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
nav a {
  margin-left: 20px;
  text-decoration: none;
  color: #333;
}
</style>