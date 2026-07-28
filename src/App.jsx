import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { use, useEffect, useState } from 'react'
import axios from "axios"
import ActressesCards from './components/jsx-cxomponents/ActressesCards'
import ActorsCards from './components/jsx-cxomponents/ActorsCards'

const App = () => {

  const [actressesList, setActressesList] = useState([])
  const [actorsList, setActorsList] = useState([])

  const [open, setOpen] = useState({actresses: undefined, actor: undefined})
  const [filter, setFilter] = useState(undefined)
  
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

      <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option value="">Choose who you prefer</option>
        <option value="actresses">Actresses</option>
        <option value="actor">Actor</option>
      </select>

      {filter === `actresses` && <ActressesCards actressesList={actressesList} open={open} setOpen={setOpen} />}

      {filter === `actor` && <ActorsCards actorsList={actorsList} open={open} setOpen={setOpen} />}

    </main>

  )
}

export default App
