<template>
  <div>
    <D3WordCloud />
  </div>
</template>

<script>
import D3WordCloud from '@/components/word-cloud/D3WordCloud.vue'
import useWordsStore from '@/stores/words.js'
import { mapActions } from 'pinia'
import axios from 'axios'

export default {
  name: 'WordCloud',
  data() {
    return {
      words: []
    }
  },
  components: {
    D3WordCloud
  },
  mounted() {
    setInterval(() => {
      this.update()
    }, 10000)

    this.update()
  },
  methods: {
    ...mapActions(useWordsStore, ['render', 'setWords']),
    async update() {
      console.log('updating words...')
      await axios.get('http://localhost:8080/words').then((response) => {
        this.words = []
        response.data.forEach((element) => {
          this.words.push({ word: element.word, count: element.count * 10 })
        })
      })
      this.setWords(this.words)
      this.render()
      console.log('updating finished.')
    }
  }
}
</script>
