<template>
  <div>
      <div class="container-blog">
        <div id="blog-green">
           <p>BLOG</p> 
        </div>
        <router-link class="btn-post" tag="button" @click="newPost()" to="/blog/newpost" exact>ADD NEW POST</router-link>
       <div v-if="blogInfo">
       <div  v-for="post in blogInfo" :key="post.id" class="z-hovr">
           <button type="button" class="close" aria-label="Close" data-toggle="modal" data-target="#deleteBlog" @click="deletePost(post.id, post.title)">
          <span aria-hidden="true">&times;</span> 
         </button>
        <div class="post-list">
           <router-link class="title-btn" :to="{ path: 'blog/singlepost/' + post.id}"> <h3>{{ post.title }}</h3> </router-link>
          <div class="post-blog">
          <img :src="post.url" class="img-blog">
           <p v-html="post.text"></p>
           </div>
           <div class="container">
            <div class="btnn row d-flex justify-content-end">
              <!-- <router-link class="single-btn col-1" tag="button" :to="{ path: 'blog/singlepost/' + post.id}"  exact >SINGLE POST</router-link> -->
              <router-link class="edit-btn col-1" tag="button" :to="{ path: 'blog/editpost/' + post.id}"  exact >EDIT</router-link>
            </div>
           </div>
           <div id="line-blog"></div>
        </div>
        </div>
        </div>
        <button id="load-btn">Load more</button>
        <Prompt :title="blogTitle" :id="id" > </Prompt>
      </div>
  </div>   
  
</template>
<script>
import db from '@/firebase/init'
import { setTimeout } from 'timers';
import Prompt from "../components/shared/Prompt.vue";
export default {
  data() {
    return{
       blogTitle: '',
       id: ''
    }
  },
  components: {
    Prompt
  },
   computed:{
     blogInfo(){
       return this.$store.getters.blogInfo;
       },
   },
  beforeCreate() {
    this.$store.dispatch('getBlogs')
  },
  methods: {
     deletePost(id, title) {
      //  db.collection("blog").doc(id).delete();
      //    this.$store.dispatch('getBlogs')
      this.id = id;
      this.blogTitle = title;
      // console.log(id, title)
       },
  }
}
</script>

<style>
.container-blog {
    height: auto;
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
  /* overflow-y: scroll; 
  overflow-x: hidden; */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
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
  background-color: #2ecc71;
  color: white;
  border: none;
  font-weight: 500;
  margin-right: 7px;
}
.single-btn {
  background-color: #2ecc71;
  color: white;
  border: none;
  font-weight: 900;
  font-size: 12px;
  margin-right: 5px;
}
.close {
  margin-right: 490px;
}
.close:hover {
  color: red;
}
.title-btn {
  text-decoration: none;
  color: black;
}
.title-btn:hover {
    text-decoration: none;
    color: #2ecc71;
}
</style>