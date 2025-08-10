<template>
  <div class="bg-gradient-to-br from-hima-black via-gray-900 to-hima-black min-h-screen py-20 px-4">
    <div
      class="container mx-auto max-w-7xl"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    >
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div class="inline-block">
          <h1 class="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-hima-red mb-4">
            Tentang HIMA RPL
          </h1>
          <div class="h-1 bg-gradient-to-r from-transparent via-hima-red to-transparent rounded-full"></div>
        </div>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed">
          Inovasi Tanpa Batas, Menciptakan Masa Depan Teknologi
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-2 gap-16 items-start mb-20">
        <!-- Image Section -->
        <div v-motion-slide-visible-once-left class="relative">
          <div class="absolute -inset-4 bg-gradient-to-r from-hima-red to-purple-600 rounded-2xl blur opacity-20"></div>
          <div class="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
            <img
              src="/HIMA-ABOUT.jpg"
              alt="Tim HIMA RPL"
              class="rounded-xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>

        <!-- Vision & Mission Section -->
        <div v-motion-slide-visible-once-right class="space-y-10">
          <!-- Vision Card -->
          <div class="group">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-r from-hima-red to-red-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-white">Visi Kami</h2>
            </div>
            
            <div class="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-300">
              <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-hima-red via-red-500 to-purple-600 rounded-t-2xl"></div>
              <p class="text-gray-200 leading-relaxed text-lg">
                Terwujudnya Himpunan Mahasiswa Rekayasa Perangkat Lunak sebagai wadah pengembangan pengetahuan dan kompetensi mahasiswa Program Studi Rekayasa Perangkat Lunak Universitas Bina Sarana Informatika.
              </p>
            </div>
          </div>

          <!-- Mission Card -->
          <div class="group">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-r from-hima-red to-red-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-white">Misi Kami</h2>
            </div>

            <div class="space-y-6">
              <div class="flex items-start gap-6 group/item">
                <div class="relative flex-shrink-0">
                  <div class="w-12 h-12 bg-gradient-to-br from-hima-red to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                    <span class="text-white font-bold text-lg">01</span>
                  </div>
                </div>
                <div class="bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex-1 group-hover/item:bg-white/10 transition-all duration-300">
                  <p class="text-gray-200 leading-relaxed">
                    Mewujudkan organisasi yang mampu menjalankan fungsi dan perannya sebagai wadah keilmuan bagi mahasiswa Rekayasa Perangkat Lunak Universitas Bina Sarana Informatika.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-6 group/item">
                <div class="relative flex-shrink-0">
                  <div class="w-12 h-12 bg-gradient-to-br from-hima-red to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                    <span class="text-white font-bold text-lg">02</span>
                  </div>
                </div>
                <div class="bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex-1 group-hover/item:bg-white/10 transition-all duration-300">
                  <p class="text-gray-200 leading-relaxed">
                    Mewujudkan himpunan mahasiswa Rekayasa Perangkat Lunak yang ilmiah, kreatif, dan dinamis.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-6 group/item">
                <div class="relative flex-shrink-0">
                  <div class="w-12 h-12 bg-gradient-to-br from-hima-red to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                    <span class="text-white font-bold text-lg">03</span>
                  </div>
                </div>
                <div class="bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex-1 group-hover/item:bg-white/10 transition-all duration-300">
                  <p class="text-gray-200 leading-relaxed">
                    Mewujudkan kegiatan-kegiatan yang mampu meningkatkan aspek keilmuan bagi mahasiswa Rekayasa Perangkat Lunak Universitas Bina Sarana Informatika.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Statistics Section -->
      <!-- PERBAIKAN DI SINI: Mengubah grid menjadi 3 kolom dan menghapus div yang kosong -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20">
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="text-center group"
        >
          <div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group-hover:border-hima-red/50 transition-all duration-300">
            <div class="text-3xl font-bold text-hima-red mb-2">25</div>
            <div class="text-gray-300 text-sm">Mahasiswa Aktif</div>
          </div>
        </div>
        
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 400 } }"
          class="text-center group"
        >
          <div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group-hover:border-hima-red/50 transition-all duration-300">
            <div class="text-3xl font-bold text-hima-red mb-2">4</div>
            <div class="text-gray-300 text-sm">Kegiatan per Tahun</div>
          </div>
        </div>
        
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 600 } }"
          class="text-center group"
        >
          <div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group-hover:border-hima-red/50 transition-all duration-300">
            <div class="text-3xl font-bold text-hima-red mb-2">5+</div>
            <div class="text-gray-300 text-sm">Tahun Berdiri</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Background Decorations -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-10 w-72 h-72 bg-hima-red/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-hima-red/5 to-purple-600/5 rounded-full blur-3xl"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    // Add any additional JavaScript logic here if needed
  }
};
</script>

<style scoped>
/* Additional custom styles if needed */
.container {
  position: relative;
  z-index: 10;
}

/* Smooth scrolling animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.group:hover .floating {
  animation: float 2s ease-in-out infinite;
}
</style>
