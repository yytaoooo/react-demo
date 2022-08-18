const defaultState = {
  num: 1
}

const exp = (state = defaultState,action) => {
  if(action.type === 'addNum') {
    state.num++
    console.log(state);
  }
  return {...state}
}

export default exp