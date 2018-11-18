<template>
  <div id="app">
    <Navbar />

    <!-- tabs -->
    <div class="row ml-3 mt-3">
        <p class="p-tab"> 
         <i class="fas fa-home"></i>
          <span id="item_tab" class="activeTab" @click="changeTab($event)">Item List</span> /
          <span id="transaction_tab" @click="changeTab($event)">Transcation List<span class="badge badge-pill  badge-danger ml-2">1
              
          </span>
          </span>
        </p>
    </div>
    <!-- router view here -->

    <router-view></router-view>

    <!-- mail component here -->
    <Mail class="container mt-3"/>

    <!-- footer component (todo) -->
    <footer class="text-center">
        Created by <span>kura peng</span>
    </footer>
  </div>
</template>

<script>
import Admin from '@/components/Admin'
import Navbar from '@/components/Navbar'
import firebase from 'firebase'
import Item from '@/components/Item'
import Mail from '@/components/Mail'
export default {
  name: 'App',
  components: {
    Navbar,
    Admin,
    Item,
    Mail,
    },
    data(){
        return {
            activeTabs: ['#item_tab', '#transaction_tab'],
        }
    },
    methods:{
         changeTab: function(e){
           for (var i = 0; i < this.activeTabs.length; i++)
            $(this.activeTabs[i]).removeClass('activeTab');
            $('#' + e.target.id).addClass('activeTab');
            if (e.target.id == 'transaction_tab')
                this.$router.push('/transaction')
            else
                this.$router.push('/')
       },
    }
}
</script>

<style scope>

a{
    text-decoration: none !important; 
}
.activeTab{
    font-weight: bold;
}
.p-tab{
    cursor: pointer;
    color: rgb(51, 124, 246);
}
</style>

