import App from '../App1'
import List from '../pages/List'
import Register from '../pages/Register'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

const BaseRouter = () => (
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/list' element={<List />}></Route>
      </Route>
      <Route path='/register' element={<Register />}></Route>
    </Routes>
  </Router>
)

export default BaseRouter