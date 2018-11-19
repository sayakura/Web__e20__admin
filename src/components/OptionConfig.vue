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
                <input type="text" class="form-control col-md-10" v-model="lense_option.option1.text">
                <input type="text" class="form-control col-md-2" v-model="lense_option.option1.price">
            </li>
            <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option.option2.text">
                <input type="text" class="form-control col-md-2" v-model="lense_option.option2.price">
            </li>
            <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option.option3.text">
                <input type="text" class="form-control col-md-2" v-model="lense_option.option3.price">
            </li>
            <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option.option4.text">
                <input type="text" class="form-control col-md-2" v-model="lense_option.option4.price">
            </li>
             <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option.option5.text">
                <input type="text" class="form-control col-md-2" v-model="lense_option.option5.price">
            </li>
            <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option.option6.text">
                <input type="text" class="form-control col-md-2" v-model="lense_option.option6.price">
            </li>
            <li class="mt-2">
                <h5>Lense Option</h5>
            </li>
            <li class="mt-2">
                <input type="text" class="form-control" id="lense_option_label" v-model="lense_option2.lense_option_label">
            </li>
            <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option2.option1.text">
                <input type="text" class="form-control col-md-2" v-model="lense_option2.option1.price">
            </li>
            <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option2.option2.text">
                <input type="text" class="form-control col-md-2" v-model="lense_option2.option2.price">
            </li>
            <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option2.option3.text">
                <input type="text" class="form-control col-md-2" v-model="lense_option2.option3.price">
            </li>
             <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option2.option4.text">
                <input type="text" class="form-control col-md-2" v-model="lense_option2.option4.price">
            </li>
              <li class="mt-2">
                <h5>Lense Coating Option</h5>
            </li>
            <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option3.option1.text">
                <input type="text" class="form-control col-md-2" v-model="lense_option3.option1.price">
            </li>
            <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option3.option2.text">
                <input type="text" class="form-control col-md-2" v-model="lense_option3.option2.price">
            </li>
            <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option3.option3.text">
                <input type="text" class="form-control col-md-2" v-model="lense_option3.option3.price">
            </li>
             <li class="mt-2 row">
                <input type="text" class="form-control col-md-10" v-model="lense_option3.option4.text">
                <input type="text" class="form-control col-md-2" v-model="lense_option3.option4.price">
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
                option1: {
                    text: "Anti-glare(reduce glare)",
                    price: 60,
                },
                option2: {
                    text: "Transition(In and outdoor change color ) Grey ",
                    price: 60,
                },
                option3: {
                    text: "Transition(In and outdoor change color ) Black ",
                    price: 60,
                },
                option4: {
                    text: "Polarized (Sun lenses reduce glare) Grey ",
                    price: 60,
                },
                option5: {
                    text: "Polarized (Sun lenses reduce glare) Black ",
                    price: 60,
                },
                option6: {
                    text: "TinT (Included UV protection Does not reduce glare)",
                    price: 30,
                }
            },
            lense_option2: {
                lense_option_label: "The 1.67 Hi-index provides a thinner lenses for high prescription. It reduces thickness on the edge. (Recommended for spherical power of +/- 6.00 abd above)",
                option1: {
                    text: "Anti-glare(reduce glare)",
                    price: 60,
                },
                option2: {
                    text: "Transition(In and outdoor change color ) Grey ",
                    price: 60,
                },
                option3: {
                    text: "Polarized (Sun lenses reduce glare) Grey ",
                    price: 60,
                },
                option4: {
                    text: "Polarized (Sun lenses reduce glare) Black ",
                    price: 60,
                }
            },
            lense_option3: {
                option1: {
                    text: "Anti-glare(reduce glare)",
                    price: 30,
                },
                option2: {
                    text:  "Transition(In and outdoor change color )",
                    price: 40,
                },
                option3: {
                    text: "Polarized (Sun lenses reduce glare)",
                    price: 50,
                },
                option4: {
                    text: "TinT (Included UV protection Does not reduce glare)",
                    price:30,
                }
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
         var obj = {
                lense_option1: this.lense_option,
                lense_option2: this.lense_option2,
                lense_option3: this.lense_option3,
        }
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
