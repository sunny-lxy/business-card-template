<template>
  <div>
    <h2>项目详情页</h2>
    <p>当前项目ID：{{ $route.params.id }}</p>
    <p>（这里后续可以展示大图或更详细的描述）</p>
    <router-link to="/">返回列表</router-link>
  </div>
</template>