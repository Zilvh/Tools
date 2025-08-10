<template>
  <div class="bg-hima-black py-20 px-4">
    <div class="container mx-auto">
      <h1 class="text-4xl md:text-5xl font-extrabold text-center text-white mb-12">
        Berita Terbaru
      </h1>
      <div class="space-y-8 max-w-4xl mx-auto">
        <!-- Loop melalui data berita dan tampilkan sebagai kartu -->
        <NewsCard
          v-for="newsItem in news"
          :key="newsItem.id"
          :news="newsItem"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NewsCard from '../components/NewsCard.vue';

export default {
  name: 'News',
  components: {
    NewsCard,
  },
  data() {
    return {
      // Ini adalah data dummy.
      news: [
        {
          id: 1,
          title: 'HIMA RPL Sukses Gelar Acara Pengabdian Masyarakat ',
          excerpt: 'DUMMY DATA Sebagai bentuk tridharma perguruan tinggi, HIMA RPL mengadakan pelatihan dasar komputer untuk anak-anak sekolah dasar...',
          link: '#',
        },
        {
          id: 2,
          title: 'Tim "Garuda" dari HIMA RPL Raih Juara 2 di Kompetisi UI/UX Nasional',
          excerpt: 'Desain aplikasi mobile inovatif mereka berhasil memukau para juri dan mengalahkan puluhan tim dari universitas lain.',
          link: '#',
        },
        {
          id: 3,
          title: 'Kunjungan Industri ke Kantor Pusat TechCorp',
          excerpt: 'Mahasiswa mendapatkan wawasan langsung tentang budaya kerja dan teknologi yang digunakan di salah satu perusahaan teknologi terbesar di Indonesia.',
          link: '#',
        },
      ],
    };
  },
};
</script>
