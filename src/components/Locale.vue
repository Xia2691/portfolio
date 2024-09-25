<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const changeLocale = (newLocale) => {
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
}
</script>

<template>
  <el-dropdown trigger="click" size="small" placement="top-end">
    <el-button size="small">{{ locale === 'ur' ? 'اردو' : 'English' }}</el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="changeLocale('en')" :disabled="locale === 'en'">English</el-dropdown-item>
        <el-dropdown-item @click="changeLocale('ur')" :disabled="locale === 'ur'">اردو</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
