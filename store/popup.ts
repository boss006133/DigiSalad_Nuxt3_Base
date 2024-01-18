import { defineStore } from 'pinia'
import { action as actionPopup } from '@/constants/store/actions/popup'

export const usePopupStore = defineStore('popup', {
    // 對應 data
    state: () => ({
        navIsShow: false,
    }),
    // 對應 computed (物件形式)
    getters: {
        isShow_Nav: (state) => state.navIsShow,
    },
    // 對應 methods (物件形式)
    actions: {
        [actionPopup.SET_POPUP_NAV_STATE](value) {
            const self = this
            self.navIsShow = value
        },
    },
})
