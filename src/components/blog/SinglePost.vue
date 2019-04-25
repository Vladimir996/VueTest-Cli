<template>
   <div>
       <div class="container-blog">
        <div id="blog-green">
           <p>POST</p> 
        </div>
        <div class="new-postt">
             <div><button class="btn btn-success btn-back" @click="backPost()">BACK</button></div> 
                  <h3  class="title-post" >{{ singlePost[0].title }}</h3>
                    <div id="line-blog"></div>
                <img class="urll-post" :src="singlePost[0].url">
                <p class="textt-post" v-html="singlePost[0].text"></p>
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
.urll-post {
    margin-left: 480px;
    margin-bottom: 20px;
    margin-top: 15px;
    width: 500px;
    height: 250px;
}
.textt-post {
    margin-left: 470px;
    width: 900px;
    margin-bottom: -3px;
}
.new-post button {
    margin-left: 1360px;
}
.new-postt {
    margin-left: 10px;
    margin-bottom: -6px;
}
</style>
