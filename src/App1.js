import React, { createContext, useState } from "react";
import {connect} from 'react-redux'
import { Button } from 'antd';
import {Outlet} from 'react-router-dom'
import Login from './pages/Login'

export const TestContext = React.createContext()
function App(props) {
  const [test,setTest] = useState('测试一下')
  
  return (
    <>
    <TestContext.Provider value={{test,setTest}}>
      <p>值是：{test}</p>
      <Button type="primary">Primary Button</Button>
      <Outlet />
    </TestContext.Provider>
  </>
  )
}

const mapStateToProps = (state) => {
  return {
    num: state.num
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment() {
      const action = {type: 'addNum'}
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)


