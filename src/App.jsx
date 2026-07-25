import './App.css'
import axios from "axios"
import { useEffect, useState } from 'react'

const App = () => {

  const [actressList, setActressList] = useState([])

  const fetchActress = () => {

    axios.get(`https://lanciweb.github.io/demo/api/actresses/`)
      .then(res => setActressList(res.data))
      
  }

  useEffect(fetchActress, [])



  return (
    <>
      <ul id="actress-list">

        <li>
          <h2>Actress</h2>
        </li>

        {actressList.map(el =>

          <li key={el.id}>{el.name}</li>

        )}

      </ul>
    </>
  )
}

export default App
