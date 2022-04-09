
import {createStore} from 'vuex';

export const store = createStore({
    state: {
        count: 1,
    },
    mutations: {
        addCount(state) {
            state.count++;
        },
    },
    getters: {
        getCount: state => {
            return state.count;
        },
    },
})