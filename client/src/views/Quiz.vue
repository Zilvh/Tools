<template>
  <div>
    <!-- Komponen QuizGame sekarang punya rumah sendiri di sini -->
    <QuizGame />
  </div>
</template>

<script>
// Kita panggil komponen QuizGame yang sudah kita buat
import QuizGame from '../components/QuizGame.vue';

export default {
  name: 'Quiz',
  components: { QuizGame },
};
</script>
