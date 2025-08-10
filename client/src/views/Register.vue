<template>
  <section
    id="register"
    v-motion
    class="py-16 bg-hima-black text-white"
    :initial="{ opacity: 0 }"
    :enter="{ opacity: 1 }"
    :transition="{ duration: 1000 }"
  >
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8">Pendaftaran Anggota HIMA RPL</h2>
      <div v-if="isRegistrationOpen">
        <form @submit.prevent="handleSubmit" class="max-w-lg mx-auto">
          <input
            v-model="formData.name"
            type="text"
            placeholder="Nama Lengkap"
            class="w-full mb-4 p-2 rounded bg-hima-navy text-white"
            required
          />
          <input
            v-model="formData.email"
            type="email"
            placeholder="Email"
            class="w-full mb-4 p-2 rounded bg-hima-navy text-white"
            required
          />
          <input
            v-model="formData.nim"
            type="text"
            placeholder="NIM"
            class="w-full mb-4 p-2 rounded bg-hima-navy text-white"
            required
          />
          <button
            v-motion
            type="submit"
            class="bg-hima-red hover:bg-red-700 text-white py-2 px-4 rounded"
            :hovered="{ scale: 1.05 }"
          >
            Daftar
          </button>
        </form>
      </div>
      <p v-else class="text-center">Pendaftaran dibuka pada Oktober 2025 untuk pelantikan mahasiswa baru.</p>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      formData: { name: '', email: '', nim: '' },
    };
  },
  computed: {
    isRegistrationOpen() {
      const now = new Date();
      const month = now.getMonth(); // 0 = Januari, 9 = Oktober
      const year = now.getFullYear();
      return month === 9 && year === 2025; // Buka Oktober 2025
    },
  },
  methods: {
    async handleSubmit() {
      try {
        await axios.post('http://localhost:5000/api/registrations', this.formData);
        alert('Pendaftaran berhasil! Anda akan menerima konfirmasi email.');
        this.formData = { name: '', email: '', nim: '' };
      } catch (error) {
        alert('Pendaftaran gagal: ' + error.response.data.message);
      }
    },
  },
};
</script>
