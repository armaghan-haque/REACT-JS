import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <App />
</BrowserRouter>

)
app.jsx
import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'

const App = () => {
  return (
    <div>

      <Routes>
        <Route  path='/'  element= {<Home />} />
        <Route  path='/about'  element= {<About />} />
        <Route  path='/contacts'  element= {<Contacts />} />
      </Routes>

    </div>
  )
}

export default App


