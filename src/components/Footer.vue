<script setup>
import heartIcon from '@/assets/svg/heart.svg'
</script>

<template>
  <div class="footer">
    <small>Designed with <heartIcon class="svg red" /> by <a>Ijaz Ul Haq</a></small>
  </div>
</template>

<style scoped>
.footer {
  background-color: var(--footer);
  color: #a1aab4;
  display: flex;
  justify-content: center;
  padding: 12px;
}
small {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
a {
  color: #fff;
}
</style>
