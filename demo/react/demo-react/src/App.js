
import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

// function formateName(user) {
//   return user.firstName + ' ' + user.lastName;
// }
// function getGreeting(user) {
// if(user){
//   return <h1>Hello,{formateName(user)}!</h1>
// }
// return <h1>Hello,Stranger.</h1>
// }
// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// function Welcome(props){
//   return <h1>Hello,{props.name}</h1>;
// }
// function Welcome(props){
//   return <h1>Hello, {props.name}</h1>;
// }

// function Adscribe() {
//   return (

//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }
// var now=new Date().toLocaleTimeString();
// setInterval(function tick() {
//   alert(new Date().toLocaleTimeString())
// },1000)
// const element = (
//   <div>
//     <h1>Hello, world!</h1>
//     <h2>It is {now}.</h2>
//   </div>
// );
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
// }
// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar"
//              src={props.author.avatarUrl}
//              alt={props.author.name} />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// };
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}
const posts = [
  { id: 1, title: 'Hello,World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm' }
]
function ListItems(props) {
  return <li>{props.value}</li>
}
function NumberList(props) {

  const listItems = props.numbers.map((number) =>
    <ListItems key={number.toString()}
      value={number} />


  );
  return (
    <ul>
      {listItems}
    </ul>

  )
}
const numbers = [1, 2, 3, 4, 5];
function WarningBanner(props) {
  if (!props.warn) {
   // console.log(props.warn, props)
    return null;
  }
  return (
    <div className='warning'>Warning</div>
  );
}

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { showWarning: true }
    this.handleToggleClick = this.handleToggleClick.bind(this);

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };

    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);

    this.state = { name: 'Hello,Jack' };
    this.state = {

      date: new Date()
    };


  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert('A name was submitted:' + this.state.value);
    event.preventDefault();
  }







  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }
  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }
  preventPop(name, e) {
    e.preventDefault();
    alert(name);
  }
  handleClick() {
    console.log('this is', this)
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn

    }))
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillMount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState(() => ({
      date: new Date()
    }));
  }


  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((numbers) =>
      <li>{numbers}</li>
    )



    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>

        <h1>Hello,world!</h1>
        <FormattedDate date={this.state.date} />
        <hr />
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <hr />
        <p>hello</p>
        <a href="https://reactjs.org"
          onClick={this.preventPop.bind(this, this.state.name)}
        >
          Click
      </a>
        <hr />
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        <br />
        <hr />
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
        <hr />
        <ul>{listItems}</ul>
        <hr />
        <NumberList numbers={numbers} />
        <hr />
        <Blog posts={posts} />

        <hr />
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input type='text' value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          
        </form>
      </div>
      //       <Comment
      //       date={comment.date}
      //       text={comment.text}
      //       author={comment.author} />,

      //{ <Adscribe/> }

      // <div>

      // <h1>Hello, world!</h1>
      // <h1>Hello,{formateName(user)}</h1>
      // {getGreeting()}  

      // </div >
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
     </button>
  )
}
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

export default App;
