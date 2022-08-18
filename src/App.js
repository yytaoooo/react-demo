import logo from './logo.svg';
import './App.css';
import React, { createRef,useEffect,useState,Fragment } from 'react';
import PropTypes from 'prop-types'
import img from './logo.svg'

const name = 'jack'
let isLoading = true
const arr = [{ id: 1, text: '1' }, { id: 2, text: '2' }, { id: 3, text: '3' }]
const style = { color: 'red', backgroundColor: 'blue' }

function handler(e) {
  e.preventDefault();
  console.log(e.target.href);
}
// function App(props) {
//   console.log('p',props);
//   return (
//     <div className={isLoading ? 'App' : 'app'} style={style}>
//     <a href="http://itcast.cn/" onClick={handler}>试试</a>
//     <button data-type='123'>点我</button>
//       <h1>Hello {name === 'jack' ? name : 'john'}</h1>
//       {isLoading ? <div>loading...</div> : <div>ready</div>}
//       {arr.map(ele => <span key={ele.id}>{ele.text}</span>)}
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function Grandchild() {
  return (
    <div>
      <Consumer>
        {
          data => (
            <div>
              {data}
            </div>
          )
        }
      </Consumer>
    </div>
  )
}

class Parent extends React.Component {
  constructor() {
    super()
    this.state = {
      test: 0
    }
  }
  componentDidUpdate(p) {
    console.log('update', p, this.props);
  }
  componentWillUnmount() {
    console.log('unmount');
  }
  componentDidMount() {
    console.log('孙组件');
  }
  render() {
    return (
      <div id='grand'>
        孙组件
      </div>
    )
  }
}

const { Provider, Consumer } = React.createContext()


class Mouse extends React.Component {
  componentDidMount() {
    console.log('子组件');
  }
  render() {
    return (
      <div>
        子组件
        <Parent />
      </div>
    )
  }
}

const FancyButton = React.forwardRef((props, ref) => {
  return (<button ref={ref} className='FancyButton'>
  {props.children}
</button>)
})
const ref = createRef()

function Counter() {
  const [count,setCount] = useState(0)
  const [todos,setTodos] = useState([{id:1,text: 'toplay!!!'}])

  useEffect(() => {
    document.title = `click ${count} times`
  })
  return (
    <div>
      <p>{count}times</p>
      <button onClick={() => {
        setCount(count + 1)
        setTodos([...todos,{id:todos.length + 1,text:'do'}])
        }}>
        +1
      </button>
      <div>
      todos:{todos.map(item => <span key={item.id}>{item.text}</span>)}
      </div>
    </div>
  )
}

const ChatAPI = {
  subscribeToFriendStatus: (id,fn) => {
    console.log('subscribe',id, fn);
    fn({isOnline: true})
  },
  unsubscribeFromFriendStatus: (id, fn) => {
    console.log('unsubscribe',id, fn);
    fn({isOnline: false})
  }
}

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null)

  function handleStatusChange(status) {
    setIsOnline(status.isOnline)
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
    }
  })

  if(isOnline === null) {
    return 'Loading...'
  }

  return isOnline ? 'Online' : 'Offline'
}

class App extends React.Component {
  constructor(props) {
    super(props)
    let number = 1
    let another = number
    this.state = {
      count: 0
    }
  }

  add = () => {
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count);
    })
  }
  add2 = () => {
    this.setState((state, props) => {
      return {
        count: Math.ceil(Math.random() * 3)
      }
    })

  }
  componentDidMount() {
    const ele = document.getElementById('grand')
  }
  render() {
    return (
      <FriendStatus friend={{id: 1}} />
    )
  }
}



// function FancyButton(props) {
//   return (
//     <button className='FancyButton'>
//       {props.children}
//     </button>
//   )
// }
App.propTypes = {
  name: PropTypes.string,
  fn: PropTypes.func.isRequired
}

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null)

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline)
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange)

    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange)
    }
  })

  return isOnline
}

export default App;
