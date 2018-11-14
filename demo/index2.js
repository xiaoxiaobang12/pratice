// Vue.component('custom-input', {
//     props: ['value'],
//     template: `
//       <input
//         v-bind:value="value"
//         v-on:input="$emit('input', $event.target.value)"
//       >
//     `
//   })


// var example17=new Vue({
//     el:'#example-17',
//     data:{
//         searchText:'[tttt]',
        
//     },
//     methods:{
        

//     }
// })
// Vue.component('alert-box',{
//     template:`
//       <div class='demo-alert-box'>
//       <strong>Error!</strong>
//       <slot>    </slot>
//       </div>
//     `
// })
// var example18=new Vue({
//     el:'#example-18',
//     data:{

//     }
// })
var tabs=[{
    name:'Home',
    component:{
        template:`<div>Home component</div>`
    }
}
,
{
    name:'Posts',
    component:{
        template:`<div>Posts component</div>`
    }

},
{
    name:'Archive',
    component:{
        template:`<div>Archive component </div>`
    }
}]
// Vue.component('tab-home',{
//     template:`<div>Home component</div>`
// })
// Vue.component('tab-posts',{
//     template:`<div>Posts component</div>`
// })
// Vue.component('tab-archive',{
//     template:`<div>Archive component</div>`
// })
var dynamiccomponentdemo=new Vue({
   el:'#dynamic-component-demo',
   data:{
       tabs:tabs,
       currentTab:tabs[0]
    //    tabs:['Home','Posts','Archive']
    }
    // ,
//    computed:{
//        currentTabComponent:function(){
//            return 'tab-'+this.currentTab.toLowerCase()
//        }
//    }

})