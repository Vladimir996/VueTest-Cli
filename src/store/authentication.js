import firebase from 'firebase';
import 'firebase/auth';
const state = {
    user: null,
    username: null,

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
        id: user.uid,
        // username:'',
        }
        // db.collection('user')
        // .where('id', '==', newUser.id)
        // db.collection("users").doc().set({
        //     email: payload.email,
        //     username: payload.username,
        // }).then(() => {
        commit('setUser', newUser);
        })
        // });
    },
        logIn( {commit}, {email, password} ) {
            firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
            const newUser = {
            id: user.uid
            };
            commit('setUser', newUser);
            // ...
            });
},
autoSignIn({ commit }, payload) {
    commit('setUser', { id: payload.uid });
}
}
export default {
    state,
    mutations,
    getters,
    actions
}