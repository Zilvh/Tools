<template>
  <section
    id="home"
    class="min-h-screen relative overflow-hidden bg-gradient-to-br from-hima-black via-gray-900 to-hima-navy flex flex-col justify-center items-center"
  >
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Floating Code Elements -->
      <div class="absolute top-20 left-10 opacity-10 animate-pulse">
        <svg class="w-16 h-16 text-hima-red" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.5 12.5l3-3 3 3M12 2l10 10-10 10L2 12z"/>
        </svg>
      </div>
      <div class="absolute top-32 right-16 opacity-10 animate-bounce" style="animation-delay: 0.5s;">
        <svg class="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      </div>
      <div class="absolute bottom-32 left-20 opacity-10 animate-pulse" style="animation-delay: 1s;">
        <svg class="w-14 h-14 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      
      <!-- Gradient Orbs -->
      <div class="absolute -top-40 -left-40 w-80 h-80 bg-hima-red/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-hima-red/5 to-blue-600/5 rounded-full blur-3xl"></div>
      
      <!-- Animated Grid Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="grid grid-cols-12 gap-4 h-full">
          <div v-for="i in 48" :key="i" class="border border-white/10 animate-pulse" :style="`animation-delay: ${i * 0.1}s`"></div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div
      class="container mx-auto px-4 text-center relative z-10"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { duration: 800 } }"
    >
      <!-- Mascot with Professional Styling -->
      <div 
        class="relative mb-8"
        v-motion
        :initial="{ scale: 0, rotate: -180 }"
        :enter="{ scale: 1, rotate: 0 }"
        :transition="{ duration: 1200, type: 'spring', stiffness: 80 }"
      >
        <!-- Glowing Ring Around Mascot -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-48 h-48 rounded-full border-4 border-hima-red/30 animate-spin" style="animation-duration: 8s;"></div>
        </div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-40 h-40 rounded-full border-2 border-blue-400/20 animate-spin" style="animation-duration: 6s; animation-direction: reverse;"></div>
        </div>
        
        <!-- Mascot Image with Better Background Handling -->
        <div class="relative">
          <img
            src="/slicode.svg" 
            alt="Maskot HIMA RPL Slicode"
            class="h-36 sm:h-44 md:h-48 mx-auto relative z-10 filter drop-shadow-2xl hover:scale-110 transition-transform duration-500"
            style="
              background: transparent !important;
              mix-blend-mode: normal;
              filter: drop-shadow(0 10px 30px rgba(229, 62, 62, 0.3)) drop-shadow(0 0 20px rgba(229, 62, 62, 0.2));
            "
          />
          <!-- Backup for PNG with black background fix -->
          <!-- Uncomment this if you need to use PNG instead of SVG -->
          <!--
          <img
            src="/mascot.png" 
            alt="Maskot HIMA RPL"
            class="h-36 sm:h-44 md:h-48 mx-auto relative z-10 hover:scale-110 transition-transform duration-500"
            style="
              background: transparent !important;
              mix-blend-mode: screen;
              filter: contrast(1.2) brightness(1.1) drop-shadow(0 10px 30px rgba(229, 62, 62, 0.3));
            "
          />
          -->
        </div>
      </div>

      <!-- Title with Gradient Text -->
      <div class="mb-6">
        <h1
          class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-hima-red leading-tight"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{ duration: 1000, delay: 300 }"
        >
          HIMA RPL
        </h1>
        <div 
          class="h-1 w-32 bg-gradient-to-r from-hima-red to-red-600 mx-auto rounded-full"
          v-motion
          :initial="{ scaleX: 0 }"
          :enter="{ scaleX: 1 }"
          :transition="{ duration: 800, delay: 500 }"
        ></div>
      </div>

      <!-- Subtitle with Typewriter Effect Styling -->
      <h2
        class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-100"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1000, delay: 600 }"
      >
        Selamat Datang di Masa Depan
      </h2>

      <!-- Description -->
      <p
        class="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-gray-300 leading-relaxed"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1000, delay: 800 }"
      >
        Himpunan Mahasiswa Rekayasa Perangkat Lunak
        <span class="block mt-2 text-hima-red font-semibold">Inovasi Tanpa Batas, Menciptakan Teknologi Masa Depan</span>
      </p>

      <!-- CTA Buttons -->
      <div 
        class="flex flex-col sm:flex-row gap-6 justify-center items-center"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1000, delay: 1000 }"
      >
        <!-- Main CTA Button -->
        <router-link
          to="/quiz"
          class="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-hima-red to-red-600 rounded-full hover:from-red-600 hover:to-red-700 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-hima-red/50"
        >
          <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-hima-red to-red-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></span>
          <span class="relative flex items-center gap-3">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Mainkan Quiz
            <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </span>
        </router-link>

        <!-- Secondary CTA Button -->
        <router-link
          to="/about"
          class="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full hover:bg-white/20 hover:border-white/40 transform hover:scale-105"
        >
          <span class="flex items-center gap-3">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Tentang Kami
          </span>
        </router-link>
      </div>

      <!-- Scroll Indicator -->
      <div 
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1 }"
        :transition="{ duration: 1000, delay: 1500 }"
      >
        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </div>

    <!-- Floating Tech Icons -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-1/4 left-8 text-hima-red/20 transform rotate-12 animate-pulse" style="animation-delay: 0.5s;">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l1.09 3.09L16 2.18l-1.091 3.09L18 6.36l-3.09 1.09L16.82 10.5l-3.09-1.09L12 12.54l-1.09-3.09L8 10.36l1.091-3.09L6 6.18l3.09-1.09L7.18 2l3.09 1.09L12 0z"/>
        </svg>
      </div>
      <div class="absolute top-3/4 right-12 text-blue-400/20 transform -rotate-12 animate-pulse" style="animation-delay: 1.5s;">
        <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
      <div class="absolute bottom-1/3 left-1/4 text-purple-400/20 animate-pulse" style="animation-delay: 2s;">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  mounted() {
    // Fix any potential background issues with images
    this.fixImageBackground();
  },
  methods: {
    fixImageBackground() {
      // Additional JavaScript to ensure proper image rendering
      const images = document.querySelectorAll('img[src*="mascot"], img[src*="slicode"]');
      images.forEach(img => {
        img.onload = () => {
          // Force transparent background
          img.style.backgroundColor = 'transparent';
        };
      });
    }
  }
};
</script>

<style scoped>
/* Custom animations */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(229, 62, 62, 0.3); }
  50% { box-shadow: 0 0 40px rgba(229, 62, 62, 0.6); }
}

.floating {
  animation: float 3s ease-in-out infinite;
}

.glowing {
  animation: glow 2s ease-in-out infinite alternate;
}

/* Image background fixes */
img[src*="mascot"], 
img[src*="slicode"] {
  background: transparent !important;
  background-color: transparent !important;
}

/* For PNG images with black background - use screen blend mode */
.mascot-png {
  mix-blend-mode: screen;
  filter: contrast(1.1) brightness(1.05);
}

/* Gradient text fallback */
.gradient-text {
  background: linear-gradient(45deg, #ffffff, #e53e3e);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

/* Enhanced button hover effects */
.cta-button {
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.cta-button:hover::before {
  left: 100%;
}
</style>