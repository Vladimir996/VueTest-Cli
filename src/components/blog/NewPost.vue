<template>
   <div>
       <div class="container-blog">
        <div id="blog-green">
           <p>ADD NEW BLOG POST</p> 
        </div>
        <div class="new-post">
                       <textarea class="textarea" name="ckeditor" id="ckeditor" v-model='text'></textarea>
                       <div class="afterbtn"><button class="btn btn-success" @click="addPost">ADD POST</button></div>
        </div>
   </div>
   </div>
</template>


<script>
// import db from '@/firebase/init'
export default {
     mounted(){
       CKEDITOR.replace( 'ckeditor' )
   },
   methods: {
       addPost() {
           const slug = this.generateUUID()
           db.collection('blog').add({
               title: this.title,
               text: CKEDITOR.instances.ckeditor.getData(),
               text: this.text,
           })
        //    .then((docRef) =>{
        //         this.$router.push(`blog/${slug}/success`)
        //        })
           .catch((error) => console.error('Error adding document: ', error))
           if(!this.$v.$invalid){
               alert('Blog is added.')
           }
       },
   }
   
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
#ckeditor {
    width: 500px;
}
</style>
