const state = {
    aboutInfo:[],
       
}
const getters = {
    aboutInfo: state => {
     return state.aboutInfo;
    },
}
const mutations = {
    setAboutInfo(state, payload) {
        state.aboutInfo = payload
      }
}
const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions
}