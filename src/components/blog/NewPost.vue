<template>
  <div>
    <div id="blog-green">
      <p>ADD NEW BLOG POST</p>
    </div>
    <div class="container-new">
      <div class="new-post">
        <p>Title</p>
        <input class="ck-title" v-model="title" type="text" placeholder="Title">
        <p>Photo URL</p>
        <input class="ck-url" v-model="url" type="text" placeholder="URL">
        <p>Date</p>
        <datepicker v-model="date" name="uniquename" class="date-picker"></datepicker>
        <p>{{ date | formatDate}}</p>
        <p>Text</p>
        <textarea class="tSextarea" name="ckeditor" id="ckeditor" v-model="text"></textarea>
         <div class="all-btn">
        <div class="button-new">
          <button class="btn btn-success btn-back" @click="backPost()">BACK</button>
        </div>
        <div class="btn-new">
          <button class="btn btn-success" @click="addPost">ADD POST</button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import Datepicker from "vuejs-datepicker";
import moment from "moment";
export default {
  components: {
    Datepicker
  },
  data() {
    return {
      title: null,
      text: null,
      url: null,
      date: ""
    };
  },
  mounted() {
    CKEDITOR.replace("ckeditor");
  },
  methods: {
    addPost() {
      db.collection("blog")
        .add({
          title: this.title,
          text: CKEDITOR.instances.ckeditor.getData(),
          url: this.url,
          date: moment(this.date)
            .utc()
            .startOf("day")
            .format()
        })
        .then(() => {
          this.$router.push({ path: "/blog" });
        });
    },
     backPost() {
      this.$router.push("/blog");
    },
  }
};
</script>

<style>
.container-new {
  width: 970px;
  margin-left: 480px;
  height: auto;
}
.btn-new button {
  margin-top: 30px;
  margin-bottom: 20px;
  margin-left: 800px;
}
.ck-title {
  margin-bottom: 20px;
  width: 600px;
  height: 40px;
}
.ck-url {
  margin-bottom: 20px;
  width: 600px;
  height: 40px;
}
.new-post p {
  margin-bottom: -3px;
}
.button-new button{
    margin-left: 0;
    margin-top: 30px
}
.all-btn {
    display: flex;
}
</style>
