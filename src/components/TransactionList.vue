<template>
    <div  id="transaction_list">
        <table class="table table-bordered">
        <thead class="thead-light">
            <tr>
                <th scope="col">Finish</th>
                <th scope="col">Invoice #</th>
                <th scope="col"><i class="fas fa-envelope  pr-1"></i>Email</th>
                <th scope="col"><i class="fas fa-list-ul pr-1"></i>Sepecification</th>
                <th scope="col"><i class="fas fa-address-card pr-1"></i>Address</th>
                <!-- <th scope="col"><i class="fas fa-credit-card pr-1"></i>Method</th> -->
                <th><i class="fas fa-sort-numeric-up pr-1"></i>Amount</th>
                <th scope="col" class="date_th" @click="switch_format" ><i class="far fa-calendar-alt pr-1"></i>Date</th>
                <th scope="col"><i class="fas fa-money-check-alt pr-1"></i>Refund</th>
            </tr>
        </thead>
        <tbody >
            <tr v-for="(item, key) in transactions" :key="item.invoiceNumber">
                <td class="finish_td">
                    <i class="far fa-square icon-action" v-if="item.finish == false" @click="setFinish(key)"></i>
                    <i class="far fa-check-square icon-action" v-else @click="setFinish(key)"></i>
                </td>
                <td>{{ item.invoiceNumber }}</td>
                <td><a :href="'mailto:' + item.email">{{ item.email }}</a></td>
                <td>{{ item.specification }}</td>
                <td>{{ item.address }}</td>
                <!-- <td>{{ item.method }}</td> -->
                <td>{{ '$' + item.amount / 100 }}</td>
                <td>{{ date_format_exact ? item.exact_time : item.from }}</td>
                <td><button class="btn btn-light" type="button">Refund</button></td>
            </tr>
        </tbody>
        </table>
        
        <!-- mail component here -->
        <Mail class="container mt-3"/>
    </div>
</template>

<script>

import Mail from '@/components/Mail'
import firebase from '@/firebase/init'
import moment from "moment";
const db = firebase.firestore();
export default {
    name: "TransactionList",
    components:{
        Mail
    },
    data(){
        return {
            date_format_exact: false,
            transactions: {}
        }
    },
    computed:{
        inode_list: function(){
            console.log("computed")
            console.log(this.transactions)
            return [...this.transactions];
        }
    },
    methods:{
        switch_format(){
            this.date_format_exact = !this.date_format_exact;
        },
        setFinish: function(id){
            var status = null;
            if (this.transactions[id].finish)
                status = 'unfinished';
            else
                status = 'finished';
            swal({
                title: "Are you sure?",
                text:  "You want to set this transaction as " + status + "!?" ,
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then(willSet => {
                if (willSet){
                    db.collection("transaction").doc(id).set({ status: !this.transactions[id].finish }, { merge: true})
                    .then(() => {
                        swal("Success!", "You have set this transaction as " + status + "!", "success");
                        this.transactions[id].finish = !this.transactions[id].finish;
                    })
                    .catch(err => {
                        swal("Failed!", err.message, "error");
                    })
                    
                }
            })
        }
    },
    created(){
        let transactions = {};
        let _tmp;
        let self = this;
        db.collection("transaction").get()
        .then(snapshot => {
            snapshot.docs.forEach(element => {
                _tmp = element.data();
                transactions[element.id] = {
                    invoiceNumber: element.id,
                    finish: _tmp.status ? _tmp.status : false,
                    email:  _tmp.email,
                    address: `${_tmp.address.street_address} ${_tmp.address.state} ${_tmp.address.zipcode}`,
                    method: "credit card",
                    amount: _tmp.amount,
                    specification: "None",
                    timestamp: _tmp.timestamp,
                    from: `${moment(_tmp.timestamp).fromNow()}`,
                    exact_time: `${moment(_tmp.timestamp).format('LLL')}`
                }
            });
            self.transactions = transactions
        })
        db.collection("transaction")
        .onSnapshot(function(snapshot) {
            snapshot.docChanges().forEach(function(change) {
                if (change.type === "added") {
                    if (!self.transactions[change.doc.id]) {
                        let _tmp = change.doc.data();
                        self.transactions[change.doc.id] = {
                            invoiceNumber: change.doc.id,
                            finish: _tmp.status ? _tmp.status : false,
                            email:  _tmp.email,
                            address: `${_tmp.address.street_address} ${_tmp.address.state} ${_tmp.address.zipcode}`,
                            method: "credit card",
                            amount: _tmp.amount,
                            specification: "None",
                            timestamp: _tmp.timestamp,
                            from: `${moment(_tmp.timestamp).fromNow()}`,
                            exact_time: `${moment(_tmp.timestamp).format('LLL')}`
                        }
                    }
                    
                }
            });
        });
    }
}
</script>

<style>
.icon-action{
    cursor: pointer;
}
#transaction_list{
    padding: 15px;
    overflow-x: scroll;
}

::-webkit-scrollbar {
    height: 5px;
    width: 5px;
}

::-webkit-scrollbar-track {
    background: transparent; 
}
::-webkit-scrollbar-thumb {
    background:#bfbfbf; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background:#a6a6a6; 
}
.table{
    border: solid 1px lightgrey;
    box-shadow: 0 0 5px lightgray;
}

.finish_td{
    text-align: center;
    font-size: 20px;
}

td:hover{
    background-color: #F8F8F8;
}
.btn-light{
    border: solid 1px #C8C8C8;
}
td{
    overflow-x: scroll;
}
.date_th:hover{
    cursor: pointer;
    background-color: white !important;
    color: #84c8ff !important;
    border-color: #84c8ff !important ;
}
</style>
