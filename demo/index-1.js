var example1 = new Vue({
    el: '#example-1',
    data: {
        parentMessage: 'Parent',
        message: "",
        items: [
            { message: 'Food' },
            { message: 'Fruit' },
            { message: 'Rice' }
        ]
    }
})
example1.items = Object.assign({}, example1.items, {
    3: { message: '27' },
    4: { message: 'Vue Color' }
})


var vforobject = new Vue({
    el: '#v-for-object',
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
})
vforobject.object = Object.assign({}, vforobject.object, {
    age: 27,
    favoriteColor: 'Vue Green'
})

var example3 = new Vue({
    el: '#example-3',
    data: {
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
})
example3.items = Object.assign({}, example3.items, {
    3: { message: 27 },
    4: { message: 'Vue Green' }
})



var example4 = new Vue({
    el: '#example-4',
    data: {
        items: ['a', 'b', 'c']
    }
})
example4.items = Object.assign({}, example4.items, {
    age: 27,
    favoriteColor: 'Vue Green'
})

var example5 = new Vue({
    el: '#example-5',
    data: {
        numbers: [1, 2, 3, 4, 5, 6, 7]
    },
    methods: {
        even: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0;
            })
        }
    }
})

var example6 = new Vue({
    el: '#example-6',
    data: {
        n: 0
    },
    methods: {

        addCount: function () {
            this.n += 1;
            console.log(this.n);
        }
    }

})

var example7 = new Vue({
    el: '#example-7',
    data: {
        items: [
            { msg: 'abc' },
            { msg: 'teardown' }
        ]
    }
})

var example8 = new Vue({
    el: '#example-8',
    data: {
        todos: [
            { title: 'adv', isComplete: true },
            { title: 'adv222', isComplete: false }
        ],

    }
})

var example9 = new Vue({
    el: '#example-9',
    data: {
        todos: ['yyu', 'ui']
    }
})



Vue.component('todo-item', {
    props: ['title'],
    template: `
      <li>
       {{ title }}
       <button v-on:click="$emit('remove')">Remove</button>
      </li>
  `
})
var todoListExample = new Vue({
    el: '#todo-list-example',
    data: {
        nextTodoText: '',
        todos: [
            { id: 1, title: 'Do the dishes' },
            { id: 2, title: 'Take out the trash' },
            { id: 3, title: 'Mow the lawn' },
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.nextTodoText
            })
            this.nextTodoText = ''
        }
    }

})



var example11 = new Vue({
    el: '#example-11',
    data: {
        counter: 0
    }
})




Vue.component('want-item', {
    props: ['title'],
    template: '<li>\
    {{title}} \
   <button v-on:click="$emit(\'remove\')">Remove </button>\
    </li>\
    '
})

var example12 = new Vue({
    el: '#example-12',
    data: {
        nextWantText: '',
        wants: [
            { id: 0, title: 'learning Vue' },
            { id: 1, title: 'Studying Vue' },
            { id: 2, title: 'I want to becomer programmer by learning Vue' },
        ],
        nextWantId: 3
    },
    methods: {
        greet: function () {
            this.wants.push({
                id: this.nextWantId++,
                title: this.nextWantText
            })
            this.nextWantText = ''
        }
    }

})

var example15 = new Vue({
    el: '#example-15',
    // methods:{
    //     say:function(message){
    //         alert(message)
    //     }
    // },
    methods: {
        warn: function (message, event) {
            if (event)
                event.preventDefault;

            alert(message);

        }
    }
})


var example16 = new Vue({
    el: '#example-16',
    data: {
        message: ''
    }
})


var example17 = new Vue({
    el: '#example-17',
    data: {
        checked: false
    }
})

var example18 = new Vue({
    el: '#example-18',
    data: {
        checkedNames: []
    }
})

var example19 = new Vue({
    el: '#example-19',
    data: {
        picked: ''
    }
})


var example20 = new Vue({
    el: '#example-20',
    data: {
        selected: 'A',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' },
        ]

    }
})


var example21 = new Vue({
    el: '#example-21',
    data: {
        toggle: ''
    }
})

var example22 = new Vue({
    el: '#example-22',
    data: {
        pick: '',
        a: 12
    }
})


var example23 = new Vue({
    el: '#example-23',
    data: {
        selected: {},
        number: 156
    }
})

Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: ' <button v-on:click="count++">You clicked me {{count}} times.</button>'

})

var example24 = new Vue({
    el: '#example-24'
})


Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{title}}</h3>'
})

var example25 = new Vue({
    el: '#example-25',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
        ]
    }
})


Vue.component('blog-post', {
    props: ['post'],
    template: `<div class='blog-post'>
              <h3>{{post.title}}</h3>
              <button v-on:click="$emit('enlarge-text')">
               Enlarge text
                </button>
              <div v-html='post.content'></div>
               </div>`
})

var example26 = new Vue({
    el: '#example-26',
    data: {
        posts: [
            { id: 1, title: 'Learn Vue', content: '...content...' },
            { id: 2, title: 'Transtion', content: '...content...' },
            { id: 3, title: 'Study Vue', content: '...content...' },
        ],
        postFontSize: 1
    }

})


Vue.component('custom-input', {
    props: ['value'],
    template: `<input
               v-bind:value='value'
               v-on:input="$emit('input',$event.target.value)"
              >`
})

var example27 = new Vue({
    el: '#example-27',
    data: {
        searchText: '',

    }
})


Vue.component('alert-box', {
    template: `
            <div class='demo-alert-box'>
            <strong>Error</strong>
            <slot> </slot>
            </div>
             `
})

var example28 = new Vue({
    el: '#example-28',

})


var tabs = [
    {
        name: 'Home',
        component: {
            template: '<div>Home component</div>'
        }
    },
    {
        name: 'Posts',
        component: {
            template: '<div>Posts component</div>'
        }
    },
    {
        name: 'Archive',
        component: {
            template: '<div>Archive component</div>',
        }
    }

]

var dynamiccomponentdemo = new Vue({
    el: '#dynamic-component-demo',
    data: {
        tabs: tabs,
        currentTab: tabs[0]
    }
})





Vue.component('demo-width', {
    template: `
     <button v-on:click="$emit('widening')">
     变宽
     </button>`
})

Vue.component('demo-height', {
    template: `<button v-on:click="$emit('heighten')">变高</button>`
})
Vue.component('demo-color', {
    template: `<button v-on:click="$emit('discoloration')">变色</button>`
})
Vue.component('demo-color', {
    template: `<button v-on:click="$emit('discoloration')">变色</button>`
})
Vue.component('demo-hide', {
    template: `<button v-on:click="$emit('hidden')">隐藏</button>`
})
Vue.component('demo-reset', {
    template: `<button v-on:click="$emit('reseting')">重置</button>`
})

var getData = function () {
    return {
        currentWidth: 100,
        currentHeight: 100,
        background: '#000',
        display: 'block'
    };
}
var outer = new Vue({
    el: '#outer',
    data: {
        styleObject: getData()
    },
    computed: {
        comStyle: function () {
            return {
                width: this.styleObject.currentWidth + "px",
                height: this.styleObject.currentHeight + "px",
                background: this.styleObject.background,
                display: this.styleObject.display
            }
        }

    },
    methods: {
        resile: function () {

            this.styleObject = getData();

        }
    }

})




var example31 = new Vue({
    el: '#example-31',
    data: {
        current: { id: 'red', color: "red" },
        styleObjects: [
            { id: 'red', title: '红色', color: "red" },
            { id: 'green', title: '绿色', color: "green" },
            { id: 'black', title: '黑色', color: "black" },
            { id: 'test', title: '颜色', color: "#303" },
            { id: '123123', title: '随机', color: "#0f0" },
        ]
    },
    methods: {
        changeSkin: function (a) {
            this.current = a
        }
    }
})


Vue.component('demo-button', {
    template: `<button v-on:click="$emit('obtain-parameters')">Biography</button>`
})



var example32 = new Vue({
    el: '#example-32',
    data: {
        parameters: [
            { type: "text", value: "北京市" },
            { type: "text", value: "朝阳区" },
            { type: "text", value: "星火路" },
            { type: "text", value: "九隆街" },
        ]
    },
    methods: {
        getParameter: function () {
            Array.prototype.forEach.call(this.parameters, function (x) {
                alert(x.value);
            })
        }
    }
})


Vue.component('base-input', {
    inheritAttrs: false,
    props: ['label', 'value'],
    computed: {
        inputListeners: function () {
            var vm = this
            return Object.assign({},
                this.$listeners,
                {
                    input: function (event) {
                        vm.$emit('input', event.target.value)
                    }
                }
            )
        }
    },
    template: `
      <label>
        {{ label }}
        <input
        v-bind="$attrs"
          v-bind:value="value"
          v-on:input="$emit('input', $event.target.value)"
        >
      </label>
    `
})
var example33 = new Vue({
    el: '#example-33',
    data: {
        username: 'justing'
    },
    methods: {
        onFocus: function (event) {

            if (event) {
                alert(event.target.tagName)
            }
        },
        show: function () {
            alert(this.username)
        }
    }
})


Vue.component('base-checkbox', {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: false
    },
    template: `
           <input
           type='checkbox'
           v-bind:checked='checked'
           v-on:change="$emit('change',$event.target.checked)"
           >
    `
})

var example34 = new Vue({
    el: '#example-34',
    data: {
        lovingVue: 'dfd'
    }

})

Vue.component('navigation-link', {
    props: ["url"],
    template: `
            <a
             v-bind:href='url'
             class="nav-link"
             target="_blank"
            >
            <slot></slot>
            </a>
    `
})

Vue.component('font-awesome-icon', {
    props: ["name"],
    template: `<i class="icon"   v-bind:class='"icon-"+name' ></i>`
})
Vue.component('demo-button', {
    template: `
           <button type='submit'>
           <slot>Sumbit</slot>
           </button>
    `
})

var example35 = new Vue({
    el: '#example-35',
    data: {
        user: { name: 'tytr' }
    }
})




Vue.component('base-layout', {
    template: `
       <div class="container">
       <header>
         <slot name="header"></slot>
       </header>
       <main>
         <slot></slot>
       </main>
       <footer>
         <slot name="footer"></slot>
       </footer>
     </div>
       `
})
var example36 = new Vue({
    el: '#example-36',
})

Vue.component('todo-list', {
    props: ["todos"],
    template: `
       <ul>
       <li
       v-for='todo in todos'
       v-bind:key='todo.id'
       >
       <slot v-bind:todo='todo'>
           {{todo.text}}
       </slot>
      </li>
   </ul>

       `
})
var example37 = new Vue({
    el: '#example-37',
    data: {
        todos: [
            { id: 1, text: 'learning Vue', isComplete: true },
            { id: 2, text: 'Complete Study', isComplete: false },
        ]
    }
})

var example38 = new Vue({
    el: '#example-38',
    data: {
        todos: [
            { id: 1, text: 'Studying Vue', isComplete: false },
            { id: 2, text: 'Instict', isComplete: true },
        ]
    }
})

Vue.component('base-input', {
    props: ["value"],
    template: `
       <input ref='ipt'
         v-bind:value='value'
     >`,
    methods: {
        ab: function () {
            this.$refs.ipt.focus();

        }
    }


})

var example39 = new Vue({
    el: '#example-39',
    methods: {
        focus: function () {
            this.$refs.usernameInput.ab()

        }
    }
})

Vue.component('tree-folder', {
    props: ['folder'],
    template: `
            <p>
                <span  @click="toggleShow">{{ folder.name }}</span>
                <tree-folder-contents ref="tfc" 
                :children="folder.children"/>
            </p>
           
            ` ,
    methods: {
        toggleShow: function () {
            this.$refs.tfc.checked = !this.$refs.tfc.checked
        }
    }

})
Vue.component('tree-folder-contents', {
    props: ['children'],
    data: function () {
        return {
            checked: false
        }
    },
    template: `
           <ul v-show="checked">
           <li v-for="child in children">
           <tree-folder 
            v-if="child.children"
            :folder="child"/>
           <span v-else>{{ child.name }}</span>
           </li>
           </ul>
            `
})

var example40 = new Vue({
    el: '#example-40',
    data: {
        folder: {

            name: '帮助',
            children: [
                {
                    name: '位置', children: [
                        { name: '位置22' },
                        { name: '工具22' }
                    ]
                },
                {
                    name: '工具', children: [
                        { name: '' },
                        { name: '' }]

                },
            ]
        }
    }

})


Vue.component('my-component', {
    props: ['isActive'],

    template: `<label 
    v-bind:class='{active:isActive}'
 
    />
 `
})
var example41 = new Vue({
    el: '#example-41',
})



Vue.component('hello-world', {
    template: '#hello-world-template'
})
var example42 = new Vue({
    el: '#example-42',
    template: '#hello-world-template'
})

Vue.component('terms-of-service', {
    template: `
      <div v-once>
       <h1>Terms of Service </h1>
       ... a lot of static content ...
      
      </div>
    `
})
var example43 = new Vue({
    el: '#example-43',

})

Vue.component('demo-fade', {
    data: function () {
        return {
            show: false
        }
    },
    template: ` 
            <div id='demo'>
            <button @click='show = !show'>
            Toggle
            </button>
            <transition 
            :duration='8000' 
            name='fade'
           >
            <p v-if='show'>hello</p>    
            </transition> 
            </div> 
         `
})
var example44 = new Vue({
    el: '#example-44',

})

//   Vue.component('demo-velocity',{
//       props:['before-enter','enter','leave'],
//       data:function(){
//         return {
//             show:true
//         }
//       },
//       template:` 
//       <div id='demo1'>
//           <button @click='show = !show'>
//           Toggle
//           </button>
//           <transition 
//            v-on:before-enter='beforeEnter'
//            v-on:enter='enter'
//            v-on:leave='leave'
//            v-bind:css='false'
//            >
//           <p v-if='show'>Demo</p>    
//           </transition> 
//           </div> 
//           `
// })
var example45 = new Vue({
    el: '#example-45',
    data: {
        show: false
    },
    methods: {
        beforeEnter: function (el) {
            el.style.opacity = 0
            el.style.transformOrigin = 'left'
        },
        enter: function (el, done) {
            Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
            Velocity(el, { fontSize: '1em' }, { complete: done })
        },
        leave: function (el, done) {
            Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
            Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
            Velocity(el, {
                rotateZ: '45deg',
                translateY: '30px',
                translateX: '30px',
                opacity: 0
            }, { complete: done })
        }
    }
})




Vue.component('demo-slide', {

    data: function () {
        return {
            isEditing: false
        }
    },
    methods: {
        show: function () {
            this.isEditing = !this.isEditing
        }
    },
    template: ` 
    
    <transition>
    <button 
    :key='isEditing'
    @click='show'
    >
        {{isEditing?'Save':'Edit'}}
    </button>
</transition>`
})
var example46 = new Vue({
    el: '#example-46',
    // data:{
    //     isEditing:true
    // },
    // methods:{
    //     show:function(){
    //         this.isEditing=!this.isEditing
    //     }
    // }
})


Vue.component('demo-multiple-button-trans', {
    data: function () {
        return {
            docState: 'saved'
        }
    },
    computed: {
        buttonMessage: function () {
            switch (this.docState) {
                case 'saved': return 'Edit'
                case 'edited': return 'Save'
                case 'editing': return 'Cancel'
            }
        }
    },
    template: `
    <transition>
      <button :key='docState'  @click='buttonChange' >{{buttonMessage}}</button>
      </transition>
    `,
    methods: {
        buttonChange: function () {
            console.log(this.docState)
            switch (this.docState) {
                case 'saved': this.docState = 'edited'; break;
                case 'edited': this.docState = 'editing'; break;
                case 'editing': this.docState = 'saved'; break;
            }
            console.log(this.docState)
        }
    }
}
)
var example47 = new Vue({
    el: '#example-47'
})


Vue.component('demo-fadeoutin', {
    data: function () {
        return {
            onOffConversion: 'oning'
        }
    },
    computed: {
        buttonName: function () {
            switch (this.onOffConversion) {
                case 'oning': return 'on';
                case 'offing': return 'off'
            }
        }
    },
    template: `<transition name='fade'>
             <button 
             :key='onOffConversion'
             @click='buttonSwitch'>
             {{buttonName}}
             </button>
             </transition>`,

    methods: {
        buttonSwitch: function () {
            switch (this.onOffConversion) {
                case 'oning': this.onOffConversion = 'offing'; break;
                case 'offing': this.onOffConversion = 'oning'; break;
            }
        }
    }
})
var example48 = new Vue({
    el: '#example-48',
})


// Vue.component('radio-component',{
//     data:function(){
//         return {
//             view:'v-a'
//         }
//     },
//     template:` 
//    <input  
//    :type='radio'

//    :value="v-a" 
//    @click='contentChange'
//    v-model='view'
//    >
//     <label for="a">A</label>
//    <input  
//     :type="radio" 
//     :value="v-b"
//     v-model='view'
//      >
//     <label for="b">B</label>

//     <br>

// `,
// computed:{
// contentChangingOver:function(){
//     switch(this.view){
//         case "v-a":return'Component A';
//         case "v-b":return'Component B';
//     }
// }
// },
// methods:{
//     contentChange:function(){
//         switch(this.view){
//             case "v-a":this.view="v-b";break;
//             case "v-b":this.view="v-a";break;
//         }

//     }
//     }
// })
var example49 = new Vue({
    el: '#transition-components-demo',
    data: {
        view: 'v-a'
    },
    components: {
        'v-a': {
            template: '<div>Component A</div>'
        },
        'v-b': {
            template: '<div>Component B</div>'
        }

    },
    methods: {
        contentChange: function () {
            switch (this.view) {
                case "v-a": return 'Component A';
                case "v-b": return 'Component B';
            }

        }
    }
})


Vue.component('list-demo', {
    data: function () {
        return {
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            nextNum: 10
        }
    },
    template: `
    <div>
    <button @click='add'>Add</button>
    <button @click='remove'>Remove</button>
    <transition-group name='list' tag='p'>
    <span v-for='item in items'  
    :key='item' 
    class='list-item'>
         {{item}}
    </span>
    </transition-group>
    </div>
    `,
    methods: {
        radomIndex: function () {
            return Math.floor(Math.random() * this.items.length)
        },
        add: function () {
            return this.items.splice(this.radomIndex(), 0, this.nextNum++)
        },
        remove: function () {
            return this.items.splice(this.radomIndex(), 1)
        }
    }

})
var example50 = new Vue({
    el: '#example-50',
})

Vue.component('flip-list-demo', {
    data: function () {
        return {
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    },
    template: `
    
          <div>
          <button @click='shuffle'>Shuffle </button>
          <transition-group name='flip-list' tag='ul'>
          <li 
          v-for='item in items'
          :key='item'
          >
          {{item}}
          </li>
          </transition-group>
          </div> 
          `,
    methods: {
        shuffle: function () {
            this.items = _.shuffle(this.items)
        }
    }
})
var example51 = new Vue({
    el: '#example-51'
})

Vue.component('list-complete-demo', {
    data: function () {
        return {
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            nextNum: 10
        }
    },
    template: `
    <div>
    <button v-on:click="shuffle">Shuffle</button>
    <button v-on:click="add">Add</button>
    <button v-on:click="remove">Remove</button>
    <transition-group name="list-complete" tag="p">
    <span
      v-for="item in items"
      v-bind:key="item"
      class="list-complete-item"
    >
      {{ item }}
    </span>
  </transition-group>
    </div>
    `,
    methods: {
        radomIndex: function () {
            return Math.floor(Math.random() * this.items.length)
        },
        add: function () {
            return this.items.splice(this.radomIndex(), 0, this.nextNum++)
        },
        remove: function () {
            return this.items.splice(this.radomIndex(), 1)
        },

        shuffle: function () {
            this.items = _.shuffle(this.items)
        }
    }
})
var example52 = new Vue({
    el: '#example-52',
})


Vue.component('sudoku-component', {
    data: function () {
        return {
            cells: Array.apply(null, { length: 81 })
                .map(function (_, index) {
                    return {
                        id: index,
                        number: index % 9 + 1
                    }
                })
        }
    },
    template: `
       <div>
           <button @click='shuffle'>
           Shuffle
           </button>
           <transition-group  name='cell'  tag='div'
           class='container'>
           <div v-for='cell in cells'
           :key='cell.id'
           class='cell'>
           {{cell.number}}
           </div>
           </transition-group>
        </div>   
          `,
    methods: {
        shuffle: function () {
            this.cells = _.shuffle(this.cells)
        }
    }
})
var sudokudemo = new Vue({
    el: '#sudoku-demo'
})

Vue.component('stagger-list-demo', {
    data: function () {
        return {
            query: '',
            list: [
                { msg: 'Bruce Lee' },
                { msg: 'Jackie Chan' },
                { msg: 'Chuck Norris' },
                { msg: 'Jet Li' },
                { msg: 'Kung Fury' }
            ]
        }
    },
    template: `
         <div>
         <input v-model='query'>
         <transition-group
          name='staggered-fade'
          tag='ul'
          :css='false'
        @before-enter='beforeEnter'
        @enter='enter'
        @leave='leave'
        >
        <li
         v-for='(item,index) in computedList'
         :key='item.msg'
         :data-index='index'>
            {{item.msg}}
        </li>
          </transition-group>
          </div>
         `  ,
    computed: {
        computedList: function () {
            var vm = this
            return this.list.filter(function (item) {
                return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1;
            })
        }
    },
    methods: {
        beforeEnter: function (el) {
            el.style.opacity = 0
            el.style.height = 0
        },
        enter: function (el, done) {
            var delay = el.dataset.index * 150
            setTimeout(function () {
                Velocity(
                    el,
                    { opacity: 1, height: '1.6em' },
                    { complete: done }
                )
            }, delay)
        },
        leave: function (el, done) {
            var delay = el.dataset.index * 150
            setTimeout(function () {
                Velocity(
                    el,
                    { opacity: 0, height: 0 },
                    { complete: done }
                )
            }, delay)
        }
    }
})


// Vue.component('my-special-transition',{
//     functional:true,
//     render:function(createElement,context){
//         var data={
//             props:{
//                 names:'very-special-transition',
//                 mode='out-in',
//                 tag='ul',

//             },
//             on:{
//                 beforeEnter:function(el){
//                     el.style.opacity = 0
//                     el.style.height = 0
//                 },
//                 enter: function (el, done) {

//                setTimeout(function () {
//                Velocity(
//                el,
//               { opacity: 1, height: '1.6em' },
//               { complete: done }
//         )
//       }, delay)
//     },
//             }
//         }
//     }

// })
// 


var dynamicfadedemo = new Vue({
    el: '#dynamic-fade-demo',
    data: {
        show: true,
        fadeInDuration: 1000,
        fadeOutDuration: 1000,
        maxFadeDuration: 1500,
        stop: true
    },
    mounted: function () {
        console.log('this', this)
        this.show = false
    },
    methods: {
        beforeEnter: function (el) {
            console.log('el', el)
            el.style.opacity = 0
        },
        enter: function (el, done) {
            console.log('el', el, 'done', done, 'vm', vm)
            var vm = this
            Velocity(el,
                { opacity: 1 },
                {
                    duration: this.fadeInDuration,
                    complete: function () {
                        done()
                        console.log('done()', done(), 'vm.stop', vm.stop)
                        if (!vm.stop) vm.show = false
                    }
                }
            )
        },
        leave: function (el, done) {
            console.log('el', el, 'done', done, 'vm', vm)
            var vm = this
            Velocity(el,
                { opacity: 0 },
                {
                    duration: this.fadeOutDuration,
                    complete: function () {
                        console.log('done()', done())
                        done()
                        vm.show = true
                    }
                }
            )
        }
    }
})

var animatednumberdemo = new Vue({
    el: '#animated-number-demo',
    data: {
        number: 0,
        tweenedNumber: 0
    },
    computed: {
        animatedNumber: function () {
            console.log(this, this.tweenedNumber)
            return this.tweenedNumber.toFixed(0);
        }
    },
    watch: {
        number: function (newValue) {
            console.log(this.$data)
            //console.log('this.$data:', this.$data, 'tweenedNumber:', { tweenedNumber: newValue })
            TweenLite.to(this.$data, 1, { tweenedNumber: newValue })
            //this.$data.tweenedNumber = newValue;
            //this.number = newValue;
        }
    }
})
var Color = net.brehaut.Color
Vue.component('change-graphcolor-demo', {
    data: function () {
        return {
            colorQuery: '',
            color: {
                red: 0,
                green: 0,
                blue: 0,
                alpha: 1
            },
            tweenedColor: {}
        }
    },
    created: function () {
        this.tweenedColor = Object.assign({}, this.color)
        console.log(this.tweened, this.color)
    },

    template: `
    <div>
    <input
    v-model='colorQuery'
    @keyup.enter='updateColor'
    placeholder='Enter a color'
    >
    <button @click='updateColor'>
    Update</button>
    <p>Preview:</p>
    <span
     :style='{backgroundColor:tweenedCSSColor}'
     class='example-56-color-preview'
    >
    </span>
    <p>{{tweenedCSSColor}} </p>
    </div>
    `,
    watch: {
        color: function () {
            function animate() {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }


            new TWEEN.Tween(this.tweenedColor)
                .to(this.color, 750)
                .start()
            animate()
        }
    },
    computed: {
        tweenedCSSColor: function () {
            return new Color({
                red: this.tweenedColor.red,
                green: this.tweenedColor.green,
                blue: this.tweenedColor.blue,
                alpha: this.tweenedColor.alpha
            }).toCSS()
        }
    },
    methods: {
        updateColor: function () {
            console.log(this.colorQuery)
            this.color = new Color(this.colorQuery).toRGB();
            this.colorQuery = ''
        }
    }

})
var example56 = new Vue({
    el: '#example-56',
})


Vue.component('animated-integer', {
    template: '<span>{{tweeningValue}}</span>',
    props: {
        value: {
            type: Number,
            required: true
        }
    },
    data: function () {
        return {
            tweeningValue: 0
        }
    },
    watch: {
        value: function (newValue, oldValue) {

            this.tween(oldValue, newValue)
       //     console.log(this.tween, this.value)
        }
    },
    mounted: function () {
     //   console.log(this.value, this.tween)
        this.tween(0, this.value)
    },
    methods: {
        tween: function (startValue, endValue) {
            var vm = this
            function animate() {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }

            new TWEEN.Tween({ tweeningValue: startValue })
                .to({ tweeningValue: endValue }, 500)
                 .onUpdate(function (object) {
                     console.log(startValue,endValue,object);

                     vm.tweeningValue = (endValue* object).toFixed(0); 
                 })
                .start();

            animate()
        }
    }
})
var example57 = new Vue({
    el: '#example-57',
    data: {
        firstNumber: 20,
        secondNumber: 40
    },
    computed: {
        result: function () {
            return this.firstNumber + this.secondNumber
        }
    }
})

var myMixin={
    created:function(){
        this.hello()
    },
    methods:{
        hello:function(){
            console.log('hello from mixin!')
        }
    }
}
var Component=Vue.extend({
    mixins:[myMixin]

})
var component=new Component();

var mixin={
    data:function(){
        return{
            message:'hello',
            foo:'abc'
        }
    }
}
new Vue({
    mixins:[mixin],
    data:function(){
        return {
            message:'goodbye',
            bar:'def'
        }
    },
    created:function(){
        console.log(this.$data)
    }
})