<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// Import semua asset (cover & mp3)
import bellaCiaoCover from '@/assets/images/Album/bellaCiao.jpg'
import bellaCiaoAudio from '@/assets/mp3/BellaCiao.mp3'

import charlieCover from '@/assets/images/Album/CharliePuth.jpg'
import charlieAudio from '@/assets/mp3/we dont talk anymore.mp3'

import unityCover from '@/assets/images/Album/alan walker.png'
import unityAudio from '@/assets/mp3/unity.mp3'

import signalCover from '@/assets/images/Album/signalTW.png'
import signalAudio from '@/assets/mp3/signal.mp3'

import zetaCover from '@/assets/images/Album/zetaaaaa.png'
import zetaAudio from '@/assets/mp3/break it down.mp3'

import hsgCover from '@/assets/images/Album/heartSoGood.jpg'
import hsgAudio from '@/assets/mp3/heart so good.mp3'

import deutschCover from '@/assets/images/Album/deutsch.jpg'
import deutschAudio from '@/assets/mp3/80 milion.mp3'

import aiscreamCover from '@/assets/images/Album/aiscream.png'
import aiscreamAudio from '@/assets/mp3/aicream.mp3'

import angin from '../assets/images/Album/angin.jpg'
import anginAudio from '@/assets/mp3/angin.mp3'

import hololep from '../assets/images/Album/hololep.png'
import hololepAudio from '@/assets/mp3/hololep.mp3'

import jumbo from '../assets/images/Album/jumbo.png'
import jumboAudio from '@/assets/mp3/jumbo.mp3'

import qalbi from '../assets/images/Album/qalbi.jpg'
import qalbiAudio from '@/assets/mp3/qalbi.mp3'

import stecu from '../assets/images/Album/stecu.jpg'
import stecuAudio from '@/assets/mp3/stecu.mp3'

import onePiece from '../assets/images/Album/akuma.webp'
import onePieceAudio from '@/assets/mp3/akuma.mp3'

import sherina from '../assets/images/Album/sherina.png'
import sherinaAudio from '@/assets/mp3/sherina.mp3'

import smk from '../assets/images/Album/smkbisa.webp'
import smkAudio from '@/assets/mp3/smk.mp3'

import kyuhun from '../assets/images/Album/deep in the night.png'
import kyuhunAudio from '@/assets/mp3/deep in the night.mp3'

const route = useRoute()
const router = useRouter()

const songs = [
  {
    id: 1,
    title: 'Bella Ciao',
    artist: 'Manu Pilas',
    cover: bellaCiaoCover,
    audio: bellaCiaoAudio,
  },
  {
    id: 2,
    title: "We Don't Talk Anymore",
    artist: 'Charlie Puth',
    cover: charlieCover,
    audio: charlieAudio,
  },
  {
    id: 3,
    title: 'Unity',
    artist: 'Alan Walker',
    cover: unityCover,
    audio: unityAudio,
  },
  {
    id: 4,
    title: 'Signal',
    artist: 'Twice',
    cover: signalCover,
    audio: signalAudio,
  },
  {
    id: 5,
    title: 'Break it Down',
    artist: 'Vestia Zeta',
    cover: zetaCover,
    audio: zetaAudio,
  },
  {
    id: 6,
    title: 'Heart So Good',
    artist: 'Astrid S',
    cover: hsgCover,
    audio: hsgAudio,
  },
  {
    id: 7,
    title: '80 Million',
    artist: 'Max Giesinger',
    cover: deutschCover,
    audio: deutschAudio,
  },
  {
    id: 8,
    title: 'Aicream',
    artist: 'Love Live',
    cover: aiscreamCover,
    audio: aiscreamAudio,
  },
  {
    id: 9,
    title: 'Angin Kita',
    artist: 'JKT 48',
    cover: angin,
    audio: anginAudio,
  },
  {
    id: 10,
    title: 'Juara Khatulistiwa',
    artist: 'Hololive indonesia',
    cover: hololep,
    audio: hololepAudio,
  },
  {
    id: 11,
    title: 'Selalu Ada Di Nadimu',
    artist: 'Prince Poetiray & Quinn Salman',
    cover: jumbo,
    audio: jumboAudio,
  },
  {
    id: 12,
    title: 'Qalbi Fil Madinah',
    artist: 'Maher Zain & Harris J',
    cover: qalbi,
    audio: qalbiAudio,
  },
  {
    id: 13,
    title: 'STECU',
    artist: 'FARIS ADAM',
    cover: stecu,
    audio: stecuAudio,
  },
  {
    id: 14,
    title: 'Tenshi to Akuma',
    artist: 'GRe4N BOYZ',
    cover: onePiece,
    audio: onePieceAudio,
  },
  {
    id: 15,
    title: 'Persahabatan',
    artist: 'Jakarta Movin',
    cover: sherina,
    audio: sherinaAudio,
  },
  {
    id: 16,
    title: 'Mars SMK Nasional',
    artist: 'SMK',
    cover: smk,
    audio: smkAudio,
  },
  {
    id: 17,
    title: 'Deep in the Night',
    artist: 'Kyuhun',
    cover: kyuhun,
    audio: kyuhunAudio,
  },
]

const audio = ref(null)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)

const songId = parseInt(route.params.id)
const song = songs.find((s) => s.id === songId)

const togglePlay = () => {
  if (!audio.value) return
  if (isPlaying.value) {
    audio.value.pause()
  } else {
    audio.value.play()
  }
  isPlaying.value = !isPlaying.value
}

const updateTime = () => {
  currentTime.value = audio.value.currentTime
}

const updateDuration = () => {
  duration.value = audio.value.duration
}

const seekAudio = () => {
  if (audio.value) {
    audio.value.currentTime = currentTime.value
  }
}

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

const goHome = () => {
  router.push('/')
}

onMounted(() => {
  updateDuration()
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-white px-4">
    <button @click="goHome" class="absolute top-4 left-4 text-gray-600 hover:text-black">
      ⬅ Kembali
    </button>

    <img :src="song.cover" alt="cover" class="w-60 h-60 rounded-xl shadow-lg mb-6 object-cover" />

    <h2 class="text-2xl font-bold text-center mb-2">{{ song.title }}</h2>
    <p class="text-center text-gray-600 mb-4">{{ song.artist }}</p>

    <audio
      ref="audio"
      :src="song.audio"
      @timeupdate="updateTime"
      @loadedmetadata="updateDuration"
    />

    <div class="flex items-center w-full max-w-lg mb-4 gap-2">
      <span class="text-sm">{{ formatTime(currentTime) }}</span>
      <input
        type="range"
        min="0"
        :max="duration"
        step="0.1"
        v-model="currentTime"
        @input="seekAudio"
        class="w-full"
      />
      <span class="text-sm">{{ formatTime(duration) }}</span>
    </div>

    <div class="flex gap-4 items-center justify-center">
      <button @click="togglePlay" class="text-3xl">
        {{ isPlaying ? '⏸' : '▶️' }}
      </button>
    </div>
  </div>
</template>
