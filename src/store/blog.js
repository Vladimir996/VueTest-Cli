import db from '../firebase/init'
import * as firebase from "firebase";

const state = {
    blogInfo: null,
    singlePost: [{
        title:''
    }
    ],
    true: true,
    sort: 'asc'
}
const getters = {
    blogInfo: state => {
     return state.blogInfo;
    },
    singlePost: state => {
        return state.singlePost;
    }
}
const mutations = {
    setBlogInfo(state, payload) {
        state.blogInfo = payload
      },
    setSinglePost(state, payload) {
        state.singlePost = payload
    },
    setTrue(state, payload){
        state.true = payload
    },
    setSort(state, payload){
        if(state.sort === 'asc'){
            return state.sort = 'desc'
        }else {
            return state.sort = 'asc'
        }
    }
}
const actions = {
    getBlogs({ commit, state }) {
        db.collection('blog').orderBy('date', state.sort).get()
    .then(snapshot => {
        var blogInfo = []
      snapshot.forEach(doc => {
        blogInfo.push({...doc.data(), id:doc.id})
      })
      commit('setBlogInfo', blogInfo)
    })
 },
 getSinglePost({ commit }, payload) {
     db.collection('blog')
     .where(firebase.firestore.FieldPath.documentId(), '==', payload).get()
     .then(snapshot => {
        var singlePost = []
      snapshot.forEach(doc => {
        singlePost.push({...doc.data(), id:doc.id})
      })
      commit('setSinglePost', singlePost)
   })
 },
 updatePost({ commit },payload) {
    db.collection('blog')
    .doc(payload.id).set({
        title: payload.post.title,
        text: payload.post.text,
        url: payload.post.url,
        date: payload.post.date,
     })
     .then(function() {
         dispatch('getBlogs')
     })
    commit('setTrue', false)
}
}
export default {
    state,
    mutations,
    getters,
    actions
}