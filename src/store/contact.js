const state = {
    contactInfo: []
}
const getters = {
    contactInfo: state => {
     return state.contactInfo;
    },
}
const mutations = {
    setContactInfo(state, payload) {
        state.contactInfo = payload
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