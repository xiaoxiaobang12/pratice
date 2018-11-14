// var example8=new Vue({
//     el:'#example-8',
//     data:{
//         picked:''
//     }
// })
// var example9=new Vue({
//     el:'#example-9',
//     data:{
//         selected:'A',
//         options:[
//             {text:'One',value:'A'},
//             {text:'Two',value:'B'},
//             {text:'Three',value:'C'}

//     ]
//     }
// })
// var example10=new Vue({
//     el:'#example-10',
//     data:{
//         picked:'no'
//     },
//     methods:{

//     }
// })
// var example11=new Vue({
//     el:'#example-11',
//     data:{
//         pick:'a',
//         a : [1,3,6]
//     },
//     methods:{
//         show:function(a){
//             this.pick ='a';
//         }
//     }
// })
// var example12=new Vue({
//     el:'#example-12',
//     data:{
//         selected:'4588',
//       number:'62',
//       number2:'alias'
//     }
// })
// var example15=new Vue({
//     el:'#example-15',
//     data:{
//         message:'12'
//     }
// })

// Vue.component('button-counter',{

//     data:function(){
//         return{
//             count:0
//         }
//     },

//     template:'<button v-on:click="count++">You clicked me {{count}} times.</button>'

// })

// var componentsdemo=new Vue({
//     el:'#components-demo'
// })
// Vue.component('blog-post', {
//     props: ['post'],
//     template: ` <div class="blog-post">
//                   <h3>{{ post.title }}</h3>
//                   <button v-on:click='$emit("enlarge-text",0.1)'> Enlarge text</button>
//                   <div v-html="post.content"></div>
//                   <div v-html="post.comments"></div>

//                 </div>
//              `


// })
// var example16 = new Vue({
//     el: '#blog-post-demo',
//     data: {
//         posts: [
//             { id: 1, title: 'My journey with Vue', content: 'dkeoudffoamcfask', comments: '非常好' },
//             { id: 2, title: 'Blogging with Vue', content: 'eer834cmre9ml', comments: '非常差' },
//             { id: 3, title: 'Why Vue is so fun', content: '4563w4324r65456o8', comment: '一般' }
//         ],
//         postFontSize: 1,

//     }
//     ,methods: {
//         enlarge: function (enlargeAmount) {
//             console.log(enlargeAmount)
//             this.postFontSize += enlargeAmount
//         },
//         test: function (aa) {
//             console.log(aa)
//         }}

// }
// created: function () {
//     // Alias the component instance as `vm`, so that we  
//     // can access it inside the promise function
//     var vm = this
//     // Fetch our array of posts from an API
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(function (response) {
//         return response.json()
//       })
//       .then(function (data) {
//         vm.posts = data
//       })
//   }
// })
Vue.component('my-component',{
    template:'<p class="baz zoo">Hi</p>'
})
var example=new Vue({
    el:'#example',
    data:{
        message:'erear',
        isActive:true,
        theStyle:{
            background:'red',
            fontSize:'68px'
        }
    }



   
})