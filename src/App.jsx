
import AppScreen from './pages/AppScreen/AppScreen'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Buttons from './pages/AppScreen/Buttons'
import { useState } from 'react'

function App() {


   const [currentPage, setCurrentPage] = useState('to do')



  return (
    <div className="app-container">
      <ToastContainer position="top-right" />
      {/*  button section */}
      <Buttons setCurrentPage={setCurrentPage}/>
      {/* app render section */}
      <AppScreen currentPage={currentPage}/>
    </div>
  )
}

export default App
