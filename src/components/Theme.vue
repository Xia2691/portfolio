<script setup>
import { ref, onMounted } from 'vue'

const isActive = ref(false)

const toggleTheme = () => {
  isActive.value = !isActive.value
  if (isActive.value) {
    document.body.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.body.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const theme = localStorage.getItem('theme')
  if (theme === 'dark') {
    isActive.value = true
    document.body.classList.add('dark')
  }
})
</script>

<template>
  <div @click="toggleTheme">
    <div :class="['bubble', { move: isActive }]"></div>
  </div>
</template>
