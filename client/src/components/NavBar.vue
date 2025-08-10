<template>
  <nav class="bg-gradient-to-r from-hima-black/95 to-slate-900/95 backdrop-blur-xl text-white fixed w-full top-0 z-50 shadow-2xl border-b border-white/10 transition-all duration-300">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="flex justify-between items-center py-3">
        
        <!-- Logo Section - Enhanced -->
        <router-link 
          to="/" 
          class="text-xl md:text-2xl font-bold flex items-center shrink-0 group transition-all duration-300 hover:scale-105"
        >
          <div class="relative">
            <img 
              src="/mascot.png" 
              alt="Maskot HIMA" 
              class="h-10 w-10 mr-3 rounded-lg shadow-lg transition-transform duration-300 group-hover:rotate-6 object-cover" 
            />
            <div class="absolute -top-1 -right-1 w-3 h-3 bg-hima-red rounded-full animate-pulse"></div>
          </div>
          <div class="flex flex-col">
            <span class="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">HIMA RPL</span>
            <span class="text-xs text-blue-200/70 font-normal hidden sm:block">Himpunan Mahasiswa</span>
          </div>
        </router-link>

        <!-- Desktop Menu - Enhanced -->
        <div class="hidden lg:flex items-center space-x-1">
          <router-link 
            to="/" 
            class="nav-link group relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl hover:bg-white/10"
          >
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Beranda</span>
            </div>
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-hima-red to-red-400 transition-all duration-300 group-hover:w-full rounded-full"></div>
          </router-link>

          <router-link 
            to="/about" 
            class="nav-link group relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl hover:bg-white/10"
          >
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Tentang</span>
            </div>
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-hima-red to-red-400 transition-all duration-300 group-hover:w-full rounded-full"></div>
          </router-link>

          <router-link 
            to="/events" 
            class="nav-link group relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl hover:bg-white/10"
          >
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Acara</span>
            </div>
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-hima-red to-red-400 transition-all duration-300 group-hover:w-full rounded-full"></div>
          </router-link>

          <router-link 
            to="/news" 
            class="nav-link group relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl hover:bg-white/10"
          >
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-7 9l3-3 3 3m-3-3v12" />
              </svg>
              <span>Berita</span>
            </div>
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-hima-red to-red-400 transition-all duration-300 group-hover:w-full rounded-full"></div>
          </router-link>

          <router-link 
            to="/quiz" 
            class="nav-link group relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl hover:bg-white/10"
          >
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Quiz</span>
            </div>
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-hima-red to-red-400 transition-all duration-300 group-hover:w-full rounded-full"></div>
          </router-link>
        </div>

        <!-- Action Buttons - Redesigned & Consistent -->
        <div class="hidden lg:flex items-center space-x-3">
          <!-- Registration Button - Primary -->
          <router-link 
            to="/register" 
            class="group relative inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-hima-red to-red-600 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-red-600 hover:to-red-700"
          >
            <svg class="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            <span>Pendaftaran</span>
            <div class="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </router-link>

          <!-- Admin Button - Secondary -->
          <router-link 
            to="/admin" 
            class="group relative inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-slate-700 to-slate-800 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-slate-600 hover:to-slate-700 border border-slate-600/50"
          >
            <svg class="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Admin</span>
            <div class="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </router-link>
        </div>

        <!-- Mobile Menu Button - Enhanced -->
        <div class="lg:hidden">
          <button 
            @click="isOpen = !isOpen" 
            class="relative p-2 rounded-xl bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <div class="w-6 h-6 relative">
              <span 
                :class="isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'"
                class="absolute block w-6 h-0.5 bg-white rounded-full transition-all duration-300 transform"
              ></span>
              <span 
                :class="isOpen ? 'opacity-0' : 'opacity-100'"
                class="absolute block w-6 h-0.5 bg-white rounded-full transition-all duration-300 transform"
              ></span>
              <span 
                :class="isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'"
                class="absolute block w-6 h-0.5 bg-white rounded-full transition-all duration-300 transform"
              ></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Dropdown - Enhanced -->
      <div 
        :class="isOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'"
        class="lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-gradient-to-b from-transparent to-black/20 backdrop-blur-sm"
      >
        <div class="border-t border-white/10 pt-4 space-y-2">
          <!-- Navigation Links -->
          <router-link 
            to="/" 
            @click="isOpen = false" 
            class="flex items-center space-x-3 py-3 px-4 text-sm hover:bg-white/10 rounded-xl transition-all duration-300 group"
          >
            <svg class="w-5 h-5 text-blue-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Beranda</span>
          </router-link>

          <router-link 
            to="/about" 
            @click="isOpen = false" 
            class="flex items-center space-x-3 py-3 px-4 text-sm hover:bg-white/10 rounded-xl transition-all duration-300 group"
          >
            <svg class="w-5 h-5 text-blue-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Tentang</span>
          </router-link>

          <router-link 
            to="/events" 
            @click="isOpen = false" 
            class="flex items-center space-x-3 py-3 px-4 text-sm hover:bg-white/10 rounded-xl transition-all duration-300 group"
          >
            <svg class="w-5 h-5 text-blue-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Acara</span>
          </router-link>

          <router-link 
            to="/news" 
            @click="isOpen = false" 
            class="flex items-center space-x-3 py-3 px-4 text-sm hover:bg-white/10 rounded-xl transition-all duration-300 group"
          >
            <svg class="w-5 h-5 text-blue-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-7 9l3-3 3 3m-3-3v12" />
            </svg>
            <span>Berita</span>
          </router-link>

          <router-link 
            to="/quiz" 
            @click="isOpen = false" 
            class="flex items-center space-x-3 py-3 px-4 text-sm hover:bg-white/10 rounded-xl transition-all duration-300 group"
          >
            <svg class="w-5 h-5 text-blue-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Quiz</span>
          </router-link>

          <!-- Mobile Action Buttons -->
          <div class="border-t border-white/20 pt-4 mt-4 space-y-3">
            <router-link 
              to="/register" 
              @click="isOpen = false" 
              class="flex items-center justify-center space-x-2 w-full py-3 px-4 bg-gradient-to-r from-hima-red to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              <span>Pendaftaran</span>
            </router-link>

            <router-link 
              to="/admin" 
              @click="isOpen = false" 
              class="flex items-center justify-center space-x-2 w-full py-3 px-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-slate-600/50"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Admin Area</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false;
      }
    });
  }
};
</script>

<style scoped>
.nav-link.router-link-active {
  @apply text-blue-300 bg-white/10;
}

.nav-link.router-link-active .absolute {
  @apply w-full;
}

/* Custom scrollbar for mobile menu */
.lg\:hidden::-webkit-scrollbar {
  width: 2px;
}

.lg\:hidden::-webkit-scrollbar-track {
  @apply bg-transparent;
}

.lg\:hidden::-webkit-scrollbar-thumb {
  @apply bg-white/20 rounded-full;
}
</style>