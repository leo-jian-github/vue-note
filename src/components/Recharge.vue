<template>
  <!-- 主頁內容 -->
  <section class="main-content">
    <h1>歡迎來到我們的網站</h1>
    <p>儲值</p>
  </section>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
/* 主內容區 */
.main-content {
  text-align: center;
  padding: 50px 20px;
}

.main-content h1 {
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
}

.main-content p {
  font-size: 18px;
  color: #555;
  line-height: 1.6;
}
</style>
