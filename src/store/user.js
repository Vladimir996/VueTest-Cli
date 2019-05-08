import db from '../firebase/init'
import * as firebase from "firebase";

const state = {
    userInfo: [{
        name:'',  
        imgUrl:'',
        biography:''
    }
    ],
    userName: [{
        name:''
    }]
}
const getters = {
    userInfo: state => {
        return state.userInfo;
    },
    userName: state => {
        return state.userName;
    }
}
const mutations = {
    setUserInfo(state, payload) {
        state.userInfo = payload
    },
    setUserName(state, payload) {
        state.userName = payload
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
    // updatePost({ commit },payload) {
    //     db.collection('user')
    //     .doc(payload.id).set({
    //         biography: payload.biography,
    //         imgUrl: payload.imgUrl,
    //      })
    // }
}
export default {
    state,
    mutations,
    getters,
    actions
}