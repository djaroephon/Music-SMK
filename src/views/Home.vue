<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow px-6 py-4 flex justify-between items-center gap-4">
      <div class="flex-shrink-0">
        <img
          src="@/assets/images/smkTulisan.png"
          alt="Logo SMK"
          class="h-20 sm:h-24 md:h-28 lg:h-32 w-auto"
        />
      </div>

      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search songs..."
        class="px-3 py-2 rounded-md border w-full max-w-md ml-auto"
      />
    </header>

    <main class="p-6">
      <h2 class="text-xl font-semibold mb-4">The Songs</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <SongCard
          v-for="song in filteredSongs"
          :key="song.id"
          :song="song"
          @click="goToDetail(song.id)"
        />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import bellaCiao from '../assets/images/Album/bellaCiao.jpg'
import CharliePuth from '../assets/images/Album/CharliePuth.jpg'
import unity from '../assets/images/Album/alan walker.png'
import signal from '../assets/images/Album/signalTW.png'
import zeta from '../assets/images/Album/zetaaaaa.png'
import hsg from '../assets/images/Album/heartSoGood.jpg'
import deutsch from '../assets/images/Album/deutsch.jpg'
import aiscream from '../assets/images/Album/aiscream.png'
import angin from '../assets/images/Album/angin.jpg'
import hololep from '../assets/images/Album/hololep.png'
import jumbo from '../assets/images/Album/jumbo.png'
import qalbi from '../assets/images/Album/qalbi.jpg'
import stecu from '../assets/images/Album/stecu.jpg'
import onePiece from '../assets/images/Album/akuma.webp'
import sherina from '../assets/images/Album/sherina.png'
import smk from '../assets/images/Album/smkbisa.webp'
import kyuhun from '../assets/images/Album/deep in the night.png'
import SongCard from '../components/songCard.vue'

const router = useRouter()

const searchQuery = ref('')

const songs = ref([
  {
    id: 1,
    title: 'Bella Ciao',
    artist: 'Manu Pilas',
    cover: bellaCiao,
  },
  {
    id: 2,
    title: "We Don't Talk Anymore",
    artist: 'Charlie Puth',
    cover: CharliePuth,
  },
  {
    id: 3,
    title: 'Unity',
    artist: 'Alan Walker',
    cover: unity,
  },
  {
    id: 4,
    title: 'Signal',
    artist: 'Twice',
    cover: signal,
  },
  {
    id: 5,
    title: 'Break it Down',
    artist: 'Vestia Zeta',
    cover: zeta,
  },
  {
    id: 6,
    title: 'Heart So Good',
    artist: 'Astrid S',
    cover: hsg,
  },
  {
    id: 7,
    title: '80 Million',
    artist: 'Max Giesinger',
    cover: deutsch,
  },
  {
    id: 8,
    title: 'Aicream',
    artist: 'Love Live',
    cover: aiscream,
  },
  {
    id: 9,
    title: 'Angin Kita',
    artist: 'JKT 48',
    cover: angin,
  },
  {
    id: 10,
    title: 'Juara Khatulistiwa',
    artist: 'Hololive indonesia',
    cover: hololep,
  },
  {
    id: 11,
    title: 'Selalu Ada Di Nadimu',
    artist: 'Prince Poetiray & Quinn Salman',
    cover: jumbo,
  },
  {
    id: 12,
    title: 'Qalbi Fil Madinah',
    artist: 'Maher Zain & Harris J',
    cover: qalbi,
  },
  {
    id: 13,
    title: 'STECU',
    artist: 'FARIS ADAM',
    cover: stecu,
  },
  {
    id: 14,
    title: 'Tenshi to Akuma',
    artist: 'GRe4N BOYZ',
    cover: onePiece,
  },
  {
    id: 15,
    title: 'Persahabatan',
    artist: 'Jakarta Movin',
    cover: sherina,
  },
  {
    id: 16,
    title: 'Mars SMK Nasional',
    artist: 'SMK',
    cover: smk,
  },
  {
    id: 17,
    title: 'Deep In The Night',
    artist: 'Kyuhyun',
    cover: kyuhun,
  },
])

const filteredSongs = computed(() => {
  const search = searchQuery.value.toLowerCase()
  return songs.value.filter(
    (song) =>
      song.title.toLowerCase().includes(search) || song.artist.toLowerCase().includes(search),
  )
})

const goToDetail = (id) => {
  router.push(`/song/${id}`)
}
</script>
