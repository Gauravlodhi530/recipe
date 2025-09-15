import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="mt-17">
      <Navbar />
      <Mainroutes/>
      <Footer />
    </div>
  )
}

export default App
