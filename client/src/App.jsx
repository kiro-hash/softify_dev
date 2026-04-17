import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Softify from './pages/Softify'
import Cursor from './components/cursor'
import OurProjects from './pages/OurProjects'
import Profile from './pages/Profile'
import GetStarted from './pages/GetStarted'
function App() {

  return (
    <>
      <Cursor/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/softify' element={<Softify/>}/>
          <Route path='/projects' element={<OurProjects/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/started' element={<GetStarted/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App