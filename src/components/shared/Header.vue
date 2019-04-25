<template>
  <header>
    <div class="header container">    
       <img id="logo" :src="headerInfo[0].logoUrl">
      <div class="media-wide">
        <a v-for="(socialIcon, index) in socialIcons" :key="index" :href="socialIcon.url">
          <img :src="socialIcon.imgUrl">
        </a>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light container hide">
 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav link-list">
      <li class="nav-item active">
        <router-link to="/" exact>HOME</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" exact>ABOUT</router-link>
      </li>
      <li class="nav-item">
       <router-link to="/work" exact>WORK</router-link>
      </li>
      <li class="nav-item">
       <router-link to="/contact" exact>CONTACT</router-link>
      </li>
       <li class="nav-item">
       <router-link to="/blog" exact>BLOG</router-link>
      </li>
      <li class="nav-item">
       <router-link to="/login" exact>LOG IN</router-link>
      </li>
      <li class="nav-item">
       <router-link to="/signup" exact>SIGN UP</router-link>
      </li>
    </ul>
    <div class="media">
        <a v-for="(socialIcon, index) in socialIcons" :key="index" :href="socialIcon.url">
          <img :src="socialIcon.imgUrl">
        </a>
      </div>

  </div>
</nav>
      <div id="line"></div>
<nav class="navbar navbar-expand-lg navbar-light container sakrij">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav link-list">
      <li class="nav-item active">
        <router-link to="/" exact>HOME</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" exact>ABOUT</router-link>
      </li>
      <li class="nav-item">
       <router-link to="/work" exact>WORK</router-link>
      </li>
      <li class="nav-item">
       <router-link to="/contact" exact>CONTACT</router-link>
      </li>
      <li class="nav-item">
       <router-link to="/blog" exact>BLOG</router-link>
      </li>
       <li class="nav-item" id="profile">
       <router-link to="/profile" exact>{{ userInfo[0].name }}</router-link>
       <!-- <a v-if="user" :class="{ logout: user }"  to="/profile"> {{ userInfo[0].name }} </a> -->
      </li>
    </ul>
    </div>
    <div>
    <ul class="regist">
       <li v-if="!user" class="nav-item" id="singin">
       <router-link to="/login" exact>LOG IN</router-link>
      </li>
      <li v-if="!user" class="nav-item" id="singup">
       <router-link to="/signup" exact>SIGN UP</router-link>
      </li>
      <img class="user-photo" :src="userInfo[0].imgUrl" @click="userProfile">
       <!-- <a v-if="user" @click="logout" :class="{ logout: user }" >LOGOUT</a> -->
      <li class="nav-item">
        <a v-if="user" @click="logout" :class="{ logout: user }" >LOGOUT</a>
      </li>
    </ul>
    </div>
</nav>
    </div>
  </header>
</template>
<script>
import db from '@/firebase/init'
import firebase from 'firebase';
import 'firebase/auth';
export default {
  data() {
    return {
      homePhoto: ''
};
  },
  computed: {
    user() {
       return this.$store.getters.getUser !== null && this.$store.getters.getUser !== undefined;
    },
    headerInfo() {
      return this.$store.getters.headerInfo;
    },
    socialIcons() {
      return this.$store.getters.socialIcons;
    },  userInfo(){
         return this.$store.getters.userInfo;
       },
  },
  created() {
    db.collection("social-links").onSnapshot(snapshot => {
      const socialIcons = [];
      snapshot.docs.forEach(doc => {
        socialIcons.push(doc.data());
      });
      this.$store.commit("setSocialIcons", socialIcons);
    });
    db.collection("logo")
      .get()
      .then(snapshot => {
        const headerInfo = [];
        snapshot.forEach(doc => {
          headerInfo.push(doc.data());
        });
        this.$store.commit("setHeaderInfo", headerInfo);
      });
       db.collection('user').get()
      .then(snapshot => {
        const userInfo = []
          snapshot.forEach(doc => {
              userInfo.push(doc.data())
            })
          this.$store.commit('setUserInfo', userInfo)
      });
  },
  methods: {
    logout(){
           firebase.auth().signOut().then(() => {
               this.$store.commit('setUser', null);
               this.$router.push('/login');
           });
           
       },
       userProfile() {
         this.$router.push('/profile')
        }
  }
};
</script>

<style scoped>
  .hide {
  display: none;
}
  @media(max-width: 690px) {
  .sakrij {
    display: none;
  }
  .hide {
    display: inline;
  }
}
  @media(max-width: 490px) {
  .media-wide {
    display: none;
  }
   .media-wide img {
    margin-left: 100px;
  }  
}
.nav-item a {
   color: #737373;
   font-size: 17px;
}
.nav-item :hover {
  color: #2ecc71;
}
.router-link-active {
 color: #2ecc71 !important;
}
.logout {
  margin-top: 5px;
}
#profile {
  margin-left: 370px;
  margin-top: -20px;
}
.user-photo {
  width:50px;
  height: 50px;
  margin-left: -210px;
  margin-right: 320px;
  /* border-radius: 10px 100px / 120px; */
  border-radius: 100%;
  cursor: pointer;
}
</style>