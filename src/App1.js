import React from "react";
import {connect} from 'react-redux'
import { Button } from 'antd';
import {Outlet} from 'react-router-dom'

function App(props) {
  return (
    <>
    <Button type="primary">Primary Button</Button>
    <Outlet />
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
