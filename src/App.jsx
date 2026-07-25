import './App.css'
import axios from "axios"
import { useEffect, useState } from 'react'

const App = () => {

  const [actressesList, setActressesList] = useState([])

  const fetchActress = () => {

    axios.get(`https://lanciweb.github.io/demo/api/actresses/`)
      .then(res => setActressesList(res.data))
      
  }

  useEffect(fetchActress, [])



  return (

    <>

      <section className='container' id="actresses-cards">

        <h2>Actresses</h2>

        <div className="grid-container">

          {actressesList.map(el =>

            <div key={el.id} className='card'>

              <img src={el.image} alt={el.name} />

              <div className="actress-description">

                <h3>{el.name}</h3>
                
                <address>

                  Born on: {el.birth_year}  
                  <br /> 
                  Nationality: {el.nationality}

                </address>

                <h4>Biography</h4>
                <p>{el.biography}</p>

                <h4>Awards</h4>
                <p>{el.awards}</p>

              </div>

            </div>

          )}

        </div>

      </section>

    </>

  )
}

export default App
