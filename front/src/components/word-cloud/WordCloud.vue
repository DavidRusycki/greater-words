<template>
  <div>
    <D3WordCloud :words="this.words" />
  </div>
</template>

<script>
import D3WordCloud from "@/components/word-cloud/D3WordCloud.vue";

export default {
  name: "WordCloud",
  data() {
    return {
      words: [
        "Hello",
        "world",
        "normally",
        "you",
        "want",
        "more",
        "words",
        "than",
        "this",
        "Hello",
        "world",
        "normally",
        "you",
        "want",
        "more",
        "words",
        "than",
        "this",
        "Hello",
        "world",
        "normally",
        "you",
        "want",
        "more",
        "words",
        "than",
        "this",
      ],
    };
  },
  components: {
    D3WordCloud,
  },
};
</script>
