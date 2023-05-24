import './App.css'
import ContactoList from './components/contacto_list'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Formulario from './components/form/formulario'


function App() {

  return (
    <Router  >
      <div >
        <Routes>
            <Route path='/' element={<ContactoList/>}>
              
            </Route>
            <Route path='/formulario' element={<Formulario/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
