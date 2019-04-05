const state = {
    blogInfo: []
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

}

export default {
    state,
    mutations,
    getters,
    actions
}