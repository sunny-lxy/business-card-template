import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', () => {
  const list = ref([
    {
      id: 1,
      title: '圣诞灯串',
      desc: '原生JS DOM交互，实现灯泡点亮/熄灭、流水灯效果',
      link: 'https://sunny-lxy.github.io/Christmas-Lights/'
    },
    {
      id: 2,
      title: 'Bin2Dec 转换器',
      desc: '原生JS算法，二进制转十进制，含输入校验与错误处理',
      link: 'https://sunny-lxy.github.io/Bin2Dec-Converter/'
    },
    {
      id: 3,
      title: 'To-Do List',
      desc: 'Vue3 + Vite 工程化，含 localStorage 持久化',
      link: 'https://sunny-lxy.github.io/todo-list/'
    },
    {
      id: 4,
      title: '个人工作台',
      desc: '集成任务管理、进度追踪与塔罗功能的日常工具',
      link: 'https://sunny-lxy.github.io/my-workbench/'
    }
  ])

  return { list }
})