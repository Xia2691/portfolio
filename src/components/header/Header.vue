<template>
  <div class="header">
    <div class="base-container">
      <LeftNav />
      <RightNav />
      <Theme class="togglebtn" />
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
@media (max-width: 768px) {
  .base-container {
    flex-direction: column;
  }
}
</style>
