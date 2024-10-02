<template>
  <div>
    <D3WordCloud />
  </div>
</template>

<script>
import D3WordCloud from '@/components/word-cloud/D3WordCloud.vue'
import useWordsStore from '@/stores/words.js'
import { mapActions } from 'pinia'

export default {
  name: 'WordCloud',
  data() {
    return {
      words: [
        'Hello',
        'world',
        'normally',
        'you',
        'want',
        'more',
        'words',
        'than',
        'this',
        'Hello',
        'world',
        'normally',
        'you',
        'want',
        'more',
        'words',
        'than',
        'this',
        'Hello',
        'world',
        'normally',
        'you',
        'want',
        'more',
        'words',
        'than',
        'this'
      ]
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
    update() {
      console.log('updating words...')
      //search words
      this.setWords(this.words)
      this.render()
      console.log('updating finished.')
    }
  }
}
</script>
