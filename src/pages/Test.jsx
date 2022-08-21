import { useEffect, useRef } from 'react';
import * as ReactDOM from 'react-dom';
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
  const container = document.getElementById('root')
  const parentref = useRef(null)

  useEffect(() => {
    console.log(parentref);
  })
  return (
    <>
    {ReactDOM.createPortal(<p><Child /></p>, container)}
      <Parent ref={parentref} />
      <Parent2 />
    </>
  );
}

export default Test;