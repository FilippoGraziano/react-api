import "../css-components/ActorsCards.css"
import 'bootstrap-icons/font/bootstrap-icons.css'

const ActorsCards = props => (

    <section id="actors-cards">

        <h2>Actors</h2>

        <div className="flex-container">

            {props.actorsList.map(el =>

                <div key={el.id} className='card'>

                    <img src={el.image} alt={el.name} />

                    <div className="act-description" hidden={props.open.actor !== el.id}>

                        <h3>{el.name}</h3>

                        <address>

                            Born on: {el.birth_year}
                            <br />
                            Nationality: {el.nationality}

                        </address>

                        <h4>Know for:</h4>
                        <p>{el.known_for.join(`, `)}</p>

                        <h4>Biography:</h4>
                        <p>{el.biography}</p>

                        <h4>Awards:</h4>
                        <p>{el.awards.join(`, `)}</p>

                    </div>

                    <button hidden={props.open.actor === el.id} onClick={() => props.setOpen({...props.open, actor: el.id})} >

                        <i class="bi bi-chevron-down"></i>
                        More info

                    </button>

                    <button hidden={props.open.actor !== el.id} onClick={() => props.setOpen({...props.open, actor: undefined})} >

                        <i class="bi bi-chevron-up"></i>
                        Close info

                    </button>

                </div>

            )}

        </div>

    </section>

);

export default ActorsCards