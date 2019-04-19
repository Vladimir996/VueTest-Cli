<template>
   <div>
       <div class="container-blog">
        <div id="blog-green">
           <p>PROFILE</p> 
        </div>
        <div class="new-post">
             <div><button class="btn btn-successs" @click="editProfile()">EDIT PROFILE</button></div> 
                 <h3  class="title-post" >{{ userInfo.title }}</h3>
                 <div id="line-blog"></div>
                <img class="url-post" :src="userInfo.url">
                <p class="text-post" v-html="userInfo.text"></p>
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
           title:'',
           text: '',
           url:'',
       }
   },
    computed:{
      userInfo(){
         return this.$store.getters.userInfo;
       },
   },
beforeCreate() {
    this.$store.dispatch('getuser')
  },
  methods: {
editProfile() {
    this.$router.push('/profiledata')
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
    width: 850px;
    margin-top: -60px;
}
.url-post {
    margin-left: 480px;
    margin-bottom: 20px;
    margin-top: 15px;
    width: 300px;
    height: 200px;
}
.text-post {
    margin-left: 480px;
    width: 900px;
}
.btn-success{
    margin-left: 1360px;
}
.btn-successs{
    margin-left: 1300px;
    background-color: #28a745;
    color: white;
}
</style>