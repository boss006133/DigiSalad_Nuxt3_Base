import { usePopupStore } from '~/store/popup'
import { action as actionPopup } from '@/constants/store/actions/popup'

export default defineNuxtPlugin((nuxtApp) => {
    const storePopup = usePopupStore()

    /* Nav popup */
    const NavIsShow = () => {
        return storePopup.isShow_Nav
    }
    const Nav = {
        show: () => {
            if (!NavIsShow()) storePopup[actionPopup.SET_POPUP_NAV_STATE](true)
        },
        close: () => {
            if (NavIsShow()) storePopup[actionPopup.SET_POPUP_NAV_STATE](false)
        },
        isShow: NavIsShow,
    }
    return {
        provide: {
            Nav,
        },
    }
})
