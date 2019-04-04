import firebase from 'firebase';
import 'firebase/auth';
const state = {
    user: null, 
}
const getters = {
    getUser: state => {
        return state.user;
    }
}
const mutations = {
    setUser(state, payload) {
        state.user = payload
      }
}
const actions = {
    createUser( {commit}, {email, password} ) {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
        const newUser = {
        id: user.uid
        };
        commit('setUser', newUser);
        });
        },
        logIn( {commit}, {email, password} ) {
            firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
            const newUser = {
            id: user.uid
            };
            commit('setUser', newUser);
            // ...
            });
}
}
export default {
    state,
    mutations,
    getters,
    actions
}