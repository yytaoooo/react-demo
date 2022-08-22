import { useEffect, useRef } from 'react';
import * as ReactDOM from 'react-dom';
import {Outlet} from 'react-router-dom'
function Parent() {
  return <div>parent</div>
}
function Parent2() {
  return <div id='container'>parent2</div>
}
function Child() {
  return <div>child</div>
}

console.log('====================================');
console.log(ReactDOM);
console.log('====================================');



const Test = () => {
  return (
    <>
      <Parent2 />
      <Outlet />
    </>
  );
}

export default Test;