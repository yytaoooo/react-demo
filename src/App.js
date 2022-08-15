import logo from './logo.svg';
import './App.css';
import React from 'react';
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
    console.log('update',p,this.props);
  }
  componentWillUnmount() {
    console.log('unmount');
  }
  render() {
    return (
      <div>
        {this.props.count}
        <div onClick={(e) => {this.forceUpdate()}}>add</div>
      </div>
    )
  }
}

const { Provider, Consumer } = React.createContext()

function withMouse(WrappedComponent) {
  class Mouse extends React.Component {
    render() {
      return <WrappedComponent {...this.state} />
    }
  }

  return Mouse
}

class Mouse extends React.Component {
  state = {
    x: 0,
    y: 0
  }

  handler = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handler)
  }

  render() {
    return (
      this.props.render(this.state)
    )
  }
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    console.log(3);
  }
  render() {
    console.log(2);
    return (
      <div id='title' onClick={() => {this.setState({count : this.state.count + 1})}}>
      <Mouse render={data => <h1>x:{data.x}y:{data.y}</h1>} />
      <Mouse render={data => <img src={img} alt='猫' style={{
        position: 'absolute',
        top: 0,
        left: 0
      }} />} />
      {
        this.state.count < 3 ? <Parent count={this.state.count} /> : <div>消失了</div>
      }
      </div>
    )
  }
}
App.propTypes = {
  name: PropTypes.string,
  fn: PropTypes.func.isRequired
}

export default App;
