<template>
  <header>
    <nav>
      <div class="logo">
        <a href="#">網站名稱</a>
      </div>
      <ul class="nav-links">
        <li><router-link to="/">首頁</router-link></li>
        <li><router-link to="/Live">直播</router-link></li>
        <li><router-link to="/Recharge">儲值</router-link></li>
        <li><router-link to="/Wall">動態牆</router-link></li>
      </ul>
      <div class="auth-buttons">
        <a href="#" class="btn">登入</a>
        <a href="#" class="btn">註冊</a>
      </div>
    </nav>
  </header>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* 重設基本樣式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 背景色與字型 */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
}

/* 導覽列樣式 */
header {
  background-color: #333;
  padding: 10px 0;
  color: white;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  flex-wrap: wrap;
}

nav .logo a {
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
}

nav .nav-links {
  list-style: none;
  display: flex;
  margin-left: auto;
}

nav .nav-links li {
  margin-right: 20px;
}

nav .nav-links li a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s;
}

nav .nav-links li a:hover {
  color: #f5a623;
}

/* 登入與註冊按鈕 */
.auth-buttons a {
  text-decoration: none;
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #f5a623;
  color: #fff;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s;
}

.auth-buttons a:hover {
  background-color: #d48822;
}

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

/* 響應式設計：當螢幕寬度小於 768px 時 */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    text-align: center;
  }

  nav .nav-links {
    margin-top: 10px;
    flex-direction: column;
  }

  nav .nav-links li {
    margin: 10px 0;
  }

  .auth-buttons {
    margin-top: 10px;
  }
}
</style>
