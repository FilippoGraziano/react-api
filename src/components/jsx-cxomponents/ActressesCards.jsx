import "../css-components/ActressesCards.css"

const ActressesCards = props => (

    <section id="actresses-cards">

        <h2>Actresses</h2>

        <div className="grid-container">

            {props.actressesList.map(el =>

                <div key={el.id} className='card'>

                    <img src={el.image} alt={el.name} />

                    <div className="act-description">

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

);

export default ActressesCards