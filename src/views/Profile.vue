<template>
   <div>
       <div class="container-blog">
        <div id="blog-green">
           <p>PROFILE</p> 
        </div>
        <div class="new-postt">
             <div><button class="btn btn-successs" @click="editProfile()">EDIT PROFILE</button></div> 
                 <h3  class="title-post" >{{ userInfo[0].name }}</h3>
                 <div id="line-blog"></div>
                <img class="url-post text-center" :src="userInfo[0].imgUrl">
                <p class="text-post text-center" v-html="userInfo[0].biography"></p>
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
           name:'',
           biography: '',
           imgUrl:'',
       }
   },
    computed:{
      userInfo(){
         return this.$store.getters.userInfo;
       },
   },
   created() {
      db.collection('user').get()
      .then(snapshot => {
        const userInfo = []
          snapshot.forEach(doc => {
              userInfo.push(doc.data())
            })
          this.$store.commit('setUserInfo', userInfo)
      })
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
    margin: 20px auto;
    width: 250px;
    height: 250px;
    border-radius: 100%;
    border-color: #28a745;
}
.text-post {
    margin: 0 auto;
    margin-bottom: 30px;
    width: 750px;
    text-align: left !important;
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