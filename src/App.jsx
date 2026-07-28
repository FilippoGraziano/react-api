import './App.css'
import { useEffect, useState } from 'react'
import axios from "axios"
import ActressesCards from './components/jsx-cxomponents/ActressesCards'
import ActorsCards from './components/jsx-cxomponents/ActorsCards'

const App = () => {

  const [actressesList, setActressesList] = useState([])
  const [actorsList, setActorsList] = useState([])

  const [open, setOpen] = useState({actresses: undefined, actor: undefined})
  
  const fetchAct = () => {

    axios.get(`https://lanciweb.github.io/demo/api/actresses/`)
      .then(res => setActressesList(res.data))

    axios.get(`https://lanciweb.github.io/demo/api/actors/`)
      .then(res => setActorsList(res.data))

  }

  console.log()

  useEffect(fetchAct, [])


  return (

    <main className='container'>

      <ActressesCards actressesList={actressesList} open={open} setOpen={setOpen} />

      <ActorsCards actorsList={actorsList} open={open} setOpen={setOpen} />

    </main>

  )
}

export default App
