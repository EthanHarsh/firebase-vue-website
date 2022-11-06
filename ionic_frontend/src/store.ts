import { reactive } from 'vue';
import { cardBreakpoint } from './constants/breakpoints';

export const store = reactive({
    mobileSize: window.innerWidth < cardBreakpoint,
    updateMobileSize() {
        this.mobileSize = window.innerWidth < cardBreakpoint;
    }
})