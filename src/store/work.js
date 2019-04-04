const state = {
    projects: []
}
const getters = {
    getProjects: state => {
        return state.projects;
      }    
}
const mutations = {
  setProjects(state, payload) {
    state.projects = payload
  }

}
const actions = {

}

export default {
    state,
    mutations,
    actions,
    getters
}