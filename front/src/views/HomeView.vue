<template>
  <div>
    <h1 class="mb-4 mt-6 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
      Type your words about theme
    </h1>
    <form class="flex flex-col">
      <input
        v-for="(index, field) in fields"
        :key="field"
        type="text"
        placeholder="type word here"
        name="words"
        class="block pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2"
        v-model="words[index]"
      />
      <div class="flex justify-end mb-6">
        <button
          type="button"
          class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          @click.prevent="addField"
        >
          <svg
            class="-ml-0.5 mr-1.5 h-6 w-6 text-gray-900"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M6 12H18M12 6V18"
                stroke="#111827"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
          Add more word
        </button>
        <button
          type="button"
          class="ml-2 inline-flex items-center rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click="submit"
        >
          <svg
            class="-ml-0.5 mr-1.5 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clip-rule="evenodd"
            />
          </svg>
          Send
        </button>
      </div>
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
    },
    submit() {
      if (this.words.length === 0) {
        console.log('no words to upload.')
        return
      }

      console.log('uploading words...')
      console.log(this.words)
      console.log('uploading finished.')

      this.$router.push({ name: 'cloud' })
    }
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
}
</style>
