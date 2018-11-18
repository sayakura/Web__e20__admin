<template>
    <div>
        <ul class="list-group list-group-flush">
            <li>
                <h5>Lense Option</h5>
            </li>
            <li class="mt-2">
                <input type="text" class="form-control" id="lense_option_label" v-model="lense_option.lense_option_label">
            </li>
            <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option.option_1_text">
                <input type="text" class="form-control col-md-2" v-model="lense_option.option_1_price">
            </li>
            <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option.option_2_text">
                <input type="text" class="form-control col-md-2" v-model="lense_option.option_2_price">
            </li>
            <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option.option_3_text">
                <input type="text" class="form-control col-md-2" v-model="lense_option.option_3_price">
            </li>
            <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option.option_4_text">
                <input type="text" class="form-control col-md-2" v-model="lense_option.option_4_price">
            </li>
             <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option.option_5_text">
                <input type="text" class="form-control col-md-2" v-model="lense_option.option_5_price">
            </li>
            <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option.option_6_text">
                <input type="text" class="form-control col-md-2" v-model="lense_option.option_6_price">
            </li>
            <li class="mt-2">
                <h5>Lense Option</h5>
            </li>
            <li class="mt-2">
                <input type="text" class="form-control" id="lense_option_label" v-model="lense_option2.lense_option_label">
            </li>
            <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option2.option_1_text">
                <input type="text" class="form-control col-md-2" v-model="lense_option2.option_1_price">
            </li>
            <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option2.option_2_text">
                <input type="text" class="form-control col-md-2" v-model="lense_option2.option_2_price">
            </li>
            <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option2.option_4_text">
                <input type="text" class="form-control col-md-2" v-model="lense_option2.option_4_price">
            </li>
             <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option2.option_5_text">
                <input type="text" class="form-control col-md-2" v-model="lense_option2.option_5_price">
            </li>
              <li class="mt-2">
                <h5>Lense Coating Option</h5>
            </li>
            <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option3.option_1_text">
                <input type="text" class="form-control col-md-2" v-model="lense_option3.option_1_price">
            </li>
            <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option3.option_2_text">
                <input type="text" class="form-control col-md-2" v-model="lense_option3.option_2_price">
            </li>
            <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option3.option_4_text">
                <input type="text" class="form-control col-md-2" v-model="lense_option3.option_4_price">
            </li>
             <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option3.option_5_text">
                <input type="text" class="form-control col-md-2" v-model="lense_option3.option_5_price">
            </li>
             <li class="mt-2">
                <button class="btn btn-outline-primary btn-block" @click="saveConfig"><i class="far fa-save pr-1"></i>Save</button>
            </li>
        </ul>
    </div>
</template>

<script>
import firebase from '@/firebase/init'
import { bus } from '../main'

const db = firebase.firestore();

export default {
    name: "OptionConfig",
    data(){
        return {
            lense_option: {
                lense_option_label: "The 1.59 polycarbcnate lense high impact resistant",
                option_1_text: "Anti-glare(reduce glare)",
                option_1_price: 60,
                option_2_text: "Transition(In and outdoor change color ) Grey ",
                option_2_price: 60,
                option_3_text: "Transition(In and outdoor change color ) Black ",
                option_3_price: 60,
                option_4_text: "Polarized (Sun lenses reduce glare) Grey ",
                option_4_price: 60,
                option_5_text: "Polarized (Sun lenses reduce glare) Black ",
                option_5_price: 60,
                option_6_text: "TinT (Included UV protection Does not reduce glare)",
                option_6_price: 30,
            },
            lense_option2: {
                lense_option_label: "The 1.67 Hi-index provides a thinner lenses for high prescription. It reduces thickness on the edge. (Recommended for spherical power of +/- 6.00 abd above)",
                option_1_text: "Anti-glare(reduce glare)",
                option_1_price: 60,
                option_2_text: "Transition(In and outdoor change color ) Grey ",
                option_2_price: 60,
                option_4_text: "Polarized (Sun lenses reduce glare) Grey ",
                option_4_price: 60,
                option_5_text: "Polarized (Sun lenses reduce glare) Black ",
                option_5_price: 60,
            },
            lense_option3: {
                option_1_text: "Anti-glare(reduce glare)",
                option_1_price: 30,
                option_2_text: "Transition(In and outdoor change color )",
                option_2_price: 40,
                option_4_text: "Polarized (Sun lenses reduce glare)",
                option_4_price: 50,
                option_5_text: "TinT (Included UV protection Does not reduce glare)",
                option_5_price: 30,
            }
        }
    },
    methods:{
        saveConfig: function(){
            var obj = {
                lense_option1: this.lense_option,
                lense_option2: this.lense_option2,
                lense_option3: this.lense_option3,
            }
            db.collection('options').doc('lense_options').set(obj).then(() => {
                swal("Success!", "The data has been update!", "success");
            })
        }
    },
    created(){
        var self = this;
        db.collection('options').get().then((snapshot) => {
            snapshot.forEach((doc) => {
                if (doc.id == 'lense_options'){
                    self.lense_option = doc.data()['lense_option1'];
                    self.lense_option2 = doc.data()['lense_option2'];
                    self.lense_option3 = doc.data()['lense_option3'];
                    var obj = {
                        lense_option1: this.lense_option,
                        lense_option2: this.lense_option2,
                        lense_option3: this.lense_option3,
                    }
                    bus.$emit('options_loaded', obj);
                }
            })
        })
    }
}
</script>

<style>
#lense_option_label{
    font-size: 13px;
}
li{
    list-style: none;
}
</style>
