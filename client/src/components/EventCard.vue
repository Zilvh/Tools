<template>
  <article
    v-motion
    class="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transform transition-all duration-700 hover:-translate-y-4 hover:scale-[1.02] cursor-pointer"
    :initial="{ opacity: 0, y: 60, scale: 0.9 }"
    :visible-once="{ opacity: 1, y: 0, scale: 1 }"
    :transition="{ duration: 700, ease: 'easeOutCubic' }"
    @click="handleEventClick"
  >
    <!-- Image Container with Overlay -->
    <div class="relative overflow-hidden">
      <!-- Background Image -->
      <div class="relative h-56 sm:h-64">
        <img
          :src="event.image || defaultEventImage"
          :alt="`Gambar untuk ${event.title}`"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          @error="handleImageError"
        />
        
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        <!-- Status Badge -->
        <div class="absolute top-4 left-4">
          <span :class="getStatusBadgeClass()" class="inline-flex items-center px-3 py-1.5 text-xs font-bold rounded-full backdrop-blur-sm shadow-lg">
            <div :class="getStatusDotClass()" class="w-2 h-2 rounded-full mr-2 animate-pulse"></div>
            {{ getEventStatus() }}
          </span>
        </div>

        <!-- Date Badge -->
        <div class="absolute top-4 right-4 bg-hima-red/90 backdrop-blur-sm text-white px-4 py-2 rounded-2xl shadow-xl border border-red-400/30">
          <div class="text-center">
            <div class="text-2xl font-bold">{{ getDay() }}</div>
            <div class="text-xs font-medium opacity-90">{{ getMonth() }}</div>
          </div>
        </div>

        <!-- Floating Action Icons -->
        <div class="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <button class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-hima-red/80 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-500/80 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="relative p-6 sm:p-8">
      <!-- Background Decorations -->
      <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-hima-red/10 to-transparent rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <!-- Category & Time Info -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-3">
          <!-- Category Badge -->
          <span class="inline-flex items-center px-3 py-1 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold rounded-full backdrop-blur-sm">
            <svg class="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {{ event.category || 'Acara' }}
          </span>
        </div>

        <!-- Time Info -->
        <div class="flex items-center space-x-2 text-slate-400 text-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{{ event.time || '19:00 WIB' }}</span>
        </div>
      </div>

      <!-- Title -->
      <h3 class="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-blue-100 transition-colors duration-300 line-clamp-2">
        {{ event.title }}
      </h3>

      <!-- Description -->
      <p class="text-slate-300 leading-relaxed mb-6 line-clamp-3 group-hover:text-slate-200 transition-colors duration-300">
        {{ event.description }}
      </p>

      <!-- Event Details -->
      <div class="space-y-3 mb-6">
        <!-- Location -->
        <div v-if="event.location" class="flex items-center space-x-3 text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
          <div class="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center group-hover:bg-hima-red/20 transition-all duration-300">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span class="text-sm font-medium">{{ event.location }}</span>
        </div>

        <!-- Participants -->
        <div class="flex items-center space-x-3 text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
          <div class="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <span class="text-sm font-medium">{{ getParticipantText() }}</span>
        </div>
      </div>

      <!-- Footer Section -->
      <div class="flex items-center justify-between pt-4 border-t border-white/10">
        <!-- Organizer Info -->
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-to-br from-hima-red to-red-600 rounded-xl flex items-center justify-center shadow-lg">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div class="text-sm">
            <p class="text-slate-300 font-medium">{{ event.organizer || 'HIMA RPL' }}</p>
            <p class="text-slate-500 text-xs">Penyelenggara</p>
          </div>
        </div>

        <!-- Action Button -->
        <button
          @click.stop="handleDetailClick"
          class="group/btn relative inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-hima-red to-red-600 hover:from-red-600 hover:to-red-700 text-white text-sm font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
        >
          <!-- Button shimmer effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover/btn:opacity-100 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-all duration-700"></div>
          
          <span class="relative z-10">Lihat Detail</span>
          <svg class="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Hover Border Effect -->
    <div class="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-hima-red/40 transition-all duration-500 pointer-events-none"></div>

    <!-- Loading Shimmer Effect -->
    <div v-if="imageLoading" class="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 animate-pulse rounded-3xl"></div>
  </article>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true,
      validator(value) {
        return value && typeof value.title === 'string' && typeof value.description === 'string'
      }
    },
  },
  
  data() {
    return {
      imageLoading: false,
      defaultEventImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    }
  },

  methods: {
    formatDate(dateString) {
      if (!dateString) return null
      
      try {
        return new Date(dateString)
      } catch (error) {
        return null
      }
    },

    getDay() {
      const date = this.formatDate(this.event.date)
      return date ? date.getDate().toString().padStart(2, '0') : '01'
    },

    getMonth() {
      const date = this.formatDate(this.event.date)
      if (!date) return 'JAN'
      
      const months = ['JAN', 'FEB', 'MAR', 'APR', 'MEI', 'JUN', 'JUL', 'AGS', 'SEP', 'OKT', 'NOV', 'DES']
      return months[date.getMonth()]
    },

    getEventStatus() {
      const now = new Date()
      const eventDate = this.formatDate(this.event.date)
      
      if (!eventDate) return 'Segera Hadir'
      
      const diffTime = eventDate - now
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      
      if (diffDays < 0) return 'Selesai'
      if (diffDays === 0) return 'Hari Ini'
      if (diffDays <= 7) return 'Minggu Ini'
      if (diffDays <= 30) return 'Bulan Ini'
      return 'Segera Hadir'
    },

    getStatusBadgeClass() {
      const status = this.getEventStatus()
      const baseClass = "inline-flex items-center px-3 py-1.5 text-xs font-bold rounded-full backdrop-blur-sm shadow-lg"
      
      switch (status) {
        case 'Hari Ini':
          return `${baseClass} bg-green-500/20 border border-green-400/40 text-green-300`
        case 'Minggu Ini':
          return `${baseClass} bg-yellow-500/20 border border-yellow-400/40 text-yellow-300`
        case 'Selesai':
          return `${baseClass} bg-gray-500/20 border border-gray-400/40 text-gray-300`
        default:
          return `${baseClass} bg-blue-500/20 border border-blue-400/40 text-blue-300`
      }
    },

    getStatusDotClass() {
      const status = this.getEventStatus()
      
      switch (status) {
        case 'Hari Ini':
          return 'bg-green-400'
        case 'Minggu Ini':
          return 'bg-yellow-400'
        case 'Selesai':
          return 'bg-gray-400'
        default:
          return 'bg-blue-400'
      }
    },

    getParticipantText() {
      const participants = this.event.participants || this.event.maxParticipants
      if (!participants) return 'Terbuka untuk semua'
      
      if (typeof participants === 'number') {
        return `Maks. ${participants} peserta`
      }
      
      return `${participants} peserta`
    },

    handleImageError(event) {
      event.target.src = this.defaultEventImage
    },

    handleEventClick() {
      this.$emit('event-click', this.event)
    },

    handleDetailClick() {
      this.$emit('detail-click', this.event)
      
      // Optional: Add analytics tracking
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          event_category: 'Event',
          event_label: this.event.title,
          value: 1
        })
      }
    }
  },
  
  emits: ['event-click', 'detail-click']
};
</script>

<style scoped>
/* Line clamp utilities for text truncation */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Custom shadow for enhanced depth */
.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1);
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

/* Enhanced hover animations */
.group:hover .animate-pulse {
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Custom animation timing */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Image hover scale effect */
.group:hover img {
  transform: scale(1.1);
  filter: brightness(1.1);
}

/* Floating action buttons animation */
.group:hover .absolute.bottom-4.right-4 {
  transform: translateY(0);
  opacity: 1;
}

.group:hover .absolute.bottom-4.right-4 > button:nth-child(1) {
  transition-delay: 0.1s;
}

.group:hover .absolute.bottom-4.right-4 > button:nth-child(2) {
  transition-delay: 0.2s;
}
</style>