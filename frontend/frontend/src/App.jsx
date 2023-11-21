import { useState } from 'react'
import Navigation from './components/Navigation.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter><Navigation/></BrowserRouter>
    </>
  )
}

export default App
