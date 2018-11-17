<template>
     <div >
            <!-- column 2 -->
            <p class="p-tab"> <i class="fa fa-braille"></i> <span id="item_tab" class="activeTab" @click="changeTab($event)">Item List</span> / <span id="transaction_tab" @click="changeTab($event)">Transcation List<span class="badge badge-pill  badge-danger ml-2">1</span></span> </p>
            <hr>

            <div class="row">
                <div class="col-md-8">
                    <div class="tab-content">
                            <div class="tab-pane active well" id="profile">
                            <table class="table">
                                <thead >
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col"><i class="fas fa-font pr-1"></i>Name</th>
                                    <th scope="col"><i class="far fa-list-alt pr-1"></i>Description</th>
                                    <th scope="col"><i class="fas fa-bars pr-1"></i>Category</th>
                                    <th scope="col"><i class="fas fa-palette pr-1"></i>Colors</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <template  v-for="key in product_data">
                                    <tr :key="key.id">
                                            <th scope="row" class="th-edit" ><i class="far fa-edit icon-edit" :id="key.id" @click.prevent="copy($event)"></i></th>
                                            <td><strong>{{ key.product_name }}</strong></td>
                                            <td class="text-over-overflow">{{ key.product_description }}</td>
                                            <td>{{ key.product_category }}</td>
                                            <td class="text-over-overflow" style="max-width: 50px">{{ arrToStr(key.product_colors) }}</td>
                                    </tr>
                                    </template>   
                                </tbody>
                            </table> 
                            </div>
                        </div>  
                </div>
                <!--/col-->
                <div class="col-md-4 ">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4><i class="fas fa-bullhorn mr-1"></i>Notices</h4></div>
                        <div class="panel-body">
                            <!--
                            <div class="alert alert-info">
                                <button type="button" class="close" data-dismiss="alert">×</button>
                                This is a dismissable alert.. just sayin'.
                            </div>-->
                            <p>Welcome to the Dashboard!</p>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Visits</th>
                                    <th>ROI</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>45</td>
                                    <td>2.45%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <i class="fa fa-undo animated rotateIn" style="float:right;cursor:pointer;" v-if="editMode" @click="back"></i>
                            <i class="fa fa-cog" style="float:right;cursor:pointer;" v-else></i>

                            <h4 class="card-title"><i :class="[editMode ? 'far fa-edit mr-1 animated rotateIn' : 'fas fa-folder-plus mr-1']">
                            </i>{{ editMode ? "Edit" : "Add"}} Item</h4>
                            <div class="panel-body">
                                <form class="form form-vertical">
                                    <fieldset disabled>
                                        <div class="control-group animated flipInX" v-if="editMode">
                                            <label>Product ID</label>
                                            <div class="controls" >
                                                <input type="text" class="form-control"  placeholder="Product Id" v-model="product_id" id="input_product_id" >
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div class="control-group mt-1 animated flipInX">
                                        <label>Product Name</label>
                                        <div class="controls">
                                            <input type="text" class="form-control" v-model="product_name" placeholder="Enter Name">
                                        </div>
                                    </div>
                                    <div class="control-group mt-1 animated flipInX">
                                        <label>Description</label>
                                        <div class="controls">
                                            <textarea class="form-control" v-model="product_description"></textarea>
                                        </div>
                                    </div>
                                    <div class="control-group mt-1 animated flipInX">
                                        <label>Category</label>
                                        <div class="controls">
                                            <select class="form-control"  v-model="product_category">
                                                <option disabled value="">Please select one</option>
                                                <option>Men</option>
                                                <option>Women</option>
                                                <option>Kid</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="animated flipInX" id='control-group'>
                                      <input type="checkbox" value="Gery" v-model="checked_colors">
                                      <label for="jack">Grey</label>
                                      <input type="checkbox" value="Brown" v-model="checked_colors">
                                      <label for="john">Brown</label>
                                      <input type="checkbox" value="Blue" v-model="checked_colors">
                                      <label >Blue</label>
                                      <input type="checkbox" value="Other" v-model="checked_colors">
                                      <label for="mike">Other</label>
                                      <br>
                                      <div v-if="checked_colors.length">
                                          Colors Seletcted: 
                                          <span v-for="(color, index) in checked_colors" :key="color + index">
                                          {{ color }}
                                          </span>
                                        </div>
                                    </div>
                                    <form>
                                      <div class="form-group animated flipInX">
                                          <div class="custom-file">
                                               <input type="file" class="custom-file-input" id="input-img" @change="fileselect"  multiple>
                                              <label class="custom-file-label" for="customFile"><span id="label-img">Choose file</span></label>
                                          </div>
                                          <div class="container mt-3">
                                                <small v-if="upload_status.length" >Upload status: 
                                                <div v-for="(status, index) in upload_status" :key="status + index"> 
                                                    <span :class="[status === 'Successed' ? 'float-left text-success' : 'float-left text-danger']">[{{ status }}]</span>
                                                </div>
                                                </small>
                                          </div>
                                          
                                          <div class="container mt-2 float-left" v-if="product_photos" style="padding-bottom:10px">
                                             <img v-for="(photo, key) in product_photos" :src="photo.link" :key="key" :id="key" class="img-thumbnail ml-2 uploaded-img  animated flipInX" style="width:100px; height:100px; display: inline-block;"/>
                                          </div>
                                      </div>
                                        <button class="btn btn-danger btn-block mt-3 animated flipInX" v-if="editMode" @click.prevent="deleteThisItem($event)">
                                            <i class="far fa-trash-alt pr-1"></i>Delete
                                        </button>
                                        <button class="btn btn-secondary btn-block mt-3 " @click.prevent="clear">
                                            <i class="fas fa-broom pr-1"></i>Clear
                                        </button>
                                        <button type="submit" :class="[editMode ? 'btn btn-info btn-block' : 'btn btn-primary btn-block']" @click.prevent="post_item">
                                            <i :class="[editMode ? 'fas fa-check pr-1' : 'fas fa-plus pr-1']"></i>{{editMode ? 'Save' : 'Add'}}
                                        </button>
                                    </form>
                              

                                </form>
                            </div>
                        
                        
                        </div>
                        <!--/panel content-->
                    </div>
                    <!--/panel-->

                </div>
                <!--/col-span-6-->

            </div>
            <!--/row-->
            <hr>

            <a href="#"><strong><i class="far fa-envelope mr-1"></i>mail </strong></a>
            <hr>
            <div class="row">
                <div class="col-md-12">
                    <ul class="list-group">
                        <li class="list-group-item"><a href="#"><small>(3 mins ago)</small> The 3rd page reports don't contain any links. Does anyone know why..</a></li>
                   
                    </ul>
                </div>
            </div>
        </div>
</template>

<script>
import firebase from '@/firebase/init'
const db = firebase.firestore()
export default {
    name: "Main",
    data(){
        return{
            activeTabs: ['#item_tab', '#transaction_tab'],
            product_id: null,
            product_name: null,
            product_description: null,
            product_category:"Default",
            checked_colors:[],
            product_data:[],
            product_keys:[],
            product_photos:{},
            upload_status:[],
            editMode: false
        }
    },
    methods:{
        post_item:function(){
            var self = this;
            var obj = {};
            obj["product_name"] = this.product_name;
            obj["product_description"] = this.product_description;
            obj["product_category"] = this.product_category;
            obj["product_colors"] = this.checked_colors;
            obj["created_by"] = (new Date).getTime();
            obj["product_photos"] = this.product_photos;
            /*
            for (var i = 0; i < this.product_photos.length; i++){
                obj["product_photos"][i] = encodeURIComponent(this.product_photos[i]);
            }*/
            if (this.product_name && this.product_description && this.product_category
               && this.product_photos && (!this.editMode || (this.editMode && this.product_id))){
                var callback = ()=> {
                    swal("Success!", "The data has been update!", "success").then(()=>{
                        $("#label-img").text("");
                        self.product_name = "";
                        self.product_description = "";
                        self.product_category = "";
                        self.checked_colors = [];
                        self.product_photos = [];
                        self.upload_status = [];   
                        location.reload();
                    }); 
                };
                var errorPrompt = (err)=> { swal("Failed!", "Please make sure the product id is correct, error message:" + err.message, "error");}
                if (this.editMode)
                    db.collection('item').doc(this.product_id).set(obj).then(callback).catch(err => {errorPrompt(err)});
                else
                    db.collection('item').add(obj).then(callback);
            }
            else 
                swal("Failed!", "You need to fill out all the entries", "error");
        },
        handleFiles:function(){
            var self = this;
            var files = document.querySelector("#input-img").files;
            const storageRef = firebase.storage().ref();
            for (var i = 0; i < files.length; i++)
            {
                var obj = {};
                obj['name'] = files[i].name;
                var uploadTask = storageRef.child('images/' + files[i].name).put(files[i]);

                uploadTask.on('state_changed', 
                  function(snapshot) {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                  }, function(error) {
                  switch (error.code) {
                    case 'storage/unauthorized':
                      upload_status.push("unauthorized error");
                      break;
                    case 'storage/canceled':
                      upload_status.push("upload cancelled");
                      break;
                    case 'storage/unknown':
                      upload_status.push("unknown error");
                      break;
                  }
                }, function() {
                  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                        self.upload_status.push("Successed");
                        obj['link'] = downloadURL;
                        self.product_photos[(new Date()).getTime()] = obj;
                  });
                });
            }
        },
        fileselect:function(){
            var string = $("#label-img").text();
            if (string.includes("Choose"))
                string = "";
            else
                string += ', ';
            for (var i = 0; i < $("#input-img").prop('files').length; i++)
            {
                if (i != 0)
                    string += ', ';
                string += $("#input-img").prop('files')[i].name;
            }
            $("#label-img").text(string);
            this.handleFiles();
       },
       clear:function(){
            this.product_name = "";
            this.product_description = "";
            this.product_category = "";
            this.checked_colors = [];
            this.product_photos = {};
            this.upload_status = [];
            $("#label-img").text("");
            document.querySelector("#input-img").value = "";
       },
       getBasename:function(str){
            return (str.substr(0, str.indexOf('.')));
       },
       copy: function(e){
           $('#' + e.target.id).select();
           document.execCommand("copy");
           var self = this;
           db.collection('item').doc(e.target.id).get().then((snapshot) => {
               if (snapshot.exists){
                   var temp = snapshot.data();
                   self.product_name = temp.product_name;
                   self.product_description = temp.product_description;
                   self.product_category = temp.product_category;
                   self.checked_colors = temp.product_colors;
                    self.product_photos = temp.product_photos;
                   /*
                   for (var key in temp.product_photos){
                       console.log(temp.product_photos[key])
                       self.product_photos.push(temp.product_photos[key]);
                   }*/
               }
           });
           this.editMode = true;
           this.product_id = e.target.id;
       },
       arrToStr(arr){
           var str = arr.toString();
           return str.replace(/[&\/\\#+()$~%.'":*?<>{}]/g, '');
       },
       back(){
           this.clear();
           this.editMode = false;
       },
       deleteThisItem: function(e){
           swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this item!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    db.collection('item').doc(this.product_id).delete().then(()=>{
                        swal("Success!", "This item has been deleted!", "success").then(()=>{
                            location.reload();
                        });
                    });
                }
            });
          
       },
       changeTab: function(e){
           for (var i = 0; i < this.activeTabs.length; i++)
            $(this.activeTabs[i]).removeClass('activeTab');
            $('#' + e.target.id).addClass('activeTab');
       }
    },
    created(){
         var self = this;
         db.collection('item').get().then(function(snapshot){
             snapshot.forEach(function(doc){
                var temp = doc.data();
                temp.id = doc.id;
                self.product_data.push(temp);
             });
         });

    },
}
</script>

<style scope>

.text-over-overflow{
    max-width: 200px;
    cursor: context-menu;
    position: relative;
    overflow-y: hidden;
    overflow-x: scroll;
}
.icon-edit{
    cursor: pointer;
}
.th-edit{
    max-width: 30px;
}
td:hover{
    background-color: rgba(0, 0, 0, 0.1);
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
#input_product_id:hover{
    cursor: no-drop;
}
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


