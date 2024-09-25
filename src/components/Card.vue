<script setup>
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div class="card">
    <div v-if="title" class="card-title">{{ title }}</div>
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>

<style>
.card {
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  background-color: var(--base);
  border-radius: 5px;
}
.card-title {
  color: var(--title);
  font-family: var(--font-title);
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
}
.card-body {
  display: flex;
  gap: 30px;
  flex-direction: column;
  color: var(--text);
  font-family: var(--font);
  font-weight: 400;
  font-size: 16px;
  line-height: auto;
}
</style>
