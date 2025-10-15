
import './App.css'
import BothControlledAndUncontrolled from './components/BothControlledAndUncontrolled'
import CheckedBox from './components/controlled-form/CheckedBox'
import Login from './components/controlled-form/Login'
import Register from './components/controlled-form/Register'
import FeedbackForm from './components/uncontrolled-form/FeedbackForm'
import Registration from './components/uncontrolled-form/Registration'

function App() {


  return (
    <>
      {/* <Login/> */}
      {/* <Register/> */}
      <Registration/>
      <FeedbackForm/>
      <BothControlledAndUncontrolled/>
      <CheckedBox/>
    </>
  )
}

export default App
