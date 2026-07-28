import { useEffect, useState } from "react";
import "../css-components/ActorsCards.css"

const ActorsCards = props => {

    const [filter, setFilter] = useState(``);
    const [filteredActor, setFilteredActor] = useState([]);

    useEffect(() => setFilteredActor(
        props.actorsList.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
    ), [filter])

    return (

        <section id="actors-cards">

            <h2>Actors</h2>

            <label>
                <span>Search a Name</span>
                <input type="text" name="actresses-name" value={filter} onChange={e => (setFilter(e.target.value))} />
            </label>

            <div className="flex-container">

                {filteredActor.map(el => <div key={el.id} className='card'>

                    <img src={el.image} alt={el.name} />

                    <h3>{el.name}</h3>

                    <div className="act-description" hidden={props.open.actor !== el.id}>

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

                    <button hidden={props.open.actor === el.id} onClick={() => props.setOpen({ ...props.open, actor: el.id })}>

                        <i className="bi bi-chevron-down"></i>
                        More info

                    </button>

                    <button hidden={props.open.actor !== el.id} onClick={() => props.setOpen({ ...props.open, actor: undefined })}>

                        <i className="bi bi-chevron-up"></i>
                        Close info

                    </button>

                </div>

                )}

            </div>

        </section>

    );
};

export default ActorsCards