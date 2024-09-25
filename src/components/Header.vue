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
  <div class="header">
    <div class="base-container">
      <div class="header__leftnav">le</div>
      <div class="header__rightnav">ri</div>
      <div class="togglebtn" @click="toggleTheme"><div :class="['bubble', { move: isActive }]"></div></div>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: var(--header);
}
.base-container {
  align-items: center;
  display: flex;
  gap: 12px;
  justify-content: space-between;
  padding: 30px 12px;
  position: relative;
}
.togglebtn {
  position: absolute;
  right: 24px;
  top: 24px;
}
</style>
