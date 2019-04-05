<template>
  <div>
      <div class="container-blog">
        <div id="blog-green">
           <p>BLOG</p> 
        </div>
        <router-link class="btn-post" tag="button"   @click="newPost()"  to="/blog/edit" exact >ADD NEW POST</router-link>
        <div class="post-list">
          <h3>{{ blogInfo[0].title }}</h3>
          <img :src="blogInfo[0].image">
           <p>{{ blogInfo[0].text }}</p>
        </div>
      </div>
  </div>
</template>
<script>
import db from '../firebase/init'
import { setTimeout } from 'timers';
export default {
 data(){
       return{
           headline:'My Pretty Blog',
           key:'',
          //  blogInfo:[],
           loading: true,

       }
   },
   computed:{
     blogInfo(){
       return this.$store.getters.blogInfo;
       }
   },
  //  created(){
  //    db.collection('blog').onSnapshot(res =>{
  //      const changes = res.docChanges();
  //      changes.forEach(change => {
  //        if(change.type === 'added'){
  //          this.blog.push({
  //            ...change.doc.data(),
  //            id: change.doc.id
  //          })
  //        }
  //      })
  //    })
  //  },
  created() {
    const blogInfo = []
    db.collection('blog').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        blogInfo.push(doc.data())
      })
    this.$store.commit('setBlogInfo', blogInfo)
    })
    setTimeout(() => {console.log(blogInfo)}, 2000)
    
  }
  //  methods:{
  //    newPost(){
  //      this.$router.push({path:'/blog/edit'})
  //    },
    //  ...mapMutations([
    //    'activeBlog'
    //  ])
  //  },
}
</script>

<style>
.container-blog {
    height: 1000px;
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
.post-list img {
  width: 300px;
  height: 200px;
  margin-left: 480px;
  margin-top: 20px;
}
.post-list h3 {
  margin-left: 480px;
  font-size: 29px;
  margin-top: 30px;
}
.post-list p {
  margin-left: 480px;
  width: 880px;
  margin-top: 20px;
}
</style>