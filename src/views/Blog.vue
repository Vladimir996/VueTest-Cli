<template>
  <div>
    <div id="blog-green">
        <p>BLOG</p>
      </div>
    <div class="container-blog">
      <router-link
        class="btn-post"
        tag="button"
        @click="newPost()"
        to="/blog/newpost"
        exact
      >ADD NEW POST</router-link>
      <div v-if="blogInfo">
        <button @click="sort"><img class="sort-btn" src="https://img.icons8.com/color/48/000000/sorting-arrows.png"></button>
        <div v-for="post in blogInfo" :key="post.id" class="z-hovr">
          <button
            type="button"
            class="close"
            aria-label="Close"
            data-toggle="modal"
            data-target="#deleteBlog"
            @click="deletePost(post.id, post.title)"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="post-list">
            <router-link class="title-btn" :to="{ path: 'blog/singlepost/' + post.id}">
              <h3>{{ post.title }}</h3>
            </router-link>
            <div class="post-blog">
              <router-link class="img-blog" :to="{ path: 'blog/singlepost/' + post.id}">
             <img :src="post.url" class="img-blog" :to="{ path: 'blog/singlepost/' + post.id}">
            </router-link>
              <p v-html="post.text.substring(0,120)+'...'"></p>
              <!-- <p> {{ post.text | truncate(100) }} </p> -->
            </div>
            <div class="formatDate">
              <p>{{ formatDate(post.date) }}</p>
            </div>
            <div class="container">
              <div class="btnn row d-flex justify-content-end">
                <!-- <router-link class="single-btn col-1" tag="button" :to="{ path: 'blog/singlepost/' + post.id}"  exact >SINGLE POST</router-link> -->
                <router-link
                  class="edit-btn col-1"
                  tag="button"
                  :to="{ path: 'blog/editpost/' + post.id}"
                  exact
                >EDIT</router-link>
              </div>
            </div>
            <div id="line-blog"></div>
          </div>
        </div>
      </div>
      <button id="load-btn">Load more</button>
      <Prompt :title="blogTitle" :id="id"></Prompt>
    </div>
  </div>
</template>
<script>
import db from "@/firebase/init";
import { setTimeout } from "timers";
import Prompt from "../components/shared/Prompt.vue";
import moment from "moment";
export default {
  data() {
    return {
      blogTitle: "",
      id: "",
    };
  },
  components: {
    Prompt
  },
  computed: {
    blogInfo() {
      return this.$store.getters.blogInfo;
    }
  },
  beforeCreate() {
    this.$store.dispatch("getBlogs");
  },
  methods: {
    deletePost(id, title) {
      this.id = id;
      this.blogTitle = title;
    },
    formatDate(date) {
      return moment(date).format("DD/MM/YYYY");
    },
    sort(){
      this.$store.commit('setSort')
      this.$store.dispatch('getBlogs')

    }
  }
}
</script>

<style>
.container-blog {
   width: 970px;
  margin-left: 480px;
  height: auto;
}
.btn-post {
  margin-left: 780px;
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
  margin-top: 10px;
}
.post-list h3 {
  font-size: 26px;
  margin-top: 10px;
  width: 950px;
}
.post-list p {
  margin-left: 15px;
  width: 565px;
  height: 250px;
  margin-top: 15px;
  /* overflow-y: scroll; 
  overflow-x: hidden; */
  /* overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical; */
}
.post-blog {
  display: inline;
  display: flex;
}
#load-btn {
  margin-left: 400px;
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
  margin-right: 10px;
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
.formatDate p {
  height: 18px;
  margin-left: -5px;
  margin-top: -7px;
  margin-bottom: -20px;
}
.sort-btn {
  width: 20px;
  padding: 0;
  border: none;
  cursor: pointer;
}
.sort-btn button {
   color: red;
}
</style>