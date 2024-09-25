<script setup>
import avatarUrl from '@/assets/avatar/avatar.jpg'
import githubIcon from '@/assets/svg/github.svg'
</script>

<template>
  <div class="header__leftnav">
    <el-avatar :size="180" shape="circle" :src="avatarUrl" alt="Avatar"> </el-avatar>
    <div class="header__leftnav__content">
      <h1 class="font-title name">{{ $t('name') }}</h1>
      <p>{{ $t('header.description') }}</p>
      <div class="icons-container">
        <a href="https://github.com/EjazEkay" target="_blank"
          ><div class="social-icon"><githubIcon /></div
        ></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
.icons-container {
  align-items: center;
  display: flex;
  gap: 8px;
}
@media (max-width: 768px) {
  .header__leftnav {
    flex-direction: column;
    margin-bottom: 30px;
  }
  .header__leftnav__content,
  .icons-container {
    text-align: center;
    justify-content: center;
  }
}
</style>
