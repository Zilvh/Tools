<template>
  <div class="min-h-screen bg-gradient-to-br from-hima-black via-slate-900 to-hima-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <!-- Header Section -->
      <div class="text-center">
        <div class="mx-auto mb-6">
          <div class="relative">
            <img 
              src="/mascot.png" 
              alt="Mascot HIMA RPL" 
              class="h-24 w-24 mx-auto rounded-2xl shadow-2xl object-cover border-4 border-white/20 backdrop-blur-sm transition-transform duration-300 hover:scale-105"
            />
            <div class="absolute -top-1 -right-1 w-4 h-4 bg-hima-red rounded-full animate-pulse shadow-lg"></div>
          </div>
        </div>
        <div class="space-y-2 mb-8">
          <h2 class="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            HIMA RPL
          </h2>
          <p class="text-xl font-semibold text-blue-200">Login Admin </p>
        </div>
      </div>

      <!-- Login Form -->
      <div v-if="!token" class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 relative overflow-hidden">
        <!-- Background decoration -->
        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-hima-red/20 to-transparent rounded-full blur-xl"></div>
        <div class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-xl"></div>
        
        <form @submit.prevent="handleLogin" class="relative space-y-6">
          <!-- Username Field -->
          <div class="space-y-3">
            <label for="username" class="block text-sm font-semibold text-slate-200 flex items-center space-x-2">
              <svg class="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Nama Pengguna</span>
            </label>
            <div class="relative group">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-200 group-focus-within:text-hima-red">
                <svg class="h-5 w-5 text-slate-400 group-focus-within:text-hima-red transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                id="username"
                v-model="loginData.username"
                type="text"
                required
                class="block w-full pl-12 pr-4 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-hima-red focus:border-hima-red transition-all duration-300 backdrop-blur-sm hover:bg-white/15"
                placeholder="Masukkan nama pengguna"
              />
            </div>
          </div>

          <!-- Password Field -->
          <div class="space-y-3">
            <label for="password" class="block text-sm font-semibold text-slate-200 flex items-center space-x-2">
              <svg class="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Kata Sandi</span>
            </label>
            <div class="relative group">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-200 group-focus-within:text-hima-red">
                <svg class="h-5 w-5 text-slate-400 group-focus-within:text-hima-red transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                id="password"
                v-model="loginData.password"
                type="password"
                required
                class="block w-full pl-12 pr-4 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-hima-red focus:border-hima-red transition-all duration-300 backdrop-blur-sm hover:bg-white/15"
                placeholder="Masukkan kata sandi"
              />
            </div>
          </div>

          <!-- Remember Me & Forgot Password -->
          <div class="flex items-center justify-between pt-2">
            <div class="flex items-center group">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 rounded-md border-2 border-white/30 bg-white/10 text-hima-red focus:ring-hima-red focus:ring-2 focus:ring-offset-0 transition-all duration-200"
              />
              <label for="remember-me" class="ml-3 block text-sm text-slate-300 group-hover:text-white transition-colors duration-200 cursor-pointer">
                Ingat saya
              </label>
            </div>
            <div class="text-sm">
              <a href="#" class="text-blue-300 hover:text-hima-red transition-colors duration-300 font-medium">
                Lupa kata sandi?
              </a>
            </div>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isLoading || !loginData.username || !loginData.password"
            class="group relative w-full flex justify-center py-4 px-6 border border-transparent text-sm font-bold rounded-2xl text-white bg-gradient-to-r from-hima-red via-red-600 to-hima-red hover:from-red-600 hover:via-red-700 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hima-red disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl disabled:hover:scale-100"
          >
            <span v-if="!isLoading" class="flex items-center space-x-3">
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
              </svg>
              <span>Masuk ke Dashboard</span>
            </span>
            <span v-else class="flex items-center space-x-3">
              <svg class="animate-spin -ml-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Memverifikasi...</span>
            </span>
            <!-- Shimmer effect -->
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
          </button>
        </form>

        <!-- Error Message -->
        <div v-if="errorMessage" class="mt-6 p-4 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-2xl backdrop-blur-sm">
          <div class="flex items-center space-x-3">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p class="text-red-200 text-sm font-medium">{{ errorMessage }}</p>
          </div>
        </div>
      </div>

      <!-- Dashboard Preview (when logged in) -->
      <div v-else class="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 relative overflow-hidden">
        <!-- Success background decoration -->
        <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-green-500/20 to-transparent rounded-full blur-2xl"></div>
        <div class="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-hima-red/20 to-transparent rounded-full blur-2xl"></div>
        
        <div class="text-center relative">
          <div class="mx-auto h-20 w-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-2xl border-4 border-white/20">
            <svg class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
            Selamat Datang!
          </h3>
          <p class="text-slate-300 mb-8 leading-relaxed max-w-sm mx-auto">
            Anda berhasil masuk ke sistem administrasi HIMA RPL. Dashboard siap digunakan untuk mengelola kegiatan dan konten.
          </p>
          <button
            @click="handleLogout"
            class="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-sm font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-red-500/50"
          >
            <svg class="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
            <span>Keluar dari Sistem</span>
            <!-- Shimmer effect -->
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
          </button>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-center">
        <p class="text-slate-400 text-xs">
          © 2024 Portal Admin. Semua hak dilindungi.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AdminDashboard',
  data() {
    return {
      token: localStorage.getItem('token') || '',
      isLoading: false,
      errorMessage: '',
      loginData: { 
        username: '', 
        password: '' 
      },
      events: [],
      newEvent: { 
        title: '', 
        date: '', 
        description: '', 
        image: '' 
      },
    }
  },
  async created() {
    // Jika sudah ada token, coba fetch events
    if (this.token) {
      try {
        const res = await axios.get('http://localhost:5000/api/events')
        this.events = res.data
      } catch (error) {
        console.error('Error fetching events:', error)
        // Jika token expired, hapus dari localStorage
        if (error.response?.status === 401) {
          this.handleLogout()
        }
      }
    }
  },
  methods: {
    async handleLogin() {
      if (!this.loginData.username || !this.loginData.password) {
        this.errorMessage = 'Mohon isi semua kolom'
        return
      }

      this.isLoading = true
      this.errorMessage = ''

      try {
        // Gunakan endpoint asli kamu
        const res = await axios.post('http://localhost:5000/api/auth/login', this.loginData)
        this.token = res.data.token
        localStorage.setItem('token', this.token)
        
        // Reset form
        this.loginData.username = ''
        this.loginData.password = ''

        // Fetch events setelah login berhasil
        await this.fetchEvents()
        
      } catch (error) {
        console.error('Login error:', error)
        this.errorMessage = 'Login gagal: ' + (error.response?.data?.message || 'Terjadi kesalahan')
      } finally {
        this.isLoading = false
      }
    },

    async fetchEvents() {
      try {
        const res = await axios.get('http://localhost:5000/api/events')
        this.events = res.data
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    },

    async handleAddEvent() {
      try {
        const res = await axios.post('http://localhost:5000/api/events', this.newEvent, {
          headers: { Authorization: `Bearer ${this.token}` },
        })
        this.events.push(res.data)
        this.newEvent = { title: '', date: '', description: '', image: '' }
      } catch (error) {
        alert('Gagal menambah kegiatan: ' + (error.response?.data?.message || 'Terjadi kesalahan'))
      }
    },

    handleLogout() {
      this.token = ''
      localStorage.removeItem('token')
      this.loginData.username = ''
      this.loginData.password = ''
      this.errorMessage = ''
      this.events = []
    }
  }
}
</script>