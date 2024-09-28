<script setup>
import heartIcon from '@/assets/svg/heart.svg'
</script>

<template>
  <div class="footer">
    <small>
      {{ $t('footer.credit.created') }} <heartIcon class="svg red" /> {{ $t('footer.credit.by') }}
      <a :href="$t('github.url')" target="_blank">{{ $t('name') }}</a>
    </small>
    <Locale class="locale" />
  </div>
</template>

<style scoped>
.footer {
  background-color: var(--footer);
  color: #a1aab4;
  display: flex;
  justify-content: center;
  padding: 12px;
  position: relative;
}
small {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
a {
  color: #fff;
  text-decoration: none;
}
.locale {
  position: absolute;
  bottom: 10px;
  left: 10px;
}
</style>
