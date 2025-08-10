<template>
  <!-- Memberi warna dasar untuk seluruh halaman -->
  <div class="font-inter bg-hima-navy">
    <NavBar />
    <!-- Mendorong konten utama ke bawah setinggi NavBar -->
    <main class="pt-16 md:pt-20">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: { NavBar, Footer },
};
</script>
