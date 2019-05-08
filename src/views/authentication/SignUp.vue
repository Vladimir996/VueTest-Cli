<template>
<div>
    <div id="lineUp">
      <p>SIGN UP</p>
    </div>
    <div class="singIncontainer">
  <form @submit.prevent="signup" class="form">
    <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="text" class="form-control"  aria-describedby="Text" placeholder="Username"  v-model="username">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  v-model="email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"  v-model="password">
  </div>
  <div class="btn-sign">
  <button type="button" class="btn btn-primary" @click="signUp">Sign up</button>
  </div>
</form>
  </div>
</div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase';
import 'firebase/auth';
import { store } from '@/store/store'
export default {
    name: 'SignUp',
    data() {
        return {
            email: null,
            password: null,
            username: '',
        }
    },
     methods: {
        signUp() {
          this.$store.dispatch('createUser', {
               email: this.email,
               password: this.password,
              //  username: this.username
           })
          //  await  db.collection('user').add({
          //      name: this.name,    
          //  })
           this.$router.push({ path: '/' });
       },
},
 computed: {
    getUser() {
      return this.$store.getters.user;
    },
    userInfo(){
         return this.$store.getters.userInfo;
    },
    userName() {
      return this.$store.getters.userName;
    }
  },
//   created() {
//       db.collection('user').get()
//       .then(snapshot => {
//         const userName = []
//           snapshot.forEach(doc => {
//               userName.push(doc.data())
//             })
//           this.$store.commit('setUserName', userName)
//       })
// },
 signUp() {
           db.collection('user').add({
               name: this.name,    
           }).then(() => {
                  this.$router.push({ path: '/profile' }) 
               })
       },
}
</script>

<style>
.singIncontainer {
    width: 100%;
    height: 320px;
}
.form {
    margin-left: 700px;
    width: 500px;
    height: 270px;
}

#lineUp {
  width: 100%;
  height: 93px;
  background-color: #2ecc71;
  margin-bottom: 40px;
}
#lineUp p {
  font-size: 37px;
  font-weight: 500;
  color: white;
  margin-left: 480px;
  padding-top: 20px;
}
.btn-sign button{
  margin-bottom: 30px;
}
</style>
