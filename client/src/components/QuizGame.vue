<template>
  <section
    id="quiz"
    v-motion
    class="py-16 min-h-screen bg-gradient-to-b from-hima-navy to-hima-black text-white flex items-center justify-center"
    :initial="{ opacity: 0 }"
    :enter="{ opacity: 1 }"
    :transition="{ duration: 1000 }"
  >
    <div class="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8">
      <h2 class="text-3xl font-bold mb-6 text-center">🎯 Quiz Interaktif HIMA RPL</h2>

      <!-- Progress Bar -->
      <div v-if="!showResult && shuffledQuestions.length > 0" class="mb-6">
        <div class="w-full bg-white/20 rounded-full h-3 overflow-hidden">
          <div
            class="bg-hima-red h-3 transition-all duration-500"
            :style="{ width: ((currentQuestion + 1) / shuffledQuestions.length) * 100 + '%' }"
          ></div>
        </div>
        <p class="text-sm mt-2 text-gray-300">
          Pertanyaan {{ currentQuestion + 1 }} dari {{ shuffledQuestions.length }}
        </p>
      </div>

      <!-- Quiz -->
      <div v-if="!showResult && shuffledQuestions[currentQuestion]" class="text-center">
        <input
          v-model="userName"
          type="text"
          placeholder="Masukkan Nama Anda"
          class="mb-4 p-3 w-full rounded-lg border border-gray-400 focus:border-hima-red focus:ring-2 focus:ring-hima-red/50 outline-none text-black"
          required
        />

        <!-- Maskot -->
        <div class="flex justify-center mb-4">
          <div
            class="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center shadow-lg"
          >
            <img
              src="/mascot.png"
              alt="Maskot HIMA"
              class="h-20"
              v-motion
              :initial="{ y: 0 }"
              :enter="{ y: [0, -8, 0] }"
              :transition="{ repeat: Infinity, duration: 2000 }"
            />
          </div>
        </div>

        <!-- Pertanyaan: Ditambahkan v-if untuk keamanan -->
        <h3 v-if="shuffledQuestions[currentQuestion]" class="text-xl font-semibold mb-6">
          {{ shuffledQuestions[currentQuestion].question }}
        </h3>

        <!-- Jawaban: Ditambahkan v-if untuk keamanan -->
        <div v-if="shuffledQuestions[currentQuestion]" class="grid grid-cols-1 gap-4">
          <button
            v-for="(option, index) in shuffledQuestions[currentQuestion].options"
            :key="index"
            @click="handleAnswer(index)"
            :disabled="isAnswered"
            class="bg-gradient-to-r from-hima-red to-red-600 hover:from-red-600 hover:to-hima-red text-white py-3 px-6 rounded-lg shadow-md transform transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ option }}
          </button>
        </div>
      </div>

      <!-- Hasil -->
      <div v-else class="text-center">
        <img src="/mascot.png" alt="Maskot HIMA" class="h-32 mx-auto mb-4" />
        <h3 class="text-2xl font-bold mb-4">🎉 Skor Anda: {{ score }}/{{ shuffledQuestions.length }}</h3>
        <p class="mb-6">Selamat, {{ userName || 'Peserta' }}! Skor Anda telah disimpan. 🎁</p>
        <button
          @click="resetQuiz"
          class="bg-gradient-to-r from-hima-red to-red-600 hover:from-red-600 hover:to-hima-red text-white py-3 px-6 rounded-lg shadow-md transform transition-all hover:scale-105 active:scale-95"
        >
          Main Lagi
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

// Daftar pertanyaan ditaruh di luar untuk performa yang lebih baik
const questions = [
  { id: 1, question: 'Apa kepanjangan dari RPL?', options: ['Rekayasa Perangkat Lunak', 'Rekayasa Perangkat Keras', 'Riset Pengembangan Lanjut'], correct: 0 },
  { id: 2, question: 'Tahun berdiri HIMA RPL?', options: ['2020', '2021', '2022'], correct: 1 },
  { id: 3, question: 'Bahasa pemrograman utama RPL?', options: ['Python', 'C++', 'JavaScript'], correct: 0 },
  { id: 4, question: 'Framework populer untuk web?', options: ['Vue', 'Django', 'Flutter'], correct: 0 },
  { id: 5, question: 'Apa itu Agile?', options: ['Metode pengembangan cepat', 'Hardware design', 'Database management'], correct: 0 },
  { id: 6, question: 'Database NoSQL populer?', options: ['MySQL', 'MongoDB', 'PostgreSQL'], correct: 1 },
  { id: 7, question: 'Apa itu DevOps?', options: ['Game development', 'CI/CD practices', 'UI design'], correct: 1 },
  { id: 8, question: 'Frontend library modern?', options: ['jQuery', 'Vue.js', 'Bootstrap'], correct: 1 },
  { id: 9, question: 'Cloud platform terkenal?', options: ['AWS', 'Photoshop', 'Excel'], correct: 0 },
  { id: 10, question: 'Apa itu API?', options: ['Application Programming Interface', 'Advanced Programming Instruction', 'Automated Process Integration'], correct: 0 },
];

export default {
  name: 'QuizGame',
  data() {
    return {
      shuffledQuestions: this.shuffleArray([...questions]),
      currentQuestion: 0,
      score: 0,
      showResult: false,
      userName: '',
      isAnswered: false, // State untuk mencegah klik ganda
    };
  },
  methods: {
    shuffleArray(array) {
      return array.sort(() => Math.random() - 0.5);
    },
    async handleAnswer(selectedIndex) {
      if (this.isAnswered) return; // Mencegah jawaban ganda
      this.isAnswered = true;

      // Cek jawaban benar
      const isCorrect = this.shuffledQuestions[this.currentQuestion].correct === selectedIndex;
      if (isCorrect) {
        this.score += 1;
      }

      // Cek apakah ini pertanyaan terakhir
      const isLastQuestion = this.currentQuestion + 1 >= this.shuffledQuestions.length;

      if (isLastQuestion) {
        // Logika untuk pertanyaan terakhir
        try {
          // Gunakan environment variable untuk URL API
          const apiUrl = `${import.meta.env.VITE_API_URL}/api/quiz`;
          await axios.post(apiUrl, { name: this.userName || 'Anonymous', score: this.score });
        } catch (error) {
          console.error("Gagal mengirim skor:", error);
          // Opsi: Tampilkan pesan error ke pengguna jika API gagal
        }
        // Tunggu sebentar sebelum menampilkan hasil
        setTimeout(() => {
          this.showResult = true;
        }, 1000);
      } else {
        // Logika untuk lanjut ke pertanyaan berikutnya
        setTimeout(() => {
          this.currentQuestion += 1;
          this.isAnswered = false; // Izinkan menjawab lagi untuk pertanyaan baru
        }, 1000); // Beri jeda 1 detik
      }
    },
    resetQuiz() {
      this.shuffledQuestions = this.shuffleArray([...questions]);
      this.currentQuestion = 0;
      this.score = 0;
      this.showResult = false;
      this.userName = '';
      this.isAnswered = false;
    },
  },
};
</script>
