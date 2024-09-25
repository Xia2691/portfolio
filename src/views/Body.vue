<script setup>
import locationIcon from '@/assets/svg/location.svg'
import messageIcon from '@/assets/svg/message.svg'
import linkIcon from '@/assets/svg/link.svg'
import externalLink from '@/assets/svg/el.svg'
</script>

<template>
  <div class="base-container">
    <div class="left">
      <Card title="About Me">
        Hi, I'm Ijaz Ul Haq from Dera Ismail Khan, Pakistan. I have a BSc in Computer Science from Qurtuba University of
        Science and Information Technology, with a focus on Web App Development. I'm an online freelancer who loves
        creating efficient and innovative web applications. In my spare time, I enjoy playing video games and constantly
        learning new things. My future goal is to build a digital multivendor gaming marketplace. I'm looking forward to
        connecting and working on projects that push the limits of technology.
      </Card>
    </div>
    <div class="right">
      <Card>
        <div class="info">
          <p><locationIcon />Dera ismail khan , PK</p>
          <a href="mailto:ejazulhaq8281@gmail.com"><messageIcon />ejazulhaq8281@gmail.com</a>
          <a href="https://github.com/EjazEkay" target="_blank"><linkIcon />https://github.com/EjazEkay</a>
        </div>
      </Card>
      <Card title="Skills">
        I focus on Web App Development and have a strong background in Computer Science. I create user-friendly web
        solutions with skills in both front-end and back-end development.
        <div class="skills">
          <a href="https://github.com/EjazEkay"><externalLink />More on GitHub</a>
        </div>
      </Card>
      <Card title="Education">
      </Card>
      <Card title="Languages">
      </Card>
      <Card title="Favourite coding music">
      </Card>
    </div>
  </div>
</template>

<style scoped>
.base-container {
  margin-top: 48px;
  margin-bottom: 76px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 768px;
}

.left {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 66.66666667%;
  width: 100%;
}
.right {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 33.33333333%;
  width: 100%;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info a,
.info p {
  display: flex;
  gap: 12px;
  width: fit-content;
}

.skills {
  display: flex;
  flex-direction: column;
}

.skills a {
  gap: 6px;
  line-height: 16px;
  display: flex;
}

@media (min-width: 960px) {
  .base-container {
    flex-direction: row;
    max-width: 1360px;
  }
  .left {
    width: 66.66666667%;
  }
  .right {
    width: 33.33333333%;
  }
}
</style>
