<template>
  <div class="bg-hima-black py-20 px-4">
    <div class="container mx-auto">
      <h1 class="text-4xl md:text-5xl font-extrabold text-center text-white mb-12">
        Acara & Kegiatan
      </h1>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Loop melalui data acara dan tampilkan sebagai kartu -->
        <EventCard
          v-for="event in events"
          :key="event.id"
          :event="event"
        />
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from '../components/EventCard.vue';

export default {
  name: 'Events',
  components: {
    EventCard,
  },
  data() {
    return {
      // Ini adalah data dummy. Nantinya bisa diambil dari server/backend.
      events: [
        {
          id: 1,
          title: 'Webinar: Modern Frontend with Vue 3',
          date: '25 OKTOBER 2025',
          description: 'Selami dunia pengembangan frontend modern dengan Vue 3 dan Composition API bersama para ahli industri.',
          image: 'https://placehold.co/600x400/e53e3e/ffffff?text=Webinar+Vue+3',
        },
        {
          id: 2,
          title: 'Workshop: Intro to Docker & CI/CD',
          date: '15 NOVEMBER 2025',
          description: 'Pelajari dasar-dasar Docker dan bagaimana mengotomatisasi proses deployment dengan Continuous Integration.',
          image: 'https://placehold.co/600x400/1a202c/ffffff?text=Workshop+Docker',
        },
        {
          id: 3,
          title: 'Lomba Coding Tahunan HIMA RPL',
          date: '10 DESEMBER 2025',
          description: 'Asah kemampuan problem solving dan algoritmamu dalam kompetisi coding tahunan paling bergengsi.',
          image: 'https://placehold.co/600x400/e53e3e/ffffff?text=Lomba+Coding',
        },
      ],
    };
  },
};
</script>
