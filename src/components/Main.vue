<template>
     <div >
            <!-- tabs-->
        <p class="p-tab"> <i class="fa fa-braille"></i> <span id="item_tab" class="activeTab" @click="changeTab($event)">Item List</span> / <span id="transaction_tab" @click="changeTab($event)">Transcation List<span class="badge badge-pill  badge-danger ml-2">1</span></span> </p>
        <hr>
            <Item />
            <Mail />
        <hr>
    </div>
</template>

<script>
import Item from '@/components/Item'
import Mail from '@/components/Mail'
export default {
    name: "Main",
    components:{
        Item,
        Mail
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
                alert("change tab!");
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


