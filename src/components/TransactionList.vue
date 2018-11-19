<template>
    <div class="container" id="transaction_list">
        <table class="table">
        <thead class="thead-light">
            <tr>
                <th scope="col">Finish</th>
                <th scope="col">Invoice #</th>
                <th scope="col">Email</th>
                <th scope="col">Sepecification</th>
                <th scope="col">Address</th>
                <th scope="col">Method</th>
                <th>Amount</th>
                <th scope="col">Date</th>
            </tr>
        </thead>
        <tbody >
            <tr v-for="(item, key) in transactions" :key="key + Math.random()">
                <td>
                    <i class="far fa-square icon-action" v-if="item.finish" @click="setFinish(key)"></i>
                    <i class="far fa-check-square icon-action" v-else @click="setFinish(key)"></i>
                </td>
                <td>{{ item.invoiceNumber }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.specification }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.method }}</td>
                <td>{{ '$' + item.amount }}</td>
                <td>{{ item.date }}</td>
            </tr>
        </tbody>
        </table>
       
    </div>
</template>

<script>
export default {
    name: "TransactionList",
    data(){
        return {
            transactions: {
                QFRE123DQRfc3r423QSDAS: {
                    finish: false,
                    invoiceNumber: 123,
                    email: "123123@qq.com",
                    specification: "asdasasdas",
                    address: "qweqwqweqw ",
                    method: "credit card",
                    amount: 123,
                    date: "today"
                },
                QFRE123DQRfc3r4235463S: {
                    finish: true,
                    invoiceNumber: 123,
                    email: "123123@qq.com",
                    specification: "asdasasdas",
                    address: "qweqwqweqw ",
                    method: "credit card",
                    amount: 123,
                    date: "today"
                }
            }
        }
    },
    methods:{
        setFinish:function(id){
            var status = null;
            if (!this.transactions[id].finish)
                status = 'unfinished';
            else
                status = 'finished';
            swal({
                title: "Are you sure?",
                text:  "You want to set this transaction as " + status + "!?" ,
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then(willDelete => {
                if (willDelete){
                    swal("Success!", "You have set this transaction as " + status + "!", "success");
                    this.transactions[id].finish = !this.transactions[id].finish;
                }
            })
        }
    }
}
</script>

<style>
.icon-action{
    cursor: pointer;
}
#transaction_list{
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
</style>
