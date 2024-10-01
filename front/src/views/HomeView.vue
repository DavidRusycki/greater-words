<template>
  <div>
    <h1>Home Viewww</h1>
    <form class="organization">
      <input
        v-for="field in fields"
        :key="field"
        type="text"
        placeholder="Enter with words"
        name="words"
        class="mb"
      />
      <button class="mb" @click.prevent="addField">Add field</button>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      fields: [1],
      words: []
    }
  },
  methods: {
    addField() {
      this.fields.push(this.fields.length + 1)
    }
  }
}
</script>

<style>
.organization {
  display: flex;
  flex-direction: column;
}

.mb {
  margin-bottom: 1em;
}

#app {
  display: flex;
  justify-content: center;
}
</style>
