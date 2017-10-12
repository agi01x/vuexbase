import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        num: 100
    },
    getters: {
        filterNum(state) {
            return state.num >= 120 ? 120 : state.num
        }
    },
    mutations: {
        // 任何时候改变state的状态都通过提交 mutation 来改变
        // 里面可以定义多个函数，当触发这个函数就会改变state状态
        addIncrement(state, stark) {
            console.log(stark);
            // 接收一个state作为参数， 相当于上面的state
            // 模拟异步，状态会发生混乱
            // 页面的数据和这个里面的数据不一致，
            // 当我们在这里请求接口的时候，会发生异步，会出现问题

            // mutations设计原则是同步的
            // setTimeout(() => {
            state.num += stark.n;
            // }, 1000)

        },
        minIncrement(state) {
            state.num -= 5;
        }
    },
    actions: {
        // addAction(context) {
        //     // context 是一个对象
        //     setTimeout(() => {
        //         context.commit('addIncrement', { n: 5 })
        //             // context.dispatch('shudongAction')
        //         context.dispatch('shudongAction', { name: 'stark', age: 18, sex: 'man' })
        //     }, 1000)
        // },
        // 可以利用es6的解构赋值的方式来操作
        addAction({ commit, dispatch }) {
            setTimeout(() => {
                commit('addIncrement', { n: 5 })
                dispatch('shudongAction', { name: 'stark', age: 18, sex: 'man' })
            }, 1000)
        },
        shudongAction(context, stark) {
            console.log(stark);
            console.log(stark.name);
            console.log("hi stark");
        }
    }
})

export default store