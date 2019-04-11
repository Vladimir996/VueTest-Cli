import db from '../firebase/init'

const state = {
    blogInfo: null
}
const getters = {
    blogInfo: state => {
     return state.blogInfo;
    },
}
const mutations = {
    setBlogInfo(state, payload) {
        state.blogInfo = payload
      }
}
const actions = {
    getBlogs({ commit }) {
        db.collection('blog').get()
    .then(snapshot => {
        var blogInfo = []
      snapshot.forEach(doc => {
        blogInfo.push({...doc.data(), id:doc.id})
      })
      commit('setBlogInfo', blogInfo)

    })
 }
}

export default {
    state,
    mutations,
    getters,
    actions
}