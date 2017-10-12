<template> 
    <div>
        <h2>加减法计算器</h2>
        <div>
            <input type="button" value="-" @click="minHandle"/>
                <span>{{num}}</span>
            <input type="button" value="+" @click="addHandle"/>
                <div>{{num2}}</div>
        </div>
    </div>
</template>
<script>
    import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'

    export default {
        // data(){
        //     return {
        //         // num:100
        //         num: this.$store.state.num,
        //     }
        // },
        // computed:{
        //     num(){
        //         return this.$store.state.num
        //     },
        //     num2(){
        //         // return this.num > 120 ? 120 : this.num
        //         return this.$store.getters.filterNum
        //     }
        // },
        computed:{
            ...mapState(['num']),
            // num2:111
            ...mapGetters({
                num2:'filterNum'
            })
        },
        // computed:mapState({
        //     // num:state => state.num
        //     // num:'num'
        //     num(state){
        //         return state.num + 50
        //     }
        // }),
        methods:{
            addHandle(){
                // this.num += 5;
                // 点击的时候需要改变状态，提交mutation addIncrement
                // 利用$store.commit 里面 写参数相当于 mutation的函数名字
                // this.$store.commit("addIncrement",{name:'stark',age:18,n:5})
                // this.$store.commit({
                //     type:"addIncrement",
                //     n:5,
                //     age:18,
                //     name:'stark.wang'
                // })

                this.$store.dispatch("addAction");

            },
            minHandle(){
                // this.num -= 5;
                this.$store.commit("minIncrement")
                // this.$store.         
            }
        }
    }
</script>