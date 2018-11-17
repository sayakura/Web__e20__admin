<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <footer class="text-center">
        Created by <span>kura peng</span>
    </footer>
  </div>
</template>

<script>
import Admin from '@/components/Admin'
import Navbar from '@/components/Navbar'
import firebase from 'firebase'
export default {
  name: 'App',
  components: {
    Navbar,
    Admin
  },
  data(){
    return {
    }
  },
}
</script>
