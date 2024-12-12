import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
//import tts_logo from '../public/tts_logo.jpeg'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/AboutUs'
import Service from './Components/Service'; // Make sure Service component is imported
import FAQs from './Components/FAQs'; // Ensure FAQs component is imported
import Pricing from './Components/Pricing'; // Ensure Pricing component is imported
import Contact from './Components/Contact'; 
import Login from './Components/LogIn'
import SignUp from './Components/SignUp'
import UserDashBoard from './Components/UserDashboard'
import { auth } from './firebaseConfig'

function App() {


  const [LoggenIn , SetLoggedIn] = useState(false)


  useEffect(() => {
    const unsubscribe = auth.beforeAuthStateChanged(user => {
      if(user) {
        SetLoggedIn(true)
      } else {
        SetLoggedIn(false)
      }
    })


    return () => unsubscribe()

  } , [])


  return (
    <Router> {/* Move the Router wrapper to the top level */}
      <div className="w-full">

        <Navbar />     

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/faqs' element={<FAQs />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='user_dashboard' element={<UserDashBoard/>}/>
        </Routes>
      </div>
    </Router>  
  )
}

export default App;
