<template>
   <div>
       <div class="container-blog">
        <div id="blog-green">
           <p>ADD NEW BLOG POST</p> 
        </div>
        <div class="new-post">
                  <input class="ck-title" v-model='title' type="text" placeholder="Title">
                       <br>  
                  <input class="ck-url" v-model='url' type="text" placeholder="URL">
                  <textarea class="tSextarea" name="ckeditor" id="ckeditor" v-model='text'></textarea>
              
                  <div><button class="btn btn-success" @click="addPost">ADD POST</button></div>
        </div>
   </div>
   </div>
</template>


<script>
import db from '@/firebase/init'
export default {
    data(){
       return{
           moment:moment,
           title:'',
           text: null,
           url:'',
           src:true,

       }
   },
     mounted(){
       CKEDITOR.replace( 'ckeditor' )
   },
    methods:{
       addPost() {
           db.collection('blog').add({
               title: this.title,
               
               text: CKEDITOR.instances.ckeditor.getData(),
               url: this.url,
           }).then(() => {
                  this.$router.push({ path: '/blog' }) 
               })
       },
   },
//    created() {
      
//       console.log(this.$route.params);
//    }
}
</script>

<style>
.container-blog {
    height: auto;
}
#blog-green {
 width: 100%;
  height: 93px;
  background-color: #2ecc71;
  margin-bottom: 40px;
}
#blog-green p {
    font-size: 37px;
  font-weight: 500;
  color: white;
  margin-left: 480px;
  padding-top: 20px;
}
#cke_ckeditor {
 width: 1000px;
 margin-left: 450px;
}
.btn-success {
    margin-left: 450px;
    margin-top: 30px;
    margin-bottom: 20px;
}
.ck-title {
    margin-left: 450px;
    margin-bottom: 20px;
    width: 600px;
    height: 40px;
}
.ck-url {
    margin-left: 450px;
    margin-bottom: 20px;
    width: 600px;
    height: 40px;
}
</style>
