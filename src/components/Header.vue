<script setup>
import { ref, onMounted } from 'vue'
import avatarUrl from '@/assets/avatar/avatar.jpg'
import githubIcon from '@/assets/svg/github.svg'
import arrowIcon from '@/assets/svg/arrow.svg'
import downloadIcon from '@/assets/svg/download.svg'
const isActive = ref(false)

const sendEmail = () => {
  window.location.href = 'mailto:ejazulhaq8281@gmail.com'
}

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
      <div class="header__leftnav">
        <el-avatar :size="180" shape="circle" :src="avatarUrl" alt="Avatar"> </el-avatar>
        <div class="header__leftnav__content">
          <h1 class="font-title name">Ijaz Ul Haq</h1>
          <p>MEVN Stack Developer</p>
          <div class="icons-container">
            <a href="https://github.com/EjazEkay" target="_blank"
              ><div class="social-icon"><githubIcon /></div
            ></a>
          </div>
        </div>
      </div>
      <div class="header__rightnav">
        <button @click="sendEmail" class="btn-green"><arrowIcon />Contact Me</button>
        <button class="btn-blue"><downloadIcon />Download CV</button>
      </div>
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
.header__leftnav {
  align-items: center;
  display: flex;
  gap: 30px;
}

.header__leftnav__content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.header__leftnav__content h1 {
  color: var(--heading);
  font-size: 36px;
}

.header__leftnav__content p {
  color: var(--subtitle);
  font-size: 24px;
}

.header__rightnav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.icons-container {
  align-items: center;
  display: flex;
  gap: 8px;
}

.togglebtn {
  position: absolute;
  right: 24px;
  top: 24px;
}

@media (max-width: 768px) {
  .base-container {
    flex-direction: column;
  }
  .header__leftnav {
    flex-direction: column;
    margin-bottom: 30px;
  }
  .header__leftnav__content,
  .icons-container {
    text-align: center;
    justify-content: center;
  }
  .header__rightnav {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
