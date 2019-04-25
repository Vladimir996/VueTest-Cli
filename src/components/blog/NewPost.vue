<template>
   <div>
       <div class="container-blog">
        <div id="blog-green">
           <p>ADD NEW BLOG POST</p> 
        </div>
        <div class="new-post">
                 <p>Title</p>
                  <input class="ck-title" v-model='title' type="text" placeholder="Title">
                 <p>Photo URL</p>  
                  <input class="ck-url" v-model='url' type="text" placeholder="URL">
                  <p>Text</p>
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
           title:null,
           text: null,
           url:null,
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
}
</script>

<style>
.container-blog {
    height: auto;
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
.new-post p {
    margin-left: 450px;
    margin-bottom: -3px;
}
</style>
