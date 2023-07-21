export const state = () => ({
  locales: ['en', 'de'],
  locale: 'de',
  isOpenContact: false,
  isNavClicked: false,
  isOpenTabletContact: false,
  isOpenMobileContact: false
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  SetOpenContact(state, value) {
    state.isOpenContact = value
  },
  SetNavClicked(state, value) {
    state.isNavClicked = value
  },
  SetOpenTabletContact(state, value) {
    state.isOpenTabletContact = value
  },
  SetOpenMobileContact(state, value) {
    state.isOpenMobileContact = value
  }
}

export const actions = {
  toggleContactModal({ state, commit }, value){
    commit('SetOpenContact', value)
  },
  setNavClicked({ state, commit }, value){
    commit('SetNavClicked', value)
  },
  toggleTabletContactModal({ state, commit }, value){
    commit('SetOpenTabletContact', value)
  },
  toggleMobileContactModal({ state, commit }, value){
    commit('SetOpenMobileContact', value)
  }
}