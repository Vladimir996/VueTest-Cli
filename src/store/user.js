import db from '../firebase/init'
// import * as firebase from "firebase";

const state = {
    userInfo: [{
        name:'',  
        imgUrl:'',
        biography:''
    }
    ],
}
const getters = {

    userInfo: state => {
        return state.userInfo;
    }
}
const mutations = {
    setUserInfo(state, payload) {
        state.userInfo = payload
    }
}
const actions = {
    // getUserPost({ commit }, payload) {
    //     db.collection('user')
    //     .where(firebase.firestore.FieldPath.documentId(), '==', payload).get()
    //     .then(snapshot => {
    //        var userInfo = []
    //      snapshot.forEach(doc => {
    //        userInfo.push({...doc.data(), id:doc.id})
    //      })
    //      commit('setUserInfo', userInfo)
    //   })
    // },
}
export default {
    state,
    mutations,
    getters,
    actions
}