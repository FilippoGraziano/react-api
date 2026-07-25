import './App.css'
import { useEffect, useState } from 'react'
import axios from "axios"
import ActressesCards from './components/jsx-cxomponents/ActressesCards'

const App = () => {

  const [actressesList, setActressesList] = useState([])

  const fetchActress = () => {

    axios.get(`https://lanciweb.github.io/demo/api/actresses/`)
      .then(res => setActressesList(res.data))
      
  }

  useEffect(fetchActress, [])



  return (

    <main className='container'>

      <ActressesCards actressesList={actressesList} />

    </main>

  )
}

export default App
