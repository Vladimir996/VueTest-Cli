<template>
   <div>
       <div class="container-blog">
        <div id="blog-green">
           <p>EDIT BLOG POST</p> 
        </div>
        <div class="new-post">
                  <p>Title</p>
                  <input class="ck-title" v-model='singlePost[0].title' type="text" placeholder="Title">
                  <p>Photo URL</p> 
                  <input class="ck-url" v-model='singlePost[0].url' type="text" placeholder="URL images">
                  <!-- <p>Date</p>
                   <datepicker v-model="date" name="uniquename" class="date-picker"></datepicker>
                    <p>{{ date | formatDate}}</p> -->
                  <p>Text</p>
                  <textarea name="ckeditor" id="ckeditor" v-model='singlePost[0].text'></textarea>
                  <div><button class="btn btn-success" @click="editPost()">SAVE</button></div>
        </div>
   </div>
   </div>
</template>

<script>
import db from '@/firebase/init';
import { store } from '@/store/store';
// import moment from 'moment';
export default {
    data(){
       return{
           title:null,
           text: null,
           url:null,
           date: '',
       }
   },
   beforeRouteEnter(to, from, next) {
       const id = to.params.id;
       store.dispatch('getSinglePost', id);
       setTimeout(() => {
         next();
       }, 400);
   },
     mounted(){
       CKEDITOR.replace( 'ckeditor' )
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
  editPost() {
    const postText = CKEDITOR.instances.ckeditor.getData();
    this.$store.dispatch('updatePost', {id: this.$route.params.id, post:{
      title: this.singlePost[0].title,
      text: postText,
      url: this.singlePost[0].url,
      // date:moment(this.date).utc().startOf('day').format(), 
    }})
    .then(this.$router.push('/blog'))
  }
  }
}
</script>

<style scoped>
.container-blog {
    height: auto;
}
#cke_ckeditor {
 width: 1000px;
 margin-left: 450px;
}
.btn-success {
    margin-left: 450px;
    margin-top: 30px;
    margin-bottom: 20px;
}
.ck-title {
    margin-left: 450px;
    margin-bottom: 20px;
    width: 600px;
    height: 40px;
}
.ck-url {
    margin-left: 450px;
    margin-bottom: 20px;
    width: 600px;
    height: 40px;
}
.new-post p {
  margin-left: 450px;
  margin-bottom: -3px;
}
</style>
