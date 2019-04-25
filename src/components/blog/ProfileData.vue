<template>
   <div>
       <div class="container-blog">
        <div id="blog-green">
           <p>PROFILE DATA</p> 
        </div>
        <div class="new-post">
                  <p>First name:</p>
                  <input class="first-name" v-model='name' type="text" placeholder="Firste name">
                  <br>
                  <p>Profil photo:</p>
                  <input class="img-profile" v-model='imgUrl' type="text" placeholder="Profil photo(URL)">
                  <p>Biography:</p>
                  <textarea class="biography" v-model='biography'></textarea>
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
           name:null,
           biography: null,
           imgUrl:null,
       }
   },
//    beforeRouteEnter(to, from, next) {
//        const id = to.params.id;
//        store.dispatch('getUserPost', id);
//        setTimeout(() => {
//          next();
//        }, 400);
//    },
    methods:{
       savePost() {
           db.collection('user').add({
               name: this.name,    
               biography: this.biography,
               imgUrl: this.imgUrl,
           }).then(() => {
                  this.$router.push({ path: '/profile' }) 
               })
       },
   },
}
</script>

<style scoped>
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
.biography {
    margin-left: 450px;
    width: 500px;
    height: 200px;
}
</style>
