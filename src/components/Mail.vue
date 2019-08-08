<template>
    <div class="container">
        <a href="#"><strong><i class="far fa-envelope mr-1"></i>mail </strong></a>
        <hr>
        <div class="row">
            <div class="col-md-12">
                <div class="list-group">
                    <div  class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1"><a href="mailto:someone@example.com">Email: 123190i10952@qq.com</a></h5>
                        <small>3 days ago</small>
                        </div>
                        <p class="mb-1">hey</p>
                        <small>User name: adsasda</small>
                    </div>
                 </div>
            </div>
        </div>
        <nav aria-label="Page navigation example" class="mt-2 float-right">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>

import firebase from '@/firebase/init'
const db = firebase.firestore();

export default {
    name: "Mail",
    created(){
        db.collection('question').get().then();
    }
}
</script>

<style>

</style>
