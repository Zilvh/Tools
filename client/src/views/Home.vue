<template>
  <div>
    <!-- Halaman utama sekarang hanya berisi Hero Section -->
    <Hero />
    <!-- Kita bisa tambahkan section lain di sini nanti, misal "Tentang Kami" atau "Acara Terbaru" -->
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';

export default {
  name: 'Home',
  components: { Hero },
};
</script>
