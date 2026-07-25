import "../css-components/ActorsCards.css"

const ActorsCards = props => (

    <section id="actors-cards">

        <h2>Actors</h2>

        <div className="flex-container">

            {props.actorsList.map(el =>

                <div key={el.id} className='card'>

                    <img src={el.image} alt={el.name} />

                    <div className="act-description">

                        <h3>{el.name}</h3>

                        <address>

                            Born on: {el.birth_year}
                            <br />
                            Nationality: {el.nationality}

                        </address>

                        <h4>Biography:</h4>
                        <p>{el.biography}</p>

                        <h4>Awards:</h4>
                        <p>{el.awards.join(`, `)}</p>

                    </div>

                </div>

            )}

        </div>

    </section>

);

export default ActorsCards