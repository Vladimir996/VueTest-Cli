const state = {
    headerInfo: [],
    socialIcons: []
        // logoHeader: {
        //     url: 'https://i.imgur.com/JKlZTTJ.png'
        // }
}
const getters = {
    headerInfo: state => {
     return state.headerInfo;
    },
    socialIcons: state => {
        return state.socialIcons;
    },
}
const mutations = {
    setSocialIcons(state, payload) {
        state.socialIcons = payload
      },
      setHeaderInfo(state, payload) {
        state.headerInfo = payload
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