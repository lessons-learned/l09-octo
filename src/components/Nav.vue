<script setup>
// import { ref } from 'vue'
import Logo from '../assets/centaur-mark.svg'
import DownArrow from '../assets/chevron-down.svg'

defineProps({
  // msg: String
})

// const count = ref(0)

const navMenu = [{
  navLabel: 'Help guides',
  link: ''
}, {
  navLabel: 'Username',
  link: ''
}]

</script>

<template>

    <nav id="topnav" class="block w-full">
      <img :src="Logo" alt="centaur labs" />

      <div class="nav-links">

        <button
          type="button" class="menu-button" aria-expanded="true" aria-haspopup="true"
          v-for="option, optionIndex in navMenu" :key="optionIndex">
          {{ option.navLabel }}
          <img :src="DownArrow" />
        </button>

      </div>
    </nav>


</template>

<style scoped>

</style>
