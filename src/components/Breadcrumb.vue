<script setup>
// import { ref } from 'vue'
import Slash from '../assets/slash.svg'


defineProps({
  // msg: String
})

// const count = ref(0)

const breadcrumb = [{
  breadcrumbLabel: 'Organization name',
  link: ''
}, {
  breadcrumbLabel: 'Labeler tasks',
  link: ''
}, {
  breadcrumbLabel: 'New task',
  link: ''
}]

</script>

<template>

    <nav id="breadcrumb" class="block w-full">

      <div class="nav-links">

        <button
          type="button" class="menu-button" aria-expanded="true" aria-haspopup="true"
          v-for="option, optionIndex in breadcrumb" :key="optionIndex">
          {{ option.breadcrumbLabel }}
          <img :src="Slash" />
        </button>

      </div>
    </nav>


</template>

<style scoped>

</style>
