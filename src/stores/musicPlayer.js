import { defineStore } from 'pinia'

export const useMusicPlayerStore = defineStore('musicPlayer', {
  state: () => ({
    currentSong: null,
    isPlaying: false,
  }),
  actions: {
    setSong(song) {
      this.currentSong = song
      this.isPlaying = true
    },
    pauseSong() {
      this.isPlaying = false
    },
    playSong() {
      this.isPlaying = true
    },
  },
})
