<template>
      <div>
            <!-- Left column -->
            <a href="#"><strong><i class="fas fa-th-large mr-1"></i>Layout</strong></a>
            <hr>
            <div>
                <ul class="list-group">
                    <li class="list-group-item"><h5>Carousal</h5> <!-- title of the layout-->
                        <ul class="list-group">
                            <div >
                                <div class="input-group input-group-sm mb-1 mt-1 input-image_carousal">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm"><i class="fas fa-font"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Title" v-model="layout.carousal_items.carousal_1.title">
                                    <input type="text" class="form-control" placeholder="Description" v-model="layout.carousal_items.carousal_1.description">
                                </div>
                                <div class="input-group input-group-sm mb-1 mt-1 input-image_carousal">
                                    <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-sm"><i class="far fa-images"></i></span>
                                        </div>
                                    <input type="text" class="form-control" placeholder="Link to the image" v-model="layout.carousal_items.carousal_1.link">
                                </div>
                        </div>
                        <div class="input-group input-group-sm mb-1  mt-3 input-image_carousal">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-sm"><i class="fas fa-font"></i></span>
                                </div>
                                <input type="text" class="form-control"  placeholder="Title" v-model="layout.carousal_items.carousal_2.title" > 
                                <input type="text" class="form-control"  placeholder="Description" v-model="layout.carousal_items.carousal_2.description">
                        </div>
                        <div class="input-group input-group-sm mb-1 mt-1 input-image_carousal">
                            <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-sm"><i class="far fa-images"></i></span>
                                </div>
                            <input type="text" class="form-control" placeholder="Link to the image" v-model="layout.carousal_items.carousal_2.link">
                        </div>

                        <div class="input-group input-group-sm mb-1 mt-3 input-image_carousal">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-sm"><i class="fas fa-font"></i></span>
                                </div>
                                <input type="text" class="form-control" placeholder="Title" v-model="layout.carousal_items.carousal_3.title">
                                <input type="text" class="form-control" placeholder="Description" v-model="layout.carousal_items.carousal_3.description">
                        </div>
                        <div class="input-group input-group-sm mb-1 mt-1 input-image_carousal">
                            <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-sm"><i class="far fa-images"></i></span>
                                </div>
                            <input type="text" class="form-control"  placeholder="Link to the image" v-model="layout.carousal_items.carousal_3.link">
                        </div>
                            <div class="mt-2">
                                <button type="button" class="btn btn-outline-primary btn-block" @click.prevent="save_carousal"><i class="far fa-save pr-1"></i>Save</button>
                            </div>
                        </ul>
                    </li>

                    <li class="list-group-item">
                        <h5>Featured Item</h5> 
                        <ul class="list-group">
                                <div class="input-group input-group-sm mb-1 mt-1 input-image_carousal">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm"><i class="far fa-images"></i></span>
                                    </div>
                                    <input type="text" class="form-control"  placeholder="Link" v-model="layout.feature_items.feature_item_1.link">
                                    <input type="text" class="form-control"  placeholder="Button text" v-model="layout.feature_items.feature_item_1.text">
                                </div>
                                <div class="input-group input-group-sm mb-1 mt-1 input-image_carousal">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-sm"><i class="far fa-images"></i></span>
                                        </div>
                                        <input type="text" class="form-control"  placeholder="Link" v-model="layout.feature_items.feature_item_2.link">
                                        <input type="text" class="form-control" placeholder="Button text" v-model="layout.feature_items.feature_item_2.text">
                                </div>
                                <div class="input-group input-group-sm mb-1 mt-1 input-image_carousal">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-sm"><i class="far fa-images"></i></span>
                                        </div>
                                        <input type="text" class="form-control"  placeholder="Link" v-model="layout.feature_items.feature_item_3.link">
                                        <input type="text" class="form-control"  placeholder="Button text" v-model="layout.feature_items.feature_item_3.text">
                                </div>

                                <div class="pl-2 mt-2">
                                    <button type="button" class="btn btn-outline-primary  btn-block" @click.prevent="save_feature_item"><i class="far fa-save pr-1"></i>Save</button>
                                </div>
                        </ul>
                    </li>
                    <li class="list-group-item">
                        <OptionConfig />
                    </li>
                </ul>

            </div>
        </div>
</template>

<script>
import firebase from '@/firebase/init'
import swal from 'sweetalert';
import OptionConfig from '@/components/OptionConfig'

const db = firebase.firestore();
export default {
    name: "Layout",
    components:{
        OptionConfig
    },
    data(){
        return {
            layout: {
                carousal_items: {
                    carousal_1: {
                        title: null,
                        description: null,
                        link: null
                    },
                    carousal_2: {
                        title: null,
                        description: null,
                        link: null
                    },
                    carousal_3:{
                        title: null,
                        description: null,
                        link: null
                    },
                },
                feature_items:{
                    feature_item_1: {
                        text: null,
                        link: null
                    },
                    feature_item_2: {
                        text: null,
                        link: null
                    },
                    feature_item_3: {
                        text: null,
                        link: null
                    },
                }
            },
        }
    },
    methods:{
        save_carousal: function(){
            var ref = db.collection('layout').doc('carousal_items').set(this.layout.carousal_items).then(() => {
                swal("Success!", "The data has been save!", "success");
            })
        },
        save_feature_item: function(){
            var ref = db.collection('layout').doc('feature_items').set(this.layout.feature_items).then(() => {
                swal("Success!", "The data has been save!", "success");
            })
        }
    },
    created(){
        var self = this;
        var ref = db.collection('layout');
        ref.get().then((snapshot) => {
            snapshot.forEach(doc => {
                self.layout[doc.id] = doc.data();
            });
        });
    }
}
</script>

<style>

</style>
