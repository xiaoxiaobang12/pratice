// Vue.component('blog-post', {
//   props: ['post'],
//   template: `
//     <div class="blog-post">
//       <h3>{{ post.title }}</h3>
//       <button>
//         Enlarge text
//       </button>


//       <div v-html="post.content"></div>
//     </div>
//   `
// })
// var example1 = new Vue({
//   el: '#example-1',
//   data: {
//     items: [
//       { message: 'Foo' },
//       { message: 'Bar' },

//     ]
//   }
// })
// example1.items.push({ message: 'Baz' })


// Vue.component('todo-item', {
//   template: '\
//   <li>\
//   {{title}}\
//   <button @click="$emit(\'remove\')">Remove</button>\
//   </li>\
//   ',
//   props: ['title']
// })
// new Vue({
//   el: '#todo-list-example',
//   data: {
//     newTodoText: '',
//     todos: [{
//       id: 1,
//       title: 'Take out the trash',
//     },
//     {
//       id: 2,
//       title: 'Do the dishes',
//     },
//     {
//       id: 3,
//       title: 'Mow the lawn'
//     }
//     ],
//     nextTodoId: 4
//   },
//   methods: {
//     addNewTodo: function () {
//       this.todos.push({
//         id: this.nextTodoId++,
//         title: this.newTodoText
//       })
//       this.newTodoText = ''
//     }
//   }
// })
var example3 = new Vue({
  el: '#example-3',
  data: {
    name: 'Vue js'
  },
  methods: {
    say: function (message) {
      alert(message)
    },
    warn: function (message, event) {
      console.log(event);
      //  if (event){
      //     event.preventDefault();

      //   }
      alert(message)
    }
  }
})
var example4 = new Vue({

  el: '#example-4',
  data: {
    message: ''
  },
  methods: {
    show: function () {
      alert(this.message)
    }

  }
})
var example5 = new Vue({
  el: '#example-5',
  data: {
    checked: false,

  }
})


var example = new Vue(
  {
    el: '#example',

    data: {
      loginType: 'username'
    },
    methods: {
      change: function () {

        this.loginType = this.loginType == 'email' ? 'username' : 'email';

      }
    }
  })
// var ap=new Vue({
//   el:'#ap',
//   data:{
//       ok:true
//   },
//   methods:{
//     Toggle:function(){
//       this.ok=!this.ok
//     }
//   }


// })
// var example1=new Vue({
//   el:'#example-1',
//   data:{
//     items:[
//       {message:'Foo'},
//       {message:'Bar'},
//       {message:'affluent'}
//   ]
//   }
// })