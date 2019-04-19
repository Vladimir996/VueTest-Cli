<template>
   <div>
       <div class="container-blog">
        <div id="blog-green">
           <p>POST</p> 
        </div>
        <div class="new-post">
             <div><button class="btn btn-success" @click="backPost()">BACK</button></div> 
                  <h3  class="title-post" >{{ singlePost[0].title }}</h3>
                    <div id="line-blog"></div>
                <img class="url-post" :src="singlePost[0].url">
                <p class="text-post" v-html="singlePost[0].text"></p>
        </div>
   </div>
   </div>
</template>

<script>
import db from '@/firebase/init'
import { store } from '@/store/store'
export default {
    data(){
       return{
           title:null,
           text: null,
           url:null,
       }
   },
   beforeRouteEnter(to, from, next) {
       const id = to.params.id;
       store.dispatch('getSinglePost', id);
       setTimeout(() => {
         next();
       }, 400);
   },
   computed:{
     singlePost(){
       return this.$store.getters.singlePost;
       },
   },
   singlePostCreate() {
    this.$store.dispatch('getSinglePost')
  },
  methods: {
  backPost() {
    this.$router.push('/blog')
  }
  }
}
</script>

<style>
.container-blog {
    height: auto;
}
.title-post {
    margin-left: 480px;
    margin-bottom: 20px;
    width: 850px;
    margin-top: -60px;
}
.url-post {
    margin-left: 480px;
    margin-bottom: 20px;
    margin-top: 15px;
    width: 500px;
    height: 250px;
}
.text-post {
    margin-left: 480px;
    width: 900px;
}
.btn-success{
    margin-left: 1360px;
}
</style>
