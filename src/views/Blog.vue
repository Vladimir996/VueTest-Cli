<template>
  <div>
      <div class="container-blog">
        <div id="blog-green">
           <p>BLOG</p> 
        </div>
        <router-link class="btn-post" tag="button" @click="newPost()" to="/blog/newpost" exact >ADD NEW POST</router-link>
       <div v-if="blogInfo">
       <div  v-for="post in blogInfo" :key="post.id" class="z-hovr">
           <button type="button" class="close" aria-label="Close" @click="deletePost(post.id)">
          <span aria-hidden="true">&times;</span>
         </button>
        <div class="post-list">
          <h3>{{ post.title }}</h3>
          <div class="post-blog">
          <img :src="post.url" class="img-blog">
           <p v-html="post.text"></p>
           </div>
           <router-link class="edit-btn" tag="button" :to="{ path: 'blog/editpost/' + post.id}"  exact >EDIT</router-link>
           <div id="line-blog"></div>
        </div>
        </div>
        </div>
        <button id="load-btn">Load more</button>
      </div>
  </div>   
  
</template>
<script>
import db from '@/firebase/init'
import { setTimeout } from 'timers';
export default {
   computed:{
     blogInfo(){
       return this.$store.getters.blogInfo;
       },
   },
  beforeCreate() {
    this.$store.dispatch('getBlogs')
  },
  methods: {
     deletePost(id) {
       db.collection("blog").doc(id).delete();
         this.$store.dispatch('getBlogs')
       },
  }
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
#line-blog {
  width: 960px;
  height: 2px;
  background-color: #2ecc71;
  margin: 10px auto auto auto;
}
.btn-post {
  margin-left: 1240px;
  width: 180px;
  height: 40px;
  background-color: #2ecc71;
  color: white;
  font-size: 21px;
  font-weight: 600;
  border: none;
}
.img-blog {
  width: 350px;
  height: 250px;
  margin-left: 480px;
  margin-top: 20px;
}
.post-list h3 {
  margin-left: 480px;
  font-size: 26px;
  margin-top: 10px;
  width: 1000px;
}
.post-list p {
  margin-left: 15px;
  width: 565px;
  height: 250px;
  margin-top: 15px;
  overflow-y: scroll; 
  overflow-x: hidden;
}
.post-blog {
  display: inline;
  display: flex;  
}
#load-btn {
  margin-left: 850px;
  width: 180px;
  height: 45px;
  background-color: #2ecc71;
  color: white;
  font-size: 23px;
  font-weight: 600;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 7%;
}
.edit-btn {
  margin-left: 1370px;
  background-color: #2ecc71;
  color: white;
  border: none;
  font-weight: 500;
}
.close {
  margin-right: 490px;
}
.close:hover {
  color: red;
}
</style>