<template>
  <div id="canvas"></div>
</template>

<script>
import useWordsStore from '@/stores/words.js'
import { mapActions } from 'pinia'

export default {
  name: 'D3WordCloud',
  methods: {
    ...mapActions(useWordsStore, ['render'])
  }
}
</script>
