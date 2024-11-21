<template>
  <!-- 主頁內容 -->
  <div>
    <!-- Banner 區塊，輪播顯示多張圖片 -->
    <section class="home-banner">
      <div class="home-banner-container">
        <div class="home-banner-images">
          <img
            src="https://imgproxy.lang.live/1/auto/600/0/sm/0/aHR0cHM6Ly9hc3NldHMubGFuZy5saXZlL2Jhbm5lci8xMWViZTY2NzI2OWFlZWQ5OTk0NWZlN2ZiYzJhNjJiMC5wbmc=">
          <img
            src="https://imgproxy.lang.live/1/auto/600/0/sm/0/aHR0cHM6Ly9hc3NldHMubGFuZy5saXZlL2Jhbm5lci8zYjEyNDg4OGU3OWQ5YTdiMWQyNjYzM2U2OTc2OGYyNi5wbmc=">
          <img
            src="https://imgproxy.lang.live/1/auto/600/0/sm/0/aHR0cHM6Ly9hc3NldHMubGFuZy5saXZlL2Jhbm5lci82NzdmMDAzMTRjZDVkNWM5NzRhZWM3MTAxNWJjNjA2MC5wbmc=">
        </div>
      </div>
    </section>

    <!-- 其他主頁內容 -->
    <section class="home-main-content">
      <h1>歡迎來到我們的網站</h1>
      <p>在這裡，你可以享受精彩的直播，參與社群動態，進行儲值等功能。</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  mounted() {
    this.startBanner();
  },
  methods: {
    startBanner() {
      let currentIndex = 0;
      const images = document.querySelectorAll('.home-banner-images img');
      setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        const offset = -currentIndex * 100;  // 移動容器來顯示不同圖片
        document.querySelector('.home-banner-images').style.transform = `translateX(${offset}%)`;
      }, 3000); // 每3秒切換一次
    }
  }
};
</script>

<style scoped>
/* Banner 區塊樣式 */
.home-banner {
  width: 100%;
  height: 205px;
  /* 設置為圖片的高度 */
  overflow: hidden;
  /* 隱藏超出部分 */
  position: relative;
  display: flex;
  justify-content: center;
  /* 水平居中圖片 */
  align-items: center;
  /* 垂直居中圖片 */
}

.home-banner-container {
  width: 600px;
  /* 設置固定寬度 */
  height: 205px;
  /* 設置固定高度 */
  position: relative;
  overflow: hidden;
}

.home-banner-images {
  display: flex;
  transition: transform 1s ease;
  /* 設定過渡效果 */
}

.home-banner-images img {
  width: 600px;
  /* 固定圖片寬度 */
  height: 205px;
  /* 固定圖片高度 */
  object-fit: cover;
  /* 確保圖片保持比例填滿容器 */
}

/* 主內容區 */
.home-main-content {
  text-align: center;
  padding: 50px 20px;
}

.home-main-content h1 {
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
}

.home-main-content p {
  font-size: 18px;
  color: #555;
  line-height: 1.6;
}
</style>