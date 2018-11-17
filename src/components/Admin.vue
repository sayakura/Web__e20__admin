<template>
    <div class="container-fluid mt-4" >
        <div class="row">
            <div class="col-sm-3">
                <Layout />
            </div>
            <div class="col-sm-9">
                <Main />
            </div>
        </div>
    </div>
</template>

<script>
import Layout from '@/components/Layout'
import Main from '@/components/Main'
export default {
    name: "Admin",
    components: {
        Layout,
        Main
    }
}
</script>

<style>

</style>
