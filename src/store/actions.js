export default {
    updateName({commit}, value) {
        commit('setName', value)
    },
    updatePosition({commit}, value) {
        commit('setPosition', value)
    },
    updateEmail({commit}, value) {
        commit('setEmail', value)
    },
    updateProfileImage({commit}, value) {
        commit('setProfileImage', value)
    }
}