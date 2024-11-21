<template>
  <div class="ad-banner">
    <img :src="bannerImage" alt="Advertisement" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerImage: "https://saprod-club-01-image.topgame10.com/22ae88b16b0b44cbb0540e4e392056b5.jpg",
    };
  },
};
</script>

<style scoped>
.ad-banner {
  width: 100%;
  height: auto;
  text-align: center;
  margin: 10px 0;
}
.ad-banner img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}
</style>

 <!-- https://saprod-club-01-image.topgame10.com/a751e29188d1428a95bceeb762607bcb.jpg -->
 <!-- https://saprod-club-01-image.topgame10.com/22ae88b16b0b44cbb0540e4e392056b5.jpg -->