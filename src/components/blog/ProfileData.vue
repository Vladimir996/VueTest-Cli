<template>
   <div>
       <div class="container-blog">
        <div id="blog-green">
           <p>PROFILE DATA</p> 
        </div>
        <div class="new-post">
                  <p>First name:</p>
                  <input class="first-name" v-model='title' type="text" placeholder="Firste name">
                  <br>
                  <p>Profil photo:</p>
                  <input class="img-profile" v-model='url' type="text" placeholder="Profil photo(URL)">
                  <p>Biography:</p>
                  <textarea class="tSextarea" name="ckeditor" id="ckeditor" v-model='text'></textarea>
                  <div><button class="btn btn-success" @click="savePost">SAVE</button></div> 
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
       savePost() {
           db.collection('user').add({
               title: this.title,    
               text: CKEDITOR.instances.ckeditor.getData(),
               url: this.url,
           }).then(() => {
                  this.$router.push({ path: '/profile' }) 
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
.first-name {
    margin-left: 450px;
    margin-bottom: 20px;
    width: 400px;
    height: 40px;
}
.img-profile {
    margin-left: 450px;
    margin-bottom: 20px;
    width: 400px;
    height: 40px;
}
.new-post p {
    margin-left: 450px;

    margin-bottom: -3px;
}
</style>
