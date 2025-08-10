<template>
  <article
    v-motion
    class="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]"
    :initial="{ opacity: 0, y: 50, scale: 0.95 }"
    :visible-once="{ opacity: 1, y: 0, scale: 1 }"
    :transition="{ duration: 600, ease: 'easeOutQuart' }"
  >
    <!-- Background Decorations -->
    <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-hima-red/20 to-transparent rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>
    
    <!-- Content Container -->
    <div class="relative p-8">
      <!-- Header Section -->
      <div class="flex items-start justify-between mb-6">
        <div class="flex-1">
          <!-- Category Badge -->
          <div class="inline-flex items-center space-x-2 mb-4">
            <span class="inline-flex items-center px-3 py-1 bg-hima-red/20 border border-hima-red/30 text-hima-red text-xs font-bold rounded-full backdrop-blur-sm">
              <svg class="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-7 9l3-3 3 3m-3-3v12" />
              </svg>
              {{ news.category || 'Berita' }}
            </span>
            <!-- Date Badge -->
            <span class="text-slate-400 text-xs font-medium flex items-center">
              <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {{ formatDate(news.date) }}
            </span>
          </div>

          <!-- Title -->
          <h3 class="text-xl font-bold text-white mb-4 leading-tight group-hover:text-blue-100 transition-colors duration-300">
            {{ news.title }}
          </h3>
        </div>

        <!-- News Icon -->
        <div class="flex-shrink-0 ml-4">
          <div class="w-12 h-12 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl flex items-center justify-center border border-white/10 group-hover:from-hima-red/20 group-hover:to-red-600/20 group-hover:border-hima-red/30 transition-all duration-300">
            <svg class="w-6 h-6 text-slate-300 group-hover:text-hima-red transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-7 9l3-3 3 3m-3-3v12" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="mb-6">
        <p class="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
          {{ news.excerpt }}
        </p>
      </div>

      <!-- Footer Section -->
      <div class="flex items-center justify-between pt-4 border-t border-white/10">
        <!-- Author/Source Info -->
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-gradient-to-br from-hima-red to-red-600 rounded-full flex items-center justify-center shadow-lg">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div class="text-xs">
            <p class="text-slate-300 font-medium">{{ news.author || 'HIMA RPL' }}</p>
            <p class="text-slate-500">{{ news.readTime || '2 min' }} baca</p>
          </div>
        </div>

        <!-- Read More Button -->
        <a
          :href="news.link || '#'"
          class="group/btn relative inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-hima-red to-red-600 hover:from-red-600 hover:to-red-700 text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
          @click.prevent="handleReadMore"
        >
          <!-- Button shimmer effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-all duration-700"></div>
          
          <span class="relative z-10">Baca Selengkapnya</span>
          <svg class="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>

    <!-- Hover Border Effect -->
    <div class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-hima-red/30 transition-all duration-500 pointer-events-none"></div>
  </article>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    news: {
      type: Object,
      required: true,
      validator(value) {
        return value && typeof value.title === 'string' && typeof value.excerpt === 'string'
      }
    },
  },
  methods: {
    formatDate(dateString) {
      if (!dateString) return 'Hari ini'
      
      try {
        const date = new Date(dateString)
        const options = { 
          day: 'numeric', 
          month: 'short', 
          year: 'numeric',
          locale: 'id-ID'
        }
        return date.toLocaleDateString('id-ID', options)
      } catch (error) {
        return 'Tanggal tidak valid'
      }
    },

    handleReadMore(event) {
      // If there's a valid link, allow default behavior
      if (this.news.link && this.news.link !== '#') {
        return
      }
      
      // Otherwise, emit custom event for parent to handle
      event.preventDefault()
      this.$emit('read-more', this.news)
      
      // Optional: Add analytics tracking
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          event_category: 'News',
          event_label: this.news.title,
          value: 1
        })
      }
    }
  },
  
  emits: ['read-more']
};
</script>

<style scoped>
/* Custom animation for smooth entrance */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Ensure proper text truncation for long titles */
h3 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Excerpt truncation */
p {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Smooth backdrop blur animation */
@supports (backdrop-filter: blur()) {
  .backdrop-blur-xl {
    backdrop-filter: blur(24px);
  }
  
  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }
}

/* Fallback for browsers without backdrop-filter */
@supports not (backdrop-filter: blur()) {
  .backdrop-blur-xl {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  .backdrop-blur-sm {
    background-color: rgba(0, 0, 0, 0.6);
  }
}
</style>